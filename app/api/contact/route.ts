import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
})

// Email configuration - in production, use environment variables
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password',
  },
}

const createTransporter = () => {
  return nodemailer.createTransporter(emailConfig)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
          ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Project Details</h3>
          <p><strong>Service Needed:</strong> ${validatedData.service}</p>
          <p><strong>Budget Range:</strong> ${validatedData.budget}</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${validatedData.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This message was sent from the Truly Grit contact form.</p>
          <p>Reply directly to this email to respond to ${validatedData.name}.</p>
        </div>
      </div>
    `
    
    // Send email
    try {
      const transporter = createTransporter()
      
      await transporter.sendMail({
        from: `"Truly Grit Contact Form" <${emailConfig.auth.user}>`,
        to: process.env.CONTACT_EMAIL || 'hello@trulygrit.com',
        replyTo: validatedData.email,
        subject: `New Contact Form Submission from ${validatedData.name}`,
        html: emailHtml,
        text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.company ? `Company: ${validatedData.company}` : ''}
${validatedData.phone ? `Phone: ${validatedData.phone}` : ''}

Service Needed: ${validatedData.service}
Budget Range: ${validatedData.budget}

Message:
${validatedData.message}

---
This message was sent from the Truly Grit contact form.
Reply directly to this email to respond to ${validatedData.name}.
        `,
      })
      
      console.log('Contact form email sent successfully')
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Don't fail the request if email fails - log it but still return success
      // This ensures the form submission doesn't break if email service is down
    }
    
    // Log the submission for backup
    console.log('Contact form submission:', validatedData)
    
    return NextResponse.json(
      { 
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Please check your form data and try again.',
          details: error.errors,
          success: false 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        error: 'Something went wrong. Please try again later.',
        success: false 
      },
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
