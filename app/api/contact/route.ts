import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmailNotification } from '@/lib/email-notification'
import { saveContactSubmission } from '@/lib/data-storage'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Helper function to get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  return 'unknown'
}

// Helper function to get user agent
function getUserAgent(request: NextRequest): string {
  return request.headers.get('user-agent') || 'unknown'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Extract metadata from request
    const metadata = {
      ipAddress: getClientIP(request),
      userAgent: getUserAgent(request),
      source: request.headers.get('referer') || 'direct'
    }
    
    // Save to local storage with metadata
    const savedSubmission = await saveContactSubmission(validatedData, metadata)
    
    // Send email notification
    await sendEmailNotification(validatedData)
    
    console.log('✅ Contact form submission processed successfully:', {
      id: savedSubmission.id,
      name: savedSubmission.name,
      email: savedSubmission.email,
      service: savedSubmission.service,
      budget: savedSubmission.budget,
      timestamp: savedSubmission.timestamp,
      ipAddress: savedSubmission.ipAddress,
      source: savedSubmission.source
    })
    
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        submissionId: savedSubmission.id,
        timestamp: savedSubmission.timestamp
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Contact form submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Invalid form data', 
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
