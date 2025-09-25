import { Metadata } from 'next'
import { Check, Star, Zap, Target, Rocket } from 'lucide-react'

import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CTASection } from '@/components/sections/cta-section'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses looking to establish their online presence',
    price: '$5,000',
    period: 'month',
    icon: Target,
    features: [
      'Brand strategy consultation',
      'Basic website design & development',
      'Social media setup (3 platforms)',
      'Monthly performance reports',
      'Email support',
      '2 revisions included',
    ],
    notIncluded: [
      'Paid advertising management',
      'Advanced SEO optimization',
      'Content creation',
      'Marketing automation',
    ],
    popular: false,
    cta: 'Get Started',
    href: '/contact?plan=starter',
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses ready to scale their marketing efforts',
    price: '$12,000',
    period: 'month',
    icon: Rocket,
    features: [
      'Everything in Starter',
      'Complete digital marketing strategy',
      'Paid advertising management (Google & Facebook)',
      'SEO optimization & content strategy',
      'Email marketing campaigns',
      'Monthly content creation (8 pieces)',
      'Analytics & conversion tracking',
      'Weekly performance calls',
      'Unlimited revisions',
    ],
    notIncluded: [
      'Advanced marketing automation',
      'Custom software development',
      'Enterprise-level integrations',
    ],
    popular: true,
    cta: 'Choose Growth',
    href: '/contact?plan=growth',
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for established businesses with complex needs',
    price: '$25,000',
    period: 'month',
    icon: Star,
    features: [
      'Everything in Growth',
      'Advanced marketing automation',
      'Custom CRM integration',
      'Multi-channel campaign management',
      'Advanced analytics & reporting',
      'Dedicated account manager',
      'Priority support & consulting',
      'Custom software development',
      'A/B testing & optimization',
      'Monthly strategy sessions',
    ],
    notIncluded: [
      'Custom pricing available',
      'Flexible contract terms',
      'Tailored to your specific needs',
    ],
    popular: false,
    cta: 'Contact Sales',
    href: '/contact?plan=enterprise',
  },
]

const addOns = [
  {
    name: 'Content Creation',
    description: 'Additional blog posts, social media content, and marketing materials',
    price: '$500',
    period: 'per piece',
    icon: Zap,
  },
  {
    name: 'Advanced SEO',
    description: 'Comprehensive SEO audit, optimization, and ongoing monitoring',
    price: '$2,000',
    period: 'per month',
    icon: Target,
  },
  {
    name: 'Custom Development',
    description: 'Bespoke web applications, integrations, and technical solutions',
    price: '$150',
    period: 'per hour',
    icon: Rocket,
  },
]

const faqItems = [
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. We\'ll work with you to ensure a smooth transition.',
  },
  {
    question: 'What\'s included in the setup fee?',
    answer: 'Setup fees cover initial strategy development, account setup, and onboarding. Most plans include setup in the first month\'s pricing.',
  },
  {
    question: 'Do you offer custom pricing?',
    answer: 'Yes! For unique requirements or larger projects, we offer custom pricing. Contact us to discuss your specific needs.',
  },
  {
    question: 'What if I need more than what\'s included?',
    answer: 'We offer add-on services and can scale our efforts based on your needs. Additional work is billed separately or can be added to your plan.',
  },
]

export const metadata: Metadata = {
  title: 'Pricing | Truly Grit - Transparent Marketing Packages',
  description: 'Choose the perfect marketing package for your business. Transparent pricing with no hidden fees. Start growing today.',
  openGraph: {
    title: 'Pricing | Truly Grit - Transparent Marketing Packages',
    description: 'Choose the perfect marketing package for your business. Transparent pricing with no hidden fees. Start growing today.',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Pricing' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose the perfect marketing package for your business. No hidden fees, no surprises. 
              Just results-driven marketing that grows with your business.
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
                    
                    <CardHeader className="text-center pb-8">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-base">
                        {plan.description}
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">What's Included:</h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {plan.notIncluded.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3 text-muted-foreground">Not Included:</h4>
                          <ul className="space-y-2">
                            {plan.notIncluded.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <span className="h-2 w-2 bg-muted-foreground/30 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full" 
                        size="lg"
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
              Add-on Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
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
                          <CardTitle className="text-lg">{addon.name}</CardTitle>
                          <div className="text-2xl font-bold text-primary">
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
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
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
        title="Ready to Choose Your Package?"
        description="Still have questions about our pricing? Let's discuss which package is right for your business goals."
        primaryCta={{
          text: 'Get Started Today',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Schedule a Call',
          href: '/contact',
        }}
        variant="gradient"
      />
    </>
  )
}
