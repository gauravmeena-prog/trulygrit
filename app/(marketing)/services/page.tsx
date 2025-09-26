import { Metadata } from 'next'
import { Target, TrendingUp, Code, Camera, Users, BarChart3 } from 'lucide-react'

import { Breadcrumb } from '@/components/breadcrumb'
import { CTASection } from '@/components/sections/cta-section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getIcon } from '@/lib/icons'

const detailedServices = [
  {
    iconName: 'target',
    title: 'Brand Strategy & Identity',
    description: 'Complete brand development from positioning to visual identity that creates lasting impact.',
    details: [
      'Brand positioning and messaging strategy',
      'Logo and visual identity design',
      'Brand guidelines and style guides',
      'Brand voice and tone development',
      'Competitive analysis and market research',
      'Brand architecture and naming strategy',
    ],
  },
  {
    iconName: 'trending-up',
    title: 'Performance Marketing',
    description: 'Data-driven campaigns across all digital platforms for maximum ROI and lead generation.',
    details: [
      'Google Ads and PPC campaign management',
      'Meta (Facebook/Instagram) advertising',
      'LinkedIn advertising for B2B',
      'YouTube and video advertising',
      'Retargeting and lookalike audiences',
      'Campaign optimization and A/B testing',
    ],
  },
  {
    iconName: 'code',
    title: 'Web Development & SEO',
    description: 'Custom websites built for performance, conversion, and exceptional user experience.',
    details: [
      'Custom website design and development',
      'Technical SEO audits and optimization',
      'Mobile-responsive and fast-loading sites',
      'Content management systems',
      'Website performance optimization',
      'Conversion rate optimization',
    ],
  },
  {
    iconName: 'camera',
    title: 'Content Creation',
    description: 'Professional visual content that brings your brand story to life across all platforms.',
    details: [
      'Professional photography and videography',
      'Social media content creation',
      'Graphic design and visual assets',
      'Video production and editing',
      'Content calendar and strategy',
      'Brand storytelling and messaging',
    ],
  },
  {
    iconName: 'users',
    title: 'Lead Nurturing',
    description: 'Automated sequences and personalized follow-ups to convert prospects into customers.',
    details: [
      'Email marketing automation',
      'SMS marketing campaigns',
      'Lead scoring and segmentation',
      'Personalized follow-up sequences',
      'CRM integration and management',
      'Conversion funnel optimization',
    ],
  },
  {
    iconName: 'bar-chart-3',
    title: 'Analytics & Optimization',
    description: 'Comprehensive tracking and continuous optimization for maximum performance.',
    details: [
      'Google Analytics and tracking setup',
      'Performance monitoring and reporting',
      'Data analysis and insights',
      'Campaign optimization and testing',
      'ROI tracking and measurement',
      'Strategic recommendations and improvements',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Services | Truly Grit Marketing Solutions',
  description: 'Discover our comprehensive marketing services: brand strategy, digital marketing, web design, SEO, content marketing, and social media management for business growth.',
  openGraph: {
    title: 'Services | Truly Grit Marketing Solutions',
    description: 'Discover our comprehensive marketing services: brand strategy, digital marketing, web design, SEO, content marketing, and social media management for business growth.',
    url: 'https://truly-grit.vercel.app/services',
    type: 'website',
  },
  twitter: {
    title: 'Services | Truly Grit Marketing Solutions',
    description: 'Discover our comprehensive marketing services: brand strategy, digital marketing, web design, SEO, content marketing, and social media management for business growth.',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Professional Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Services' }]} />
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Services</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight mb-8">
              <span className="block text-gray-900/90">
                Marketing
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
              Comprehensive marketing services designed to help your business grow, from strategic planning to creative execution and performance optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Service Details Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Service Details</span>
            </div>
            
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-tight mb-8">
              <span className="block text-gray-900/90">
                Comprehensive
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Service Portfolio
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              Detailed breakdown of our marketing services with clear deliverables, timelines, and expected outcomes for maximum transparency and value.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <Accordion type="single" collapsible className="w-full space-y-4 [&_[data-radix-accordion-trigger]]:no-underline [&_[data-radix-accordion-trigger]]:hover:no-underline">
              {detailedServices.map((service, index) => {
                const IconComponent = getIcon(service.iconName)
                return (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left hover:no-underline [&[data-state=open]]:no-underline p-6 hover:bg-gray-50/50 transition-colors duration-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-xl font-bold text-gray-900 mb-1">{service.title}</div>
                          <div className="text-sm text-gray-600 font-medium">{service.description}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="pt-4 pl-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <CTASection
        title="Ready to Transform Your Marketing?"
        description="Let's discuss which services are right for your business and create a custom strategy that delivers measurable results and drives growth."
        primaryCta={{
          text: 'Schedule Free Consultation',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Our Case Studies',
          href: '/work',
        }}
        variant="gradient"
      />
    </>
  )
}