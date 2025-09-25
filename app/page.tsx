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
    title: 'DA-IICT to DAU: Complete Brand Transformation',
    client: 'Dhirubhai Ambani Institute of Information and Communication Technology',
    year: 2024,
    services: ['Brand Transformation', 'Digital Strategy', 'University Rebranding'],
    coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'We led the complete brand transformation for DA-IICT as they transitioned to Dhirubhai Ambani University (DAU). Our strategic approach included comprehensive rebranding, digital presence overhaul, and positioning the institution for its next chapter of growth. We helped them celebrate 25 years of academic excellence while establishing a fresh, modern identity that reflects their evolution from an institute to a full-fledged university.',
    metrics: {
      transformation: 'DA-IICT → DAU',
      established: '1999',
      anniversary: '25 Years'
    },
    slug: 'daiict-to-dau-brand-transformation',
  },
]

const testimonials = [
  {
    content: 'Truly Grit transformed our entire brand identity as we transitioned from DA-IICT to Dhirubhai Ambani University. Their strategic approach to rebranding and digital transformation helped us establish a fresh, modern identity that reflects our evolution and celebrates our 25 years of academic excellence. They understood the complexity of university rebranding and delivered exceptional results.',
    author: {
      name: 'DAU Leadership',
      role: 'Brand Transformation Team',
      company: 'Dhirubhai Ambani University',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop&auto=format&q=75',
    },
    rating: 5,
    results: ['Complete Rebrand', 'Digital Transformation', '25th Anniversary'],
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
                 description="We believe in authenticity over quantity. Our partnership with Dhirubhai Ambani University (formerly DA-IICT) demonstrates our expertise in complete brand transformations. From strategic rebranding to digital presence overhaul, we helped them transition from an institute to a full-fledged university while celebrating their 25 years of academic excellence."
                 caseStudies={sampleCaseStudies}
               />

               <Testimonials
                 title="What Our Clients Actually Say"
                 description="Hear directly from our client about their experience with our brand transformation services. Real feedback from a real partnership that delivered complete organizational change."
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
