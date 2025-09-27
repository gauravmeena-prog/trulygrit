import { NextRequest, NextResponse } from 'next/server'
import { 
  getAllSubmissions, 
  getSubmissionStats, 
  searchSubmissions,
  updateSubmissionStatus,
  deleteSubmission 
} from '@/lib/data-storage'

// Simple authentication check
function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  const adminKey = process.env.ADMIN_SECRET_KEY
  
  if (!adminKey) {
    console.error('ADMIN_SECRET_KEY not configured')
    return false
  }
  
  return authHeader === `Bearer ${adminKey}`
}

// GET /api/submissions - Get all submissions with optional filtering
export async function GET(request: NextRequest) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )
  }
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const status = searchParams.get('status')
    const service = searchParams.get('service')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')
    
    let submissions = await getAllSubmissions()
    
    // Apply search filter
    if (search) {
      submissions = await searchSubmissions(search)
    }
    
    // Apply status filter
    if (status) {
      submissions = submissions.filter(sub => sub.status === status)
    }
    
    // Apply service filter
    if (service) {
      submissions = submissions.filter(sub => sub.service === service)
    }
    
    // Sort by timestamp (newest first)
    submissions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    
    // Apply pagination
    const paginatedSubmissions = submissions.slice(offset, offset + limit)
    
    return NextResponse.json({
      submissions: paginatedSubmissions,
      total: submissions.length,
      limit,
      offset,
      hasMore: offset + limit < submissions.length
    })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}

// PATCH /api/submissions - Update submission status
export async function PATCH(request: NextRequest) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )
  }
  
  try {
    const body = await request.json()
    const { id, status, notes } = body
    
    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing required fields: id and status' },
        { status: 400 }
      )
    }
    
    const success = await updateSubmissionStatus(id, status, notes)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ message: 'Submission updated successfully' })
  } catch (error) {
    console.error('Error updating submission:', error)
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    )
  }
}

// DELETE /api/submissions - Delete a submission
export async function DELETE(request: NextRequest) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )
  }
  
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      )
    }
    
    const success = await deleteSubmission(id)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ message: 'Submission deleted successfully' })
  } catch (error) {
    console.error('Error deleting submission:', error)
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    )
  }
}