// Simple Google Sheets integration using Google Apps Script webhook
// This is easier to set up than Google Cloud credentials

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget: string
  message: string
}

export async function saveToGoogleSheetsSimple(data: ContactFormData) {
  try {
    // Google Apps Script Web App URL
    // You need to create a Google Apps Script and deploy it as a web app
    const WEBHOOK_URL = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL
    
    if (!WEBHOOK_URL) {
      throw new Error('Google Apps Script webhook URL not configured')
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      company: data.company || '',
      phone: data.phone || '',
      service: data.service,
      budget: data.budget,
      message: data.message,
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    console.log('Data sent to Google Sheets via webhook:', payload)
    return { success: true }
  } catch (error) {
    console.error('Error sending to Google Sheets:', error)
    throw new Error('Failed to save to Google Sheets')
  }
}
