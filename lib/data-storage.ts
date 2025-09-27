// Simple file-based data storage for contact form submissions
// This stores data in a JSON file that you can easily access

import { promises as fs } from 'fs'
import path from 'path'

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget: string
  message: string
}

export interface StoredSubmission extends ContactFormData {
  id: string
  timestamp: string
}

const DATA_FILE = path.join(process.cwd(), 'data', 'contact-submissions.json')

export async function saveContactSubmission(data: ContactFormData): Promise<StoredSubmission> {
  try {
    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE)
    await fs.mkdir(dataDir, { recursive: true })
    
    // Create submission record
    const submission: StoredSubmission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      ...data
    }
    
    // Read existing data
    let submissions: StoredSubmission[] = []
    try {
      const existingData = await fs.readFile(DATA_FILE, 'utf8')
      submissions = JSON.parse(existingData)
    } catch (error) {
      // File doesn't exist yet, start with empty array
      submissions = []
    }
    
    // Add new submission
    submissions.push(submission)
    
    // Write back to file
    await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2))
    
    console.log('📝 Contact submission saved to file:', submission.id)
    return submission
  } catch (error) {
    console.error('Error saving contact submission:', error)
    throw new Error('Failed to save contact submission')
  }
}

