import { Metadata } from 'next'
import { Check, Star, Zap, Target, Rocket } from 'lucide-react'

import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Pricing & Packages | Truly Grit',
  description: 'Explore our transparent pricing plans and find the perfect marketing package to accelerate your business growth. Custom solutions available.',
  openGraph: {
    title: 'Pricing & Packages | Truly Grit',
    description: 'Explore our transparent pricing plans and find the perfect marketing package to accelerate your business growth. Custom solutions available.',
    type: 'website',
  },
}

const pricingPlans = [
  {
    name: 'Foundation Package',
    icon: Target,
    price: '$8,000',
    period: 'one-time',
    description: 'Perfect for startups and small businesses ready to build a strong marketing foundation.',
    features: [
      'Complete Brand Strategy & Identity',
      'Website Design & Development (5 pages)',
      'SEO Foundation & Optimization',
      'Social Media Setup & Optimization',
      '2-Months Marketing Support',
      'Performance Analytics Setup',
    ],
    cta: 'Get Started',
    href: '/contact?plan=foundation',
    popular: false,
  },
  {
    name: 'Growth Accelerator',
    icon: Rocket,
    price: '$18,000',
    period: 'one-time',
    description: 'Designed for growing businesses ready to scale their marketing and drive significant growth.',
    features: [
      'Comprehensive Brand Strategy',
      'Custom Website Development (up to 15 pages)',
      'Advanced SEO & Content Marketing',
      'Multi-channel Paid Advertising',
      'Lead Nurturing & Email Marketing',
      '6-Months Marketing Support',
      'Monthly Performance Reports',
      'Dedicated Project Manager',
    ],
    cta: 'Choose Plan',
    href: '/contact?plan=growth',
    popular: true,
  },
  {
    name: 'Enterprise Solution',
    icon: Star,
    price: '$35,000+',
    period: 'custom',
    description: 'Complete marketing partnership for established enterprises seeking maximum growth and ROI.',
    features: [
      'In-depth Market Research & Strategy',
      'Enterprise Website & Web Applications',
      'Full-scale SEO & Content Marketing',
      'Multi-channel Paid Advertising',
      'Advanced Lead Nurturing & CRM',
      'Dedicated Account Manager',
      'Ongoing Optimization & Support',
      'Custom Analytics & Reporting',
      'Priority Support & Consultation',
    ],
    cta: 'Contact for Quote',
    href: '/contact?plan=enterprise',
    popular: false,
  },
]

const addOns = [
  {
    name: 'Content Creation & Marketing',
    icon: Zap,
    price: '$2,500',
    period: 'month',
    description: 'Professional content creation including blog posts, articles, videos, and multimedia content to engage your audience and drive conversions.',
  },
  {
    name: 'Social Media Management',
    icon: Check,
    price: '$1,800',
    period: 'month',
    description: 'Complete social media management including content creation, scheduling, community management, and engagement across all platforms.',
  },
  {
    name: 'Advanced Analytics & Reporting',
    icon: Star,
    price: '$1,200',
    period: 'month',
    description: 'Comprehensive data analysis, custom dashboards, performance tracking, and actionable insights for continuous optimization.',
  },
]

