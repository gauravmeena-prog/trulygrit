'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  MessageSquare, 
  Calendar,
  User,
  Mail,
  Building,
  Phone,
  DollarSign,
  Target,
  Lock,
  AlertTriangle
} from 'lucide-react'

interface Submission {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  service: string
  budget: string
  message: string
  timestamp: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed'
  ipAddress?: string
  userAgent?: string
  source?: string
  notes?: string
}

interface SubmissionStats {
  total: number
  thisMonth: number
  thisWeek: number
  today: number
  byService: Record<string, number>
  byBudget: Record<string, number>
  byStatus: Record<string, number>
}

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  qualified: 'bg-green-100 text-green-800',
  converted: 'bg-purple-100 text-purple-800',
  closed: 'bg-gray-100 text-gray-800'
}

const statusLabels = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  converted: 'Converted',
  closed: 'Closed'
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [stats, setStats] = useState<SubmissionStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authKey, setAuthKey] = useState('')
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    // Check if already authenticated
    const storedAuth = localStorage.getItem('admin_authenticated')
    if (storedAuth === 'true') {
      setIsAuthenticated(true)
      fetchSubmissions()
      fetchStats()
    } else {
      setLoading(false)
    }
  }, [])

  const handleAuthentication = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError('')
    
    try {
      const response = await fetch('/api/submissions', {
        headers: {
          'Authorization': `Bearer ${authKey}`
        }
      })
      
      if (response.ok) {
        setIsAuthenticated(true)
        localStorage.setItem('admin_authenticated', 'true')
        fetchSubmissions()
        fetchStats()
      } else {
        setAuthError('Invalid authentication key')
      }
    } catch (error) {
      setAuthError('Authentication failed')
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin_authenticated')
    setSubmissions([])
    setStats(null)
    setAuthKey('')
  }

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/submissions', {
        headers: {
          'Authorization': `Bearer ${authKey}`
        }
      })
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/submissions/stats', {
        headers: {
          'Authorization': `Bearer ${authKey}`
        }
      })
      const data = await response.json()
      setStats(data.stats)
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const response = await fetch('/api/submissions', {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authKey}`
        },
        body: JSON.stringify({ id, status })
      })
      
      if (response.ok) {
        fetchSubmissions()
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = !searchTerm || 
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.service.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = !statusFilter || submission.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Authentication screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-6">
            <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Access</h1>
            <p className="text-gray-600 mt-2">Enter your admin key to access submissions</p>
          </div>
          
          <form onSubmit={handleAuthentication} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter admin key"
                value={authKey}
                onChange={(e) => setAuthKey(e.target.value)}
                className="w-full"
                required
              />
            </div>
            
            {authError && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertTriangle className="h-4 w-4" />
                <span>{authError}</span>
              </div>
            )}
            
            <Button type="submit" className="w-full">
              Access Dashboard
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div className="text-sm text-yellow-800">
                <p className="font-semibold">Security Notice:</p>
                <p>This admin dashboard is protected. Only authorized personnel should access this area.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Form Submissions</h1>
            <p className="text-gray-600 mt-2">Manage and track all contact form submissions</p>
          </div>
          <Button 
            onClick={logout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Lock className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.thisMonth}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Week</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.thisWeek}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Today</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.today}</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search submissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="sm:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="converted">Converted</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-gray-500">No submissions found</p>
            </Card>
          ) : (
            filteredSubmissions.map((submission) => (
              <Card key={submission.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{submission.name}</h3>
                      <Badge className={statusColors[submission.status]}>
                        {statusLabels[submission.status]}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{submission.email}</span>
                      </div>
                      
                      {submission.company && (
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span>{submission.company}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        <span>{submission.service}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        <span>{submission.budget}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mt-2 line-clamp-2">{submission.message}</p>
                    
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      <span>{formatDate(submission.timestamp)}</span>
                      {submission.source && <span>Source: {submission.source}</span>}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    
                    <select
                      value={submission.status}
                      onChange={(e) => updateStatus(submission.id, e.target.value)}
                      className="text-xs px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
