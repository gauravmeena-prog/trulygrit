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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Save to local storage
    const savedSubmission = await saveContactSubmission(validatedData)
    
    // Send email notification
    await sendEmailNotification(validatedData)
    
    console.log('✅ Contact form submission processed successfully:', {
      id: savedSubmission.id,
      name: savedSubmission.name,
      email: savedSubmission.email,
      service: savedSubmission.service,
      budget: savedSubmission.budget,
      timestamp: savedSubmission.timestamp
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
