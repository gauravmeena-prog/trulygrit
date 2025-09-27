import { NextRequest, NextResponse } from 'next/server'
import { getSubmissionStats } from '@/lib/data-storage'

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

// GET /api/submissions/stats - Get submission statistics
export async function GET(request: NextRequest) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )
  }
  
  try {
    const stats = await getSubmissionStats()
    
    return NextResponse.json({
      stats,
      generatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching submission stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    )
  }
}
