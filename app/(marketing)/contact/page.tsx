import { Metadata } from 'next'
import { Mail, Phone } from 'lucide-react'

import { siteConfig } from '@/lib/site-config'
import { ContactForm } from '@/components/contact-form'
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to transform your marketing? Let's discuss your project and 
              create a strategy that drives real results for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Get In Touch
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Have questions about our services or want to discuss your project? 
                  We're here to help and would love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="transition-all duration-300 hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                          <item.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{item.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-foreground">
                          {item.content}
                        </span>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="rounded-lg bg-muted p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What Happens Next?
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      1
                    </div>
                    <p>We'll review your submission and get back to you within 24 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      2
                    </div>
                    <p>Schedule a consultation call to discuss your project in detail</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      3
                    </div>
                    <p>Receive a custom proposal with strategy and pricing</p>
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
