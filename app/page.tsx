import { Metadata } from 'next'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Hero from '@/components/Hero'
import { FeaturesGrid } from '@/components/sections/features-grid'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { CaseStudiesGrid } from '@/components/sections/case-study-card'
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
    title: 'DA-IICT to DAU: Complete Brand Transformation',
    client: 'Dhirubhai Ambani Institute of Information and Communication Technology',
    year: 2024,
    services: ['Brand Transformation', 'Digital Strategy', 'University Rebranding'],
    coverImage: '/dau_gate.jpg',
    summary: 'Led comprehensive brand transformation for DA-IICT\'s transition to Dhirubhai Ambani University. Delivered strategic rebranding, digital presence overhaul, and admission campaign management for 2025. Successfully positioned the institution for its next growth phase while celebrating their 24th year of academic excellence.',
    metrics: {
      transformation: 'DA-IICT → DAU',
      established: '1999',
      anniversary: '24 Years',
      admissions: '2025 Managed'
    },
    slug: 'daiict-to-dau-brand-transformation',
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
                 title="Client Success Stories"
                 description="Our partnership with Dhirubhai Ambani University demonstrates our expertise in comprehensive brand transformations and institutional positioning."
                 caseStudies={sampleCaseStudies}
               />

        
        <CTASection
          title="Ready to Transform Your Business?"
          description="Join successful organizations who have achieved extraordinary growth through our strategic approach. Let's discuss how we can help transform your business."
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
