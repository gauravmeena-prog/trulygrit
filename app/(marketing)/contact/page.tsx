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
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Start Your Project
                </h2>
                <p className="text-lg text-gray-700">
                  Tell us about your goals and we'll create a custom strategy to help you achieve them.
                </p>
              </div>
              {/* Professional Custom-Style Form */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Premium Header */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 shadow-2xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-slate-200 text-xl max-w-3xl mx-auto leading-relaxed">
                      Join hundreds of successful businesses who've accelerated their growth with our proven strategies
                    </p>
                  </div>
                </div>
                
                {/* Seamless Form Integration */}
                <div className="relative bg-white">
                  {/* Custom Form Styling Overlay */}
                  <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="h-full w-full bg-gradient-to-b from-transparent via-transparent to-white/50"></div>
                  </div>
                  
                  {/* Form Container with Hidden Google Styling */}
                  <div className="relative">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSemFMa-7r-F4MUG_aacWH-DVAyWUuwHIRTl_oWOXtzRWWlxjw/viewform?embedded=true"
                      width="100%"
                      height="1400"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      className="w-full"
                      title="Contact Form"
                      style={{
                        border: 'none',
                        borderRadius: '0',
                        background: 'transparent',
                        filter: 'contrast(1.1) saturate(1.1)',
                        transform: 'scale(1.02)',
                        transformOrigin: 'top center'
                      }}
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
                
                {/* Professional Footer */}
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-8 py-8 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Enterprise Security</h4>
                      <p className="text-sm text-gray-600">Bank-level encryption & GDPR compliant</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">24-Hour Response</h4>
                      <p className="text-sm text-gray-600">Guaranteed response within one business day</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Free Strategy Session</h4>
                      <p className="text-sm text-gray-600">Complimentary consultation worth $500</p>
                    </div>
                  </div>
                  
                  {/* Trust Badge */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Trusted by 500+ businesses</span>
                      </div>
                      <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>No spam, ever</span>
                      </div>
                      <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Cancel anytime</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information & Process */}
            <div className="space-y-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get In Touch
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                          <item.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
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
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What Happens Next?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                      <p className="text-gray-700">We'll review your submission and get back to you within 24 hours with initial thoughts and next steps.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategy Call</h4>
                      <p className="text-gray-700">Schedule a consultation call to discuss your project in detail and understand your specific needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Custom Proposal</h4>
                      <p className="text-gray-700">Receive a detailed proposal with strategy, timeline, and transparent pricing tailored to your goals.</p>
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
