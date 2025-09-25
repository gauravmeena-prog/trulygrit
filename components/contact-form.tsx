'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [submitError, setSubmitError] = React.useState<string | null>(null)

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
    setSubmitError(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error(result.error || 'Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4"
            >
              <CheckCircle className="h-16 w-16 text-green-600" />
            </motion.div>
            <CardTitle className="text-green-600">Thank You!</CardTitle>
            <CardDescription>
              We've received your message and will get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Send Another Message
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Get In Touch</CardTitle>
          <CardDescription>
            Ready to start your project? Fill out the form below and we'll get back to you soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatePresence>
            {submitError && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2"
              >
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm text-red-700">{submitError}</span>
              </motion.div>
            )}
          </AnimatePresence>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Your full name"
                className="h-12 text-base"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-destructive" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="your@email.com"
                className="h-12 text-base"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                {...register('company')}
                placeholder="Your company"
                className="h-12 text-base"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="(555) 123-4567"
                className="h-12 text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Needed *</Label>
            <select
              id="service"
              {...register('service')}
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-sm text-destructive">{errors.service.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range *</Label>
            <select
              id="budget"
              {...register('budget')}
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select budget range</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p className="text-sm text-destructive">{errors.budget.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Tell us about your project, goals, and timeline..."
                rows={4}
                className="text-base min-h-[120px]"
              />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
