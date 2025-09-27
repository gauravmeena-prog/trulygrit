import { google } from 'googleapis'

// Google Sheets configuration
const SPREADSHEET_ID = '1OOGEAl0o_MY6KvFsPFaDutc3F0ZDSp5og-F5syLMlr4'
const RANGE = 'Sheet1!A:G' // Adjust range as needed

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget: string
  message: string
}

export async function saveToGoogleSheets(data: ContactFormData) {
  try {
    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare the data row
    const values = [
      [
        new Date().toISOString(), // Timestamp
        data.name,
        data.email,
        data.company || '',
        data.phone || '',
        data.service,
        data.budget,
        data.message,
      ],
    ]

    // Append the data to the spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    })

    console.log('Data saved to Google Sheets:', response.data)
    return { success: true, data: response.data }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error)
    throw new Error('Failed to save to Google Sheets')
  }
}

