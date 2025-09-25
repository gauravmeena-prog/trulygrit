import { Metadata } from 'next'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Hero from '@/components/Hero'
import { FeaturesGrid } from '@/components/sections/features-grid'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { CaseStudiesGrid } from '@/components/sections/case-study-card'
import { Testimonials } from '@/components/sections/testimonial-card'
import { CTASection } from '@/components/sections/cta-section'


const features = [
  {
    iconName: 'crown',
    title: 'Founder-Led Excellence',
    description: 'Every project receives direct oversight from our founder, ensuring strategic alignment and exceptional execution quality. Senior-level expertise guides every decision.',
    benefit: 'Direct founder involvement',
  },
  {
    iconName: 'target',
    title: 'Results-Driven Approach',
    description: 'We prioritize measurable business outcomes over aesthetic preferences. Every design decision is validated against conversion metrics and revenue impact.',
    benefit: 'Performance-focused results',
  },
  {
    iconName: 'rocket',
    title: 'Accelerated Execution',
    description: 'Rapid iteration cycles enable quick learning and optimization. We launch, measure, and refine faster than traditional agencies for competitive advantage.',
    benefit: 'Faster time-to-market',
  },
  {
    iconName: 'eye',
    title: 'Complete Transparency',
    description: 'Real-time dashboards and comprehensive analytics provide complete visibility into campaign performance and business impact. Clear reporting on every investment.',
    benefit: 'Full accountability',
  },
]

const processSteps = [
  {
    iconName: 'search',
    title: 'We Get to Know Your Business',
    description: 'We sit down with you (literally or virtually) and dig into what makes your business tick. Who are your customers? What is working? What is not? We look at your competitors and find the gaps we can exploit.',
    duration: 'Week 1-2',
    deliverables: ['Business Deep Dive', 'Customer Interviews', 'Competitor Analysis', 'Market Opportunity Map'],
  },
  {
    iconName: 'lightbulb',
    title: 'We Build Your Game Plan',
    description: 'Based on what we learned, we create a clear roadmap. Which marketing channels should you focus on? How much should you spend? What is the timeline? We make sure everything aligns with your actual business goals.',
    duration: 'Week 3',
    deliverables: ['Marketing Roadmap', 'Channel Strategy', 'Budget Breakdown', 'Monthly Milestones'],
  },
  {
    iconName: 'code',
    title: 'We Create What Actually Works',
    description: 'Now we build the stuff that matters. Your website, ads, emails, social content—everything designed to turn visitors into customers. We test different approaches and focus on what drives real results.',
    duration: 'Week 4-7',
    deliverables: ['Website & Landing Pages', 'Ad Campaigns', 'Email Sequences', 'Content Library'],
  },
  {
    iconName: 'megaphone',
    title: 'We Launch and Keep Improving',
    description: 'Game time. We launch everything and watch the numbers. What is working? What is not? We make adjustments weekly and send you regular reports so you always know what is happening with your money.',
    duration: 'Ongoing',
    deliverables: ['Campaign Launch', 'Weekly Optimizations', 'Monthly Reports', 'Quarterly Reviews'],
  },
]

