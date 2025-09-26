import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Contact Form Submissions',
  description: 'View all contact form submissions in real-time',
  robots: {
    index: false,
    follow: false,
  },
}

async function getSubmissions() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3003'}/api/submissions`, {
      cache: 'no-store'
    })
    const data = await response.json()
    return data.submissions || []
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return []
  }
}

export default async function AdminPage() {
  const submissions = await getSubmissions()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Contact Form Submissions
          </h1>
          <p className="text-gray-600">
            View all contact form submissions ({submissions.length} total)
          </p>
        </div>
        
        {submissions.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No submissions yet. Submit a test form to see data here.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {submissions.map((submission: any) => (
              <Card key={submission.id} className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{submission.name}</CardTitle>
                      <CardDescription>{submission.email}</CardDescription>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(submission.timestamp).toLocaleString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Company</p>
                      <p className="text-sm text-gray-600">{submission.company || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone</p>
                      <p className="text-sm text-gray-600">{submission.phone || 'Not provided'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Service</p>
                      <p className="text-sm text-gray-600">{submission.service}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Budget</p>
                      <p className="text-sm text-gray-600">{submission.budget}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700">Message</p>
                    <p className="text-sm text-gray-600 mt-1">{submission.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-6 text-sm text-gray-500">
          <p>
            This page shows all contact form submissions stored locally. 
            Data is automatically saved when forms are submitted.
          </p>
        </div>
      </div>
    </div>
  )
}
