import { NextResponse } from 'next/server'
import { getAllSubmissions } from '@/lib/data-storage'

export async function GET() {
  try {
    const submissions = await getAllSubmissions()
    
    return NextResponse.json({
      success: true,
      count: submissions.length,
      submissions: submissions.reverse() // Most recent first
    })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}
