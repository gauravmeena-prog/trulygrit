import { Metadata } from 'next'
import { Mail, Phone } from 'lucide-react'

import { siteConfig } from '@/lib/site-config'
// Google Form embed - no import needed
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'


const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email',
    content: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Give us a call',
    content: siteConfig.contact.phone,
    link: `tel:${siteConfig.contact.phone}`,
  },
]

export const metadata = {
  title: 'Contact Us | Get Started with Truly Grit',
  description: 'Ready to transform your marketing? Contact Truly Grit today. Let\'s discuss your project and create a strategic plan to achieve your business goals.',
  openGraph: {
    title: 'Contact Us | Get Started with Truly Grit',
    description: 'Ready to transform your marketing? Contact Truly Grit today. Let\'s discuss your project and create a strategic plan to achieve your business goals.',
    url: 'https://truly-grit.vercel.app/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact Us | Get Started with Truly Grit',
    description: 'Ready to transform your marketing? Contact Truly Grit today. Let\'s discuss your project and create a strategic plan to achieve your business goals.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="block text-gray-900">
                Let's Build
              </span>
              <span className="block text-orange-600 font-extrabold mt-2">
                Something Great
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto mb-12">
              Ready to transform your marketing? Let's discuss your project and create a strategy that drives real results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Start Your Project
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your goals and we'll create a custom strategy to help you achieve them.
            </p>
          </div>

          {/* Side-by-Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - Left Side */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get Started
              </h3>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSemFMa-7r-F4MUG_aacWH-DVAyWUuwHIRTl_oWOXtzRWWlxjw/viewform?embedded=true"
                  width="100%"
                  height={600}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="Contact Form"
                  style={{
                    border: 'none',
                    borderRadius: '0',
                    background: 'transparent'
                  }}
                >
                  Loading…
                </iframe>
              </div>
            </div>

            {/* Contact Information & Process - Right Side */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                        <item.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <span className="text-gray-900 font-medium">
                            {item.content}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                      <p className="text-gray-700 text-sm">We'll review your submission and get back to you within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Strategy Call</h4>
                      <p className="text-gray-700 text-sm">Schedule a consultation call to discuss your project in detail.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Custom Proposal</h4>
                      <p className="text-gray-700 text-sm">Receive a detailed proposal with strategy and transparent pricing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