const sampleCaseStudies = [
  {
    title: 'How We Turned a Struggling Startup Into a $10M Company',
    client: 'InnovateTech',
    year: 2023,
    services: ['Brand Strategy', 'Web Design', 'Digital Marketing'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'They were 6 months from running out of cash. We rebuilt their brand from the ground up, redesigned their entire customer journey, and launched campaigns that delivered 300% more qualified leads. Result? $10M in new revenue and a company that is still growing.',
    metrics: {
      revenue: '$10M+',
      leads: '300%',
      growth: '8 months'
    },
    slug: 'innovatetech-brand-transformation',
  },
  {
    title: 'The E-commerce Store That Went From $50K to $500K Monthly',
    client: 'StyleCo',
    year: 2023,
    services: ['Paid Advertising', 'Conversion Optimization', 'Analytics'],
    coverImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'Their online store was stuck at $50K monthly revenue. We analyzed their data, optimized their checkout flow, and launched targeted ad campaigns. Six months later, they are doing $500K monthly with a 40% higher conversion rate.',
    metrics: {
      sales: '250%',
      conversion: '40%',
      revenue: '$5M+'
    },
    slug: 'styleco-ecommerce-growth',
  },
  {
    title: 'From 10 Leads to 500+ Qualified Prospects Monthly',
    client: 'DataFlow',
    year: 2023,
    services: ['Content Strategy', 'SEO', 'Lead Generation'],
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'This B2B SaaS was getting maybe 10 leads a month. We created a content strategy that positioned them as industry experts, optimized their SEO, and built lead magnets that actually worked. Now they get 500+ qualified leads monthly.',
    metrics: {
      leads: '500+',
      traffic: '400%',
      timeline: '6 months'
    },
    slug: 'dataflow-content-strategy',
  },
]

const testimonials = [
  {
    content: 'Honestly, we were 6 months away from shutting down when we found Truly Grit. They did not just fix our marketing—they rebuilt our entire business model. Eight months later, we hit $10M in revenue. I still cannot believe how they turned us around.',
    author: {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    },
    rating: 5,
    results: ['300% lead increase', '$10M revenue', '8 months growth'],
  },
  {
    content: 'We were stuck at $50K monthly and could not figure out why. Truly Grit came in, analyzed everything, and within 6 months we were doing $500K monthly. The ROI was insane—500% in the first year alone. Best investment we ever made.',
    author: {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'StyleCo',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    },
    rating: 5,
    results: ['250% revenue growth', '500% ROI', 'Market leader'],
  },
  {
    content: 'We were getting maybe 10 leads a month. It was embarrassing. Truly Grit created a content strategy that actually worked, optimized our SEO, and now we get 500+ qualified leads monthly. They made us look like industry experts when we felt like beginners.',
    author: {
      name: 'Emily Rodriguez',
      role: 'Founder & CTO',
      company: 'DataFlow',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    },
    rating: 5,
    results: ['500+ qualified leads', '400% traffic growth', '6 months timeline'],
  },
]

export const metadata = {
  title: 'Truly Grit | Strategic Marketing Agency',
  description: 'We help ambitious businesses achieve extraordinary growth through strategic marketing that builds lasting connections and drives measurable results.',
  openGraph: {
    title: 'Truly Grit | Strategic Marketing Agency',
    description: 'We help ambitious businesses achieve extraordinary growth through strategic marketing that builds lasting connections and drives measurable results.',
    url: 'https://truly-grit.vercel.app',
    type: 'website',
  },
  twitter: {
    title: 'Truly Grit | Strategic Marketing Agency',
    description: 'We help ambitious businesses achieve extraordinary growth through strategic marketing that builds lasting connections and drives measurable results.',
  },
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Hero />
        
        <FeaturesGrid
          title="Markets forget noise. They remember results."
          description="Founded on 18 June 2025, Truly Grit builds revenue engines the hard way—by shipping fast, measuring everything, and letting proof speak."
          features={features}
        />
        
        <ProcessTimeline
          title="Our Proven 4-Step Growth System"
          description="We do not just create marketing campaigns—we build complete growth systems that transform your business from startup to market leader."
          steps={processSteps}
        />
        
        <CaseStudiesGrid
          title="Real Results from Real Clients"
          description="Here is the truth: We do not do hypothetical. Every case study below represents actual businesses that trusted us with their growth. Real companies. Real challenges. Real results that speak louder than any promise we could make."
          caseStudies={sampleCaseStudies}
        />
        
        <Testimonials
          title="What Our Clients Actually Say"
          description="No fluff. No marketing speak. Just real business owners telling you exactly what happened when they worked with us. The good, the bad, and the results that changed everything."
          testimonials={testimonials}
        />
        
        <CTASection
          title="Ready to Transform Your Business Like These Success Stories?"
          description="Stop leaving money on the table. Join the ranks of successful entrepreneurs who chose Truly Grit and achieved extraordinary growth. Your competitors are already ahead—don't let them get further."
          primaryCta={{
            text: 'Get Your Free Strategy Call',
            href: '/contact',
          }}
          secondaryCta={{
            text: 'See Our Pricing',
            href: '/pricing',
          }}
          variant="gradient"
        />
      </main>
      <SiteFooter />
    </div>
  )
}
