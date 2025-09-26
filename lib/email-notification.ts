// Simple email notification system for contact form submissions
// This sends form data directly to your email

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget: string
  message: string
}

export async function sendEmailNotification(data: ContactFormData) {
  try {
    // For now, we'll just log the data
    // In production, you can integrate with email services like:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - EmailJS
    
    console.log('📧 NEW CONTACT FORM SUBMISSION:')
    console.log('================================')
    console.log(`Name: ${data.name}`)
    console.log(`Email: ${data.email}`)
    console.log(`Company: ${data.company || 'Not provided'}`)
    console.log(`Phone: ${data.phone || 'Not provided'}`)
    console.log(`Service: ${data.service}`)
    console.log(`Budget: ${data.budget}`)
    console.log(`Message: ${data.message}`)
    console.log(`Timestamp: ${new Date().toISOString()}`)
    console.log('================================')
    
    // TODO: Implement actual email sending
    // Example with Nodemailer:
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'your-email@example.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `
    });
    */
    
    return { success: true }
  } catch (error) {
    console.error('Error sending email notification:', error)
    throw new Error('Failed to send email notification')
  }
}
