// Enhanced file-based data storage for contact form submissions
// This stores data in a JSON file with backup and analytics features

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
  ipAddress?: string
  userAgent?: string
  source?: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed'
  notes?: string
}

export interface SubmissionStats {
  total: number
  thisMonth: number
  thisWeek: number
  today: number
  byService: Record<string, number>
  byBudget: Record<string, number>
  byStatus: Record<string, number>
}

const DATA_FILE = path.join(process.cwd(), 'data', 'contact-submissions.json')
const BACKUP_DIR = path.join(process.cwd(), 'data', 'backups')

// Generate unique ID with timestamp and random string
function generateId(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substr(2, 9)
  return `sub_${timestamp}_${random}`
}

// Create backup of data file
async function createBackup(): Promise<void> {
  try {
    await fs.mkdir(BACKUP_DIR, { recursive: true })
    const backupFile = path.join(BACKUP_DIR, `submissions_${Date.now()}.json`)
    await fs.copyFile(DATA_FILE, backupFile)
    console.log('📦 Backup created:', backupFile)
  } catch (error) {
    console.error('Error creating backup:', error)
  }
}

export async function saveContactSubmission(
  data: ContactFormData, 
  metadata?: { ipAddress?: string; userAgent?: string; source?: string }
): Promise<StoredSubmission> {
  try {
    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE)
    await fs.mkdir(dataDir, { recursive: true })
    
    // Create submission record with enhanced metadata
    const submission: StoredSubmission = {
      id: generateId(),
      timestamp: new Date().toISOString(),
      status: 'new',
      ...data,
      ...metadata
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
    
    // Create backup before writing (every 10 submissions)
    if (submissions.length % 10 === 0) {
      await createBackup()
    }
    
    // Write back to file with pretty formatting
    await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2))
    
    console.log('📝 Contact submission saved:', {
      id: submission.id,
      name: submission.name,
      email: submission.email,
      service: submission.service,
      budget: submission.budget,
      timestamp: submission.timestamp
    })
    
    return submission
  } catch (error) {
    console.error('Error saving contact submission:', error)
    throw new Error('Failed to save contact submission')
  }
}

export async function getAllSubmissions(): Promise<StoredSubmission[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading submissions:', error)
    return []
  }
}

export async function getSubmissionById(id: string): Promise<StoredSubmission | null> {
  try {
    const submissions = await getAllSubmissions()
    return submissions.find(sub => sub.id === id) || null
  } catch (error) {
    console.error('Error getting submission by ID:', error)
    return null
  }
}

export async function updateSubmissionStatus(
  id: string, 
  status: StoredSubmission['status'], 
  notes?: string
): Promise<boolean> {
  try {
    const submissions = await getAllSubmissions()
    const submissionIndex = submissions.findIndex(sub => sub.id === id)
    
    if (submissionIndex === -1) {
      return false
    }
    
    submissions[submissionIndex].status = status
    if (notes) {
      submissions[submissionIndex].notes = notes
    }
    
    await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2))
    console.log(`📝 Updated submission ${id} status to ${status}`)
    return true
  } catch (error) {
    console.error('Error updating submission status:', error)
    return false
  }
}

export async function getSubmissionStats(): Promise<SubmissionStats> {
  try {
    const submissions = await getAllSubmissions()
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const thisWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    
    const stats: SubmissionStats = {
      total: submissions.length,
      thisMonth: submissions.filter(sub => new Date(sub.timestamp) >= thisMonth).length,
      thisWeek: submissions.filter(sub => new Date(sub.timestamp) >= thisWeek).length,
      today: submissions.filter(sub => new Date(sub.timestamp) >= today).length,
      byService: {},
      byBudget: {},
      byStatus: {}
    }
    
    // Calculate breakdowns
    submissions.forEach(submission => {
      // By service
      stats.byService[submission.service] = (stats.byService[submission.service] || 0) + 1
      
      // By budget
      stats.byBudget[submission.budget] = (stats.byBudget[submission.budget] || 0) + 1
      
      // By status
      stats.byStatus[submission.status] = (stats.byStatus[submission.status] || 0) + 1
    })
    
    return stats
  } catch (error) {
    console.error('Error calculating submission stats:', error)
    return {
      total: 0,
      thisMonth: 0,
      thisWeek: 0,
      today: 0,
      byService: {},
      byBudget: {},
      byStatus: {}
    }
  }
}

export async function searchSubmissions(query: string): Promise<StoredSubmission[]> {
  try {
    const submissions = await getAllSubmissions()
    const searchTerm = query.toLowerCase()
    
    return submissions.filter(submission => 
      submission.name.toLowerCase().includes(searchTerm) ||
      submission.email.toLowerCase().includes(searchTerm) ||
      submission.company?.toLowerCase().includes(searchTerm) ||
      submission.service.toLowerCase().includes(searchTerm) ||
      submission.message.toLowerCase().includes(searchTerm)
    )
  } catch (error) {
    console.error('Error searching submissions:', error)
    return []
  }
}

export async function deleteSubmission(id: string): Promise<boolean> {
  try {
    const submissions = await getAllSubmissions()
    const filteredSubmissions = submissions.filter(sub => sub.id !== id)
    
    if (filteredSubmissions.length === submissions.length) {
      return false // Submission not found
    }
    
    await fs.writeFile(DATA_FILE, JSON.stringify(filteredSubmissions, null, 2))
    console.log(`🗑️ Deleted submission ${id}`)
    return true
  } catch (error) {
    console.error('Error deleting submission:', error)
    return false
  }
}

