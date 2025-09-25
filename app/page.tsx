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
    title: 'The Founder\'s Touch',
    description: 'Your project lands directly on the founder\'s desk—not buried in junior-level execution. Every strategy, every creative, every campaign gets the royal treatment. Because when the king leads, the kingdom thrives.',
    benefit: 'Direct founder oversight',
  },
  {
    iconName: 'target',
    title: 'Revenue or Nothing',
    description: 'Pretty websites don\'t pay bills. Profitable ones do. We don\'t create art—we create money-making machines. Every pixel, every word, every decision is measured against one metric: your bottom line.',
    benefit: 'Guaranteed ROI focus',
  },
  {
    iconName: 'rocket',
    title: 'Speed Kills Competition',
    description: 'While others plan for months, we ship in weeks. While they perfect, we profit. Fast loops, real data, immediate results. Your competitors are still in meetings while you\'re already winning.',
    benefit: 'Market domination speed',
  },
  {
    iconName: 'eye',
    title: 'Crystal Clear Results',
    description: 'No smoke, no mirrors, no BS. Real-time dashboards show exactly what\'s working, what\'s not, and what\'s making you money. You\'ll know every dollar spent and every dollar earned.',
    benefit: '100% transparency',
  },
]

const processSteps = [
  {
    iconName: 'search',
    title: 'Deep Dive Intelligence',
    description: 'We don\'t just scratch the surface—we excavate. Market secrets, competitor weaknesses, customer psychology. We find the gold mines others miss and build your empire on solid ground.',
    duration: 'Week 1-2',
    deliverables: ['Market Intelligence Report', 'Competitor Kill List', 'Customer Psychology Map', 'Revenue Opportunity Analysis'],
  },
  {
    iconName: 'lightbulb',
    title: 'Strategy That Wins',
    description: 'While others copy-paste generic strategies, we craft battle plans that actually work. No fluff, no theory—just proven tactics that turn your business into a money-printing machine.',
    duration: 'Week 3',
    deliverables: ['Winning Marketing Strategy', 'Channel Domination Plan', 'Budget Allocation Blueprint', 'Victory Timeline'],
  },
  {
    iconName: 'code',
    title: 'Execution That Converts',
    description: 'We don\'t just make things pretty—we make them profitable. Every design, every word, every pixel is engineered to turn browsers into buyers and visitors into revenue.',
    duration: 'Week 4-7',
    deliverables: ['Conversion-Optimized Assets', 'High-Converting Campaigns', 'Revenue-Generating Pages', 'Technical Powerhouse'],
  },
  {
    iconName: 'megaphone',
    title: 'Launch & Dominate',
    description: 'Game time. We launch your campaigns and watch your competitors scramble to catch up. Real-time optimization, constant improvement, and relentless pursuit of victory.',
    duration: 'Ongoing',
    deliverables: ['Campaign Domination', 'Live Performance Tracking', 'Continuous Optimization', 'Victory Reports'],
  },
]

const sampleCaseStudies = [
  {
    title: 'From Startup to $10M: Complete Brand Transformation',
    client: 'InnovateTech',
    year: 2023,
    services: ['Brand Strategy', 'Web Design', 'Digital Marketing'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'Complete brand overhaul that transformed a struggling tech startup into a market leader, resulting in 300% increase in qualified leads and $10M in new revenue within 8 months.',
    metrics: {
      revenue: '$10M+',
      leads: '300%',
      growth: '8 months'
    },
    slug: 'innovatetech-brand-transformation',
  },
  {
    title: 'E-commerce Explosion: 250% Sales Growth',
    client: 'StyleCo',
    year: 2023,
    services: ['Paid Advertising', 'Conversion Optimization', 'Analytics'],
    coverImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'Revolutionary e-commerce strategy that drove 250% increase in online sales, 40% higher conversion rates, and $5M additional revenue through strategic paid advertising and conversion optimization.',
    metrics: {
      sales: '250%',
      conversion: '40%',
      revenue: '$5M+'
    },
    slug: 'styleco-ecommerce-growth',
  },
  {
    title: 'B2B SaaS Domination: 500+ Qualified Leads',
    client: 'DataFlow',
    year: 2023,
    services: ['Content Strategy', 'SEO', 'Lead Generation'],
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'Comprehensive content strategy that generated 500+ qualified leads, established thought leadership, and increased organic traffic by 400% in just 6 months.',
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
    content: 'Truly Grit didn\'t just transform our marketing—they transformed our entire business. In 8 months, we went from struggling startup to $10M revenue company. Their strategic thinking and creative execution helped us increase qualified leads by 300% and dominate our market.',
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
    content: 'Working with Truly Grit was the best business decision we ever made. Their data-driven approach and creative expertise helped us achieve 250% revenue growth and establish ourselves as the market leader in our industry. ROI was 500% in the first year.',
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
    content: 'The team at Truly Grit understood our complex B2B challenges and delivered solutions that exceeded every expectation. Their content strategy generated 500+ qualified leads, established us as thought leaders, and increased our organic traffic by 400% in just 6 months.',
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
          description="We don't just create marketing campaigns—we build complete growth systems that transform your business from startup to market leader."
          steps={processSteps}
        />
        
        <CaseStudiesGrid
          title="Real Results from Real Clients"
          description="Don't just take our word for it—see the actual results we've delivered for businesses just like yours. These aren't hypothetical case studies—they're real transformations with real numbers."
          caseStudies={sampleCaseStudies}
        />
        
        <Testimonials
          title="Don't Just Take Our Word For It"
          description="Hear from real business leaders who transformed their companies with Truly Grit. These aren't just testimonials—they're success stories from entrepreneurs who bet on themselves and won."
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
