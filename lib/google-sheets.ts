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
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    )

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

