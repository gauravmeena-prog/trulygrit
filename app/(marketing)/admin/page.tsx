import { Metadata } from 'next'
import SheetEmbed from '@/components/SheetEmbed'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Contact Form Submissions',
  description: 'View all contact form submissions in real-time',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Contact Form Submissions
          </h1>
          <p className="text-gray-600">
            Real-time view of all contact form submissions
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <SheetEmbed />
        </div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p>
            This page shows all contact form submissions in real-time. 
            Data is automatically saved to Google Sheets when forms are submitted.
          </p>
        </div>
      </div>
    </div>
  )
}
