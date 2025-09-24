import { Metadata } from 'next'

import { FeaturesGrid } from '@/components/sections/features-grid'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { CTASection } from '@/components/sections/cta-section'
import { Breadcrumb } from '@/components/breadcrumb'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getIcon } from '@/lib/icons'


const services = [
  {
    iconName: 'target',
    title: 'Brand Strategy',
    description: 'Develop a comprehensive brand strategy that differentiates you from competitors and resonates with your target audience.',
  },
  {
    iconName: 'trending-up',
    title: 'Digital Marketing',
    description: 'Data-driven digital marketing campaigns across all channels to drive qualified leads and increase conversions.',
  },
  {
    iconName: 'code',
    title: 'Web Development',
    description: 'Custom websites and web applications built for performance, conversion, and exceptional user experience.',
  },
  {
    iconName: 'camera',
    title: 'Creative Services',
    description: 'Professional photography, videography, and graphic design that brings your brand story to life.',
  },
  {
    iconName: 'search',
    title: 'SEO & Content',
    description: 'Strategic content creation and SEO optimization to increase organic visibility and establish thought leadership.',
  },
  {
    iconName: 'megaphone',
    title: 'Paid Advertising',
    description: 'Strategic paid advertising campaigns across Google, social media, and other platforms for maximum ROI.',
  },
]

const detailedServices = [
  {
    iconName: 'users',
    title: 'Brand Strategy & Identity',
    description: 'Complete brand development from strategy to visual identity.',
    details: [
      'Brand positioning and messaging',
      'Logo and visual identity design',
      'Brand guidelines and style guides',
      'Brand voice and tone development',
      'Competitive analysis and market research',
    ],
  },
  {
    iconName: 'globe',
    title: 'Website Design & Development',
    description: 'Custom websites that drive conversions and deliver exceptional UX.',
    details: [
      'Custom website design and development',
      'E-commerce platform development',
      'Mobile-responsive design',
      'Content management systems',
      'Website performance optimization',
    ],
  },
  {
    iconName: 'bar-chart-3',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies across all channels.',
    details: [
      'Social media marketing and management',
      'Google Ads and PPC campaigns',
      'Email marketing automation',
      'Content marketing strategy',
      'Analytics and performance tracking',
    ],
  },
  {
    iconName: 'search',
    title: 'SEO & Content Strategy',
    description: 'Strategic content and SEO to increase organic visibility.',
    details: [
      'Technical SEO audits and optimization',
      'Keyword research and strategy',
      'Content creation and optimization',
      'Link building and outreach',
      'Local SEO optimization',
    ],
  },
]

const processSteps = [
  {
    iconName: 'message-circle',
    title: 'Initial Consultation',
    description: 'We begin with a comprehensive consultation to understand your business goals, challenges, and target audience.',
    duration: '1 week',
  },
  {
    iconName: 'search',
    title: 'Research & Analysis',
    description: 'We conduct thorough market research, competitor analysis, and audience insights to inform our strategic approach.',
    duration: '2 weeks',
  },
  {
    iconName: 'target',
    title: 'Strategy Development',
    description: 'Based on our research, we develop a custom marketing strategy tailored to your specific business objectives.',
    duration: '1 week',
  },
  {
    iconName: 'palette',
    title: 'Creative & Execution',
    description: 'Our team brings the strategy to life through compelling creative work and meticulous execution.',
    duration: '2-4 weeks',
  },
  {
    iconName: 'bar-chart-3',
    title: 'Launch & Optimization',
    description: 'We launch your campaigns and continuously monitor, test, and optimize for maximum performance and results.',
    duration: 'Ongoing',
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We offer comprehensive marketing services designed to help your business grow, 
              from strategic planning to creative execution and performance optimization.
            </p>
          </div>
        </div>
      </section>

      <FeaturesGrid
        title="What We Offer"
        description="Full-service marketing solutions tailored to your business needs and growth objectives."
        features={services}
      />

      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Service Details
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Learn more about each service and what's included in our comprehensive packages.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              {detailedServices.map((service, index) => {
                const IconComponent = getIcon(service.iconName)
                return (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
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

      <ProcessTimeline
        title="Our Service Process"
        description="We follow a proven methodology that ensures every project delivers exceptional results from consultation to completion."
        steps={processSteps}
      />

      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss which services are right for your business and create a custom strategy for your success."
        primaryCta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Our Work',
          href: '/work',
        }}
        variant="gradient"
      />
    </>
  )
}
