import { Metadata } from 'next'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { StorytellingSection } from '@/components/sections/storytelling-section'
import { FeaturesGrid } from '@/components/sections/features-grid'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { CaseStudiesGrid } from '@/components/sections/case-study-card'
import { Testimonials } from '@/components/sections/testimonial-card'
import { CTASection } from '@/components/sections/cta-section'


const features = [
  {
    iconName: 'lightbulb',
    title: 'Strategic Vision',
    description: 'We don\'t just create campaigns—we build comprehensive marketing ecosystems that align with your business goals and drive long-term growth.',
    benefit: '300% avg revenue increase',
  },
  {
    iconName: 'target',
    title: 'Precision Targeting',
    description: 'Our AI-powered audience analysis ensures your message reaches the right people at the right time, maximizing ROI and minimizing waste.',
    benefit: '5x higher conversion rates',
  },
  {
    iconName: 'rocket',
    title: 'Growth Acceleration',
    description: 'We implement battle-tested strategies that transform your business from struggling startup to market leader in record time.',
    benefit: '6-month average growth cycle',
  },
  {
    iconName: 'users',
    title: 'Expert Team',
    description: 'Our certified marketing professionals bring 10+ years of experience and proven expertise to every project we undertake.',
    benefit: 'Google & Meta certified',
  },
  {
    iconName: 'trending-up',
    title: 'Proven Results',
    description: 'We don\'t just promise results—we deliver them. Our clients see measurable outcomes within 90 days or we refund your investment.',
    benefit: '90-day guarantee',
  },
  {
    iconName: 'zap',
    title: 'Agile Execution',
    description: 'We move at the speed of business, launching campaigns in days, not months, while maintaining the highest quality standards.',
    benefit: '48-hour launch time',
  },
]

const processSteps = [
  {
    iconName: 'search',
    title: 'Discovery & Research',
    description: 'We dive deep into your business, competitors, and target audience to uncover hidden opportunities and create a rock-solid foundation for explosive growth.',
    duration: 'Week 1-2',
    deliverables: ['Market Analysis', 'Competitor Audit', 'Customer Personas', 'SWOT Analysis'],
  },
  {
    iconName: 'lightbulb',
    title: 'Strategy Development',
    description: 'Our experts craft a battle-tested marketing strategy that aligns with your business goals and positions you as the market leader in your industry.',
    duration: 'Week 3',
    deliverables: ['Marketing Strategy', 'Channel Selection', 'Budget Allocation', 'Timeline Planning'],
  },
  {
    iconName: 'code',
    title: 'Creative Execution',
    description: 'We bring your strategy to life with stunning visuals, compelling copy, and technical implementation that converts visitors into customers.',
    duration: 'Week 4-7',
    deliverables: ['Brand Assets', 'Campaign Creatives', 'Landing Pages', 'Technical Setup'],
  },
  {
    iconName: 'megaphone',
    title: 'Launch & Optimize',
    description: 'We launch your campaigns and continuously monitor, test, and optimize every element to maximize your ROI and drive sustainable growth.',
    duration: 'Ongoing',
    deliverables: ['Campaign Launch', 'Performance Monitoring', 'A/B Testing', 'Monthly Reports'],
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
        <Hero
          title="Transform Your Business"
          subtitle="With Marketing That Actually Works"
          useLogo={false}
          description="Stop wasting money on marketing that doesn't convert. We help ambitious businesses achieve 300%+ growth through data-driven strategies that build real connections and drive measurable results."
          primaryCta={{
            text: 'Get Your Free Strategy Call',
            href: '/contact',
          }}
          secondaryCta={{
            text: 'See Success Stories',
            href: '/work',
          }}
          backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&auto=format&q=75"
        />
        
        <StorytellingSection />
        
        <FeaturesGrid
          title="Why Top Businesses Choose Truly Grit"
          description="We don't just create marketing campaigns—we build growth engines that transform businesses and drive measurable results."
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
