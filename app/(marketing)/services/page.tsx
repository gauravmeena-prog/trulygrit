import { Metadata } from 'next'
import { Target, TrendingUp, Code, Camera, Users, BarChart3 } from 'lucide-react'

import { FeaturesGrid } from '@/components/sections/features-grid'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { CTASection } from '@/components/sections/cta-section'
import { Breadcrumb } from '@/components/breadcrumb'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { getIcon } from '@/lib/icons'


const services = [
  {
    iconName: 'target',
    title: 'Brand Strategy & Identity',
    description: 'Complete brand development from positioning to visual identity that differentiates you from competitors and resonates with your target audience.',
  },
  {
    iconName: 'trending-up',
    title: 'Performance Marketing',
    description: 'Data-driven digital marketing campaigns across Google, Meta, LinkedIn, and other platforms to drive qualified leads and maximize ROI.',
  },
  {
    iconName: 'code',
    title: 'Web Development & SEO',
    description: 'Custom websites and web applications built for performance, conversion, and exceptional user experience with technical SEO optimization.',
  },
  {
    iconName: 'camera',
    title: 'Content Creation',
    description: 'Professional photography, videography, and graphic design that brings your brand story to life across all digital platforms.',
  },
  {
    iconName: 'users',
    title: 'Lead Nurturing',
    description: 'Automated email and SMS sequences with personalized follow-ups to convert prospects into customers throughout the sales funnel.',
  },
  {
    iconName: 'bar-chart-3',
    title: 'Analytics & Optimization',
    description: 'Comprehensive tracking, analysis, and continuous optimization of all marketing efforts to ensure maximum performance and growth.',
  },
]

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

const processSteps = [
  {
    iconName: 'message-circle',
    title: 'Discovery & Strategy',
    description: 'We begin with a comprehensive consultation to understand your business goals, challenges, target audience, and competitive landscape.',
    duration: '1-2 weeks',
  },
  {
    iconName: 'search',
    title: 'Research & Analysis',
    description: 'We conduct thorough market research, competitor analysis, audience insights, and technical audits to inform our strategic approach.',
    duration: '2-3 weeks',
  },
  {
    iconName: 'target',
    title: 'Strategy Development',
    description: 'Based on our research, we develop a custom marketing strategy with clear objectives, KPIs, and implementation roadmap.',
    duration: '1-2 weeks',
  },
  {
    iconName: 'palette',
    title: 'Creative & Development',
    description: 'Our team brings the strategy to life through compelling creative work, website development, and content creation.',
    duration: '3-6 weeks',
  },
  {
    iconName: 'bar-chart-3',
    title: 'Launch & Optimization',
    description: 'We launch your campaigns and continuously monitor, test, and optimize for maximum performance and measurable results.',
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
            
            <div className="mt-8 mb-6">
              <div className="mx-auto h-1 w-32 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
            </div>
            
            <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
              Comprehensive marketing services designed to help your business grow, from strategic planning to creative execution and performance optimization.
            </p>
          </div>
        </div>
      </section>

      <FeaturesGrid
        title="Our Core Services"
        description="Comprehensive marketing solutions designed to drive growth, build brand awareness, and deliver measurable results for your business."
        features={services}
      />

      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Professional Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Service Details</span>
            </div>
            
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight mb-8">
              <span className="block text-gray-900/90">
                Comprehensive
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Service Breakdown
              </span>
            </h2>
            
            <div className="mt-8 mb-6">
              <div className="mx-auto h-1 w-32 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
            </div>
            
            <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
              Detailed breakdown of our marketing services with clear deliverables, timelines, and expected outcomes for maximum transparency and value.
            </p>
          </div>
          
          {/* Professional Service Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Brand Strategy & Identity */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Brand Strategy & Identity</h3>
                    <p className="text-gray-600">Complete brand development from positioning to visual identity</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Brand positioning and messaging strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Logo and visual identity design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Brand guidelines and style guides</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Brand voice and tone development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Competitive analysis and market research</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Brand architecture and naming strategy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Marketing */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Performance Marketing</h3>
                    <p className="text-gray-600">Data-driven campaigns across all digital platforms</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Google Ads and PPC campaign management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Meta (Facebook/Instagram) advertising</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">LinkedIn advertising for B2B</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">YouTube and video advertising</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Retargeting and lookalike audiences</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Campaign optimization and A/B testing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development & SEO */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Web Development & SEO</h3>
                    <p className="text-gray-600">Custom websites built for performance and conversion</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Custom website design and development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Technical SEO audits and optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Mobile-responsive and fast-loading sites</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Content management systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Website performance optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Conversion rate optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Creation */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Content Creation</h3>
                    <p className="text-gray-600">Professional visual content across all platforms</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Professional photography and videography</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Social media content creation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Graphic design and visual assets</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Video production and editing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Content calendar and strategy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Brand storytelling and messaging</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Nurturing */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Lead Nurturing</h3>
                    <p className="text-gray-600">Automated sequences and personalized follow-ups</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Email marketing automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">SMS marketing campaigns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Lead scoring and segmentation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Personalized follow-up sequences</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">CRM integration and management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Conversion funnel optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics & Optimization */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                        <div>
                    <h3 className="text-2xl font-bold text-gray-900">Analytics & Optimization</h3>
                    <p className="text-gray-600">Comprehensive tracking and continuous optimization</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Google Analytics and tracking setup</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Performance monitoring and reporting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Data analysis and insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Campaign optimization and testing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">ROI tracking and measurement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Strategic recommendations and improvements</span>
                  </div>
                        </div>
                      </div>
                      </div>
          </div>
        </div>
      </section>

      <ProcessTimeline
        title="Our Proven Process"
        description="We follow a systematic methodology that ensures every project delivers exceptional results from initial consultation to ongoing optimization."
        steps={processSteps}
      />

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
