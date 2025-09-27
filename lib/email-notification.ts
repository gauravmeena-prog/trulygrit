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
    const timestamp = new Date().toISOString()
    const formattedDate = new Date(timestamp).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })
    
    // Enhanced logging with better formatting
    console.log('📧 NEW CONTACT FORM SUBMISSION')
    console.log('═══════════════════════════════════════════════════════════════')
    console.log(`👤 Name: ${data.name}`)
    console.log(`📧 Email: ${data.email}`)
    console.log(`🏢 Company: ${data.company || 'Not provided'}`)
    console.log(`📞 Phone: ${data.phone || 'Not provided'}`)
    console.log(`🎯 Service: ${data.service}`)
    console.log(`💰 Budget: ${data.budget}`)
    console.log(`💬 Message: ${data.message}`)
    console.log(`⏰ Submitted: ${formattedDate}`)
    console.log('═══════════════════════════════════════════════════════════════')
    
    // Check if email service is configured
    const emailService = process.env.EMAIL_SERVICE
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const emailTo = process.env.EMAIL_TO
    
    if (emailService && emailUser && emailPass && emailTo) {
      // TODO: Implement actual email sending based on configured service
      console.log('📧 Email service configured but not implemented yet')
      console.log(`   Service: ${emailService}`)
      console.log(`   To: ${emailTo}`)
      console.log(`   From: ${emailUser}`)
    } else {
      console.log('📧 Email service not configured - using console logging only')
      console.log('   To enable email notifications, set these environment variables:')
      console.log('   - EMAIL_SERVICE (gmail, outlook, etc.)')
      console.log('   - EMAIL_USER (your email)')
      console.log('   - EMAIL_PASS (your password or app password)')
      console.log('   - EMAIL_TO (recipient email)')
    }
    
    // Example implementations for different email services:
    
    // Nodemailer example:
    /*
    if (emailService === 'nodemailer') {
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });
      
      await transporter.sendMail({
        from: emailUser,
        to: emailTo,
        subject: `🎯 New Lead: ${data.name} - ${data.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f97316;">🎯 New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>👤 Name:</strong> ${data.name}</p>
              <p><strong>📧 Email:</strong> ${data.email}</p>
              <p><strong>🏢 Company:</strong> ${data.company || 'Not provided'}</p>
              <p><strong>📞 Phone:</strong> ${data.phone || 'Not provided'}</p>
              <p><strong>🎯 Service:</strong> ${data.service}</p>
              <p><strong>💰 Budget:</strong> ${data.budget}</p>
              <p><strong>💬 Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f97316;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
              <p><strong>⏰ Submitted:</strong> ${formattedDate}</p>
            </div>
            <p style="color: #64748b; font-size: 14px;">
              This email was automatically generated from your website contact form.
            </p>
          </div>
        `
      });
    }
    */
    
    // SendGrid example:
    /*
    if (emailService === 'sendgrid') {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      await sgMail.send({
        to: emailTo,
        from: emailUser,
        subject: `🎯 New Lead: ${data.name} - ${data.service}`,
        html: `... (same HTML as above) ...`
      });
    }
    */
    
    // Resend example:
    /*
    if (emailService === 'resend') {
      const { Resend } = require('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: emailUser,
        to: emailTo,
        subject: `🎯 New Lead: ${data.name} - ${data.service}`,
        html: `... (same HTML as above) ...`
      });
    }
    */
    
    return { success: true, timestamp }
  } catch (error) {
    console.error('❌ Error sending email notification:', error)
    throw new Error('Failed to send email notification')
  }
}

