'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Brand Strategy',
  'Digital Marketing',
  'Web Development',
  'SEO & Content',
  'Paid Advertising',
  'Creative Services',
  'Full-Service Package',
]

const budgets = [
  'Under $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k',
  '$100k+',
  'Let\'s discuss',
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error (show toast, etc.)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-white shadow-xl border-0 rounded-2xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-green-600">Thank You!</CardTitle>
          <CardDescription className="text-lg text-gray-700">
            We've received your message and will get back to you within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pt-0">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-orange-300 text-orange-600 hover:bg-orange-50"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Professional Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Start Your Project</h2>
            <p className="text-orange-100 text-lg">
              Get a free consultation and detailed proposal within 24 hours
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-8 py-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
                <p className="text-gray-600">Tell us about yourself and your business</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    Full Name <span className="text-orange-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="John Smith"
                    className="h-14 text-base border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 rounded-xl transition-all duration-200"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-600 font-medium" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    Email Address <span className="text-orange-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="john@company.com"
                    className="h-14 text-base border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 rounded-xl transition-all duration-200"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder="Your Company Inc."
                    className="h-14 text-base border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 rounded-xl transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="+1 (555) 123-4567"
                    className="h-14 text-base border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 rounded-xl transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Project Information Section */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Details</h3>
                <p className="text-gray-600">Help us understand your project requirements</p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="service" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    Service Needed <span className="text-orange-500">*</span>
                  </Label>
                  <select
                    id="service"
                    {...register('service')}
                    className="flex h-14 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all duration-200"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-sm text-red-600 font-medium">{errors.service.message}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="budget" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    Budget Range <span className="text-orange-500">*</span>
                  </Label>
                  <select
                    id="budget"
                    {...register('budget')}
                    className="flex h-14 w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-100 focus:outline-none transition-all duration-200"
                  >
                    <option value="">Select your budget</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-sm text-red-600 font-medium">{errors.budget.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  Project Description <span className="text-orange-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tell us about your project goals, target audience, timeline, and any specific requirements..."
                  rows={5}
                  className="text-base min-h-[140px] border-2 border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 rounded-xl transition-all duration-200 resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-600 font-medium">{errors.message.message}</p>
                )}
              </div>
            </div>

            {/* Professional Submit Button */}
            <div className="pt-6">
              <Button 
                type="submit" 
                className="w-full h-16 text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending Your Request...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Send className="h-5 w-5" />
                    <span>Get Free Consultation</span>
                  </div>
                )}
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                We'll respond within 24 hours with a detailed proposal
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
