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
    name: 'Starter Package',
    icon: Target,
    price: '$5,000',
    period: 'one-time',
    description: 'Ideal for startups and small businesses looking to establish a strong online presence.',
    features: [
      'Basic Brand Strategy',
      'Website Audit & Recommendations',
      'SEO Foundation Setup',
      'Social Media Profile Optimization',
      '1-Month Digital Marketing Support',
    ],
    cta: 'Get Started',
    href: '/contact?plan=starter',
    popular: false,
  },
  {
    name: 'Growth Accelerator',
    icon: Rocket,
    price: '$12,000',
    period: 'one-time',
    description: 'Designed for growing businesses ready to scale their marketing efforts and reach new audiences.',
    features: [
      'Comprehensive Brand Strategy',
      'Custom Website Design (up to 10 pages)',
      'Advanced SEO & Content Strategy',
      'Targeted Paid Advertising Campaign (1 channel)',
      '3-Months Digital Marketing Support',
      'Monthly Performance Reports',
    ],
    cta: 'Choose Plan',
    href: '/contact?plan=growth',
    popular: true,
  },
  {
    name: 'Enterprise Solution',
    icon: Star,
    price: '$25,000+',
    period: 'custom',
    description: 'Tailored for established enterprises seeking a full-service, integrated marketing partnership.',
    features: [
      'In-depth Market Research & Strategy',
      'Enterprise-level Web Development',
      'Full-scale SEO & Content Marketing',
      'Multi-channel Paid Advertising',
      'Dedicated Account Manager',
      'Ongoing Optimization & Support',
      'Custom Reporting & Analytics',
    ],
    cta: 'Contact for Quote',
    href: '/contact?plan=enterprise',
    popular: false,
  },
]

const addOns = [
  {
    name: 'Content Creation',
    icon: Zap,
    price: '$1,500',
    period: 'month',
    description: 'High-quality blog posts, articles, and multimedia content to engage your audience.',
  },
  {
    name: 'Social Media Management',
    icon: Check,
    price: '$1,000',
    period: 'month',
    description: 'Full management of your social media channels, including content scheduling and engagement.',
  },
  {
    name: 'Advanced Analytics',
    icon: Star,
    price: '$750',
    period: 'month',
    description: 'In-depth data analysis, custom dashboards, and actionable insights for continuous improvement.',
  },
]

const faqItems = [
  {
    question: 'What is included in the "Starter Package"?',
    answer: 'The Starter Package is designed for businesses just beginning their marketing journey. It includes foundational brand strategy, a website audit, basic SEO setup, social media optimization, and one month of digital marketing support to get you off the ground.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A typical website design project might take 4-8 weeks, while a comprehensive digital marketing campaign could be ongoing. We provide detailed timelines after our initial discovery phase.',
  },
  {
    question: 'Do you offer custom marketing solutions?',
    answer: 'Absolutely! Our Enterprise Solution is fully customizable. We work closely with you to understand your unique challenges and goals, then craft a bespoke strategy and service package that perfectly fits your needs.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods, including bank transfers, major credit cards, and online payment platforms. Payment schedules are typically structured with an upfront deposit and subsequent milestone payments.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We define success based on your specific business objectives. We track key performance indicators (KPIs) such as website traffic, lead generation, conversion rates, ROI, and brand engagement, providing transparent reports throughout our partnership.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Pricing' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Transparent Pricing for Growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find the perfect marketing package to accelerate your business.
              We offer flexible solutions tailored to your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <div key={plan.name}>
                  <Card className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle className="text-3xl font-bold">{plan.name}</CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground">
                        {plan.description}
                      </CardDescription>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-foreground">
                          {plan.price}
                        </span>
                        {plan.period !== 'custom' && (
                          <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                            /{plan.period}
                          </span>
                        )}
                      </p>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="mt-10 w-full"
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <a href={plan.href}>{plan.cta}</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Optional Add-on Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Need something extra? We offer additional services to complement your marketing package.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {addOns.map((addon, index) => {
              const Icon = addon.icon
              return (
                <div key={addon.name}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold">{addon.name}</CardTitle>
                          <div className="text-lg font-bold text-foreground">
                            {addon.price}<span className="text-sm font-normal text-muted-foreground">/{addon.period}</span>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{addon.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pricing FAQ
            </h2>
          </div>

          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-border pb-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Invest in Your Growth?"
        description="Contact us today to discuss your project and get a personalized quote."
        primaryCta={{
          text: 'Get a Custom Quote',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Explore Services',
          href: '/services',
        }}
      />
    </>
  )
}
