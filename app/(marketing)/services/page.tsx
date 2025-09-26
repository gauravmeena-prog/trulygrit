import { Metadata } from 'next'
import { Target, TrendingUp, Code, Camera, Users, BarChart3 } from 'lucide-react'

import { Breadcrumb } from '@/components/breadcrumb'
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


export const metadata = {
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
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
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


      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight mb-6">
              <span className="block text-gray-900/90">
                Service
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Details
              </span>
            </h2>
            
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              Learn more about each service and what's included in our comprehensive marketing packages.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <Accordion type="single" collapsible className="w-full [&_[data-radix-accordion-trigger]]:no-underline [&_[data-radix-accordion-trigger]]:hover:no-underline">
              {detailedServices.map((service, index) => {
                const IconComponent = getIcon(service.iconName)
                return (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline [&[data-state=open]]:no-underline">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-semibold">{service.title}</div>
                          <div className="text-sm text-muted-foreground">{service.description}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-4 pl-8">
                        <ul className="space-y-2">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>

    </>
  )
}
