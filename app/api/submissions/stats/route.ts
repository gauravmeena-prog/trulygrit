import { NextResponse } from 'next/server'
import { getSubmissionStats } from '@/lib/data-storage'

// GET /api/submissions/stats - Get submission statistics
export async function GET() {
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