const faqItems = [
  {
    question: 'What is included in the "Foundation Package"?',
    answer: 'The Foundation Package is perfect for startups and small businesses ready to build a strong marketing foundation. It includes complete brand strategy & identity, website design & development (5 pages), SEO foundation & optimization, social media setup, 2-months marketing support, and performance analytics setup.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. Foundation packages typically take 6-8 weeks, Growth Accelerator projects take 8-12 weeks, and Enterprise solutions are ongoing partnerships. We provide detailed timelines after our initial discovery phase.',
  },
  {
    question: 'Do you offer custom marketing solutions?',
    answer: 'Absolutely! Our Enterprise Solution is fully customizable, and we also offer custom add-on services. We work closely with you to understand your unique challenges and goals, then craft a bespoke strategy and service package that perfectly fits your needs and budget.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including bank transfers, major credit cards, and online payment platforms. Payment schedules are typically structured with an upfront deposit (30-50%) and subsequent milestone payments based on project deliverables.',
  },
  {
    question: 'How do you measure success and ROI?',
    answer: 'We define success based on your specific business objectives and track comprehensive KPIs including website traffic, lead generation, conversion rates, revenue growth, brand engagement, and overall ROI. We provide transparent monthly reports and quarterly business reviews throughout our partnership.',
  },
  {
    question: 'Can I upgrade or downgrade my package?',
    answer: 'Yes, we offer flexible package adjustments based on your evolving needs. You can upgrade to higher packages or add additional services at any time. We also provide pro-rated adjustments for mid-cycle changes to ensure you get the most value from your investment.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Professional Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Pricing' }]} />
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Pricing Plans</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight mb-8">
              <span className="block text-gray-900/90">
                Transparent
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Pricing
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
              Find the perfect marketing package to accelerate your business growth. We offer flexible solutions tailored to your needs and budget with complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Pricing Cards */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <div key={plan.name} className="relative group">
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Card with enhanced styling */}
                  <div className={`relative bg-white rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    plan.popular 
                      ? 'border-primary shadow-xl scale-105' 
                      : 'border-gray-200 shadow-lg hover:border-primary/50'
                  }`}>
                    {/* Gradient overlay for popular plan */}
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-3xl"></div>
                    )}
                    
                    <div className="relative p-8">
                      {/* Icon and Header */}
                      <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                          plan.popular 
                            ? 'bg-gradient-to-br from-primary to-orange-500' 
                            : 'bg-primary/10'
                        }`}>
                          <Icon className={`h-8 w-8 ${
                            plan.popular ? 'text-white' : 'text-primary'
                          }`} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {plan.description}
                        </p>
                        
                        {/* Price */}
                        <div className="mb-8">
                          <div className="flex items-baseline justify-center gap-x-2">
                            <span className="text-5xl font-bold text-gray-900">
                              {plan.price}
                            </span>
                            {plan.period !== 'custom' && (
                              <span className="text-lg font-medium text-gray-500">
                                /{plan.period}
                              </span>
                            )}
                          </div>
                          {plan.period === 'custom' && (
                            <p className="text-sm text-gray-500 mt-2">Custom pricing based on scope</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-8">
                        <ul className="space-y-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* CTA Button */}
                      <Button
                        className={`w-full h-12 text-lg font-semibold rounded-xl transition-all duration-200 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white shadow-lg hover:shadow-xl'
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                        asChild
                      >
                        <a href={plan.href}>{plan.cta}</a>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Add-ons Section */}
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Add-on Services</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight mb-6">
              <span className="block text-gray-900/90">
                Optional
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Add-on Services
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              Need something extra? We offer additional services to complement your marketing package and accelerate your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {addOns.map((addon, index) => {
              const Icon = addon.icon
              return (
                <div key={addon.name} className="group">
                  <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{addon.name}</h3>
                          <div className="text-2xl font-bold text-gray-900">
                            {addon.price}
                            <span className="text-sm font-normal text-gray-500 ml-1">/{addon.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {addon.description}
                      </p>
                      
                      <div className="mt-6">
                        <Button
                          className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl h-11 font-semibold transition-all duration-200"
                          asChild
                        >
                          <a href="/contact">Add to Package</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional FAQ Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">FAQ</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight mb-6">
              <span className="block text-gray-900/90">
                Frequently Asked
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Questions
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              Get answers to common questions about our pricing, services, and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">Q</span>
                      </div>
                      {item.question}
                    </h3>
                    <div className="pl-9">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <CTASection
        title="Ready to Transform Your Marketing?"
        description="Let's discuss which package is right for your business and create a custom strategy that delivers measurable results and drives growth."
        primaryCta={{
          text: 'Get Custom Quote',
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
