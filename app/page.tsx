import { Metadata } from 'next'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { FeaturesGrid } from '@/components/sections/features-grid'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { CaseStudiesGrid } from '@/components/sections/case-study-card'
import { Testimonials } from '@/components/sections/testimonial-card'
import { CTASection } from '@/components/sections/cta-section'


const features = [
  {
    iconName: 'lightbulb',
    title: 'Strategic Vision',
    description: 'We develop comprehensive marketing strategies that align with your business goals and market opportunities.',
  },
  {
    iconName: 'target',
    title: 'Precision Targeting',
    description: 'Our data-driven approach ensures your message reaches the right audience at the right time with maximum impact.',
  },
  {
    iconName: 'rocket',
    title: 'Growth Acceleration',
    description: 'We implement proven strategies that drive sustainable growth and measurable results for your business.',
  },
  {
    iconName: 'users',
    title: 'Expert Team',
    description: 'Our experienced professionals bring deep industry knowledge and creative expertise to every project.',
  },
  {
    iconName: 'trending-up',
    title: 'Proven Results',
    description: 'We deliver measurable outcomes with track records of success across diverse industries and markets.',
  },
  {
    iconName: 'zap',
    title: 'Agile Execution',
    description: 'We move quickly and efficiently, adapting to market changes while maintaining high-quality standards.',
  },
]

const processSteps = [
  {
    iconName: 'search',
    title: 'Discovery & Research',
    description: 'We begin by understanding your business, market, and audience to create a foundation for success.',
    duration: '1-2 weeks',
  },
  {
    iconName: 'lightbulb',
    title: 'Strategy Development',
    description: 'Based on our research, we develop a comprehensive marketing strategy tailored to your goals.',
    duration: '1 week',
  },
  {
    iconName: 'code',
    title: 'Creative Execution',
    description: 'Our team brings the strategy to life through compelling creative work and technical implementation.',
    duration: '2-4 weeks',
  },
  {
    iconName: 'megaphone',
    title: 'Launch & Optimize',
    description: 'We launch your campaigns and continuously optimize for maximum performance and results.',
    duration: 'Ongoing',
  },
]

const sampleCaseStudies = [
  {
    title: 'Brand Transformation for Tech Startup',
    client: 'InnovateTech',
    year: 2023,
    services: ['Brand Strategy', 'Web Design', 'Digital Marketing'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'Complete brand overhaul that resulted in 300% increase in qualified leads and $2M in new revenue.',
    slug: 'innovatetech-brand-transformation',
  },
  {
    title: 'E-commerce Growth Campaign',
    client: 'StyleCo',
    year: 2023,
    services: ['Paid Advertising', 'Conversion Optimization', 'Analytics'],
    coverImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'Drove 250% increase in online sales through strategic paid advertising and conversion optimization.',
    slug: 'styleco-ecommerce-growth',
  },
  {
    title: 'Content Strategy for B2B SaaS',
    client: 'DataFlow',
    year: 2023,
    services: ['Content Strategy', 'SEO', 'Lead Generation'],
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format&q=75',
    summary: 'Comprehensive content strategy that generated 500+ qualified leads and established thought leadership.',
    slug: 'dataflow-content-strategy',
  },
]

const testimonials = [
  {
    content: 'Truly Grit transformed our marketing approach completely. Their strategic thinking and creative execution helped us increase our qualified leads by 300% and achieve $2M in new revenue within the first year.',
    author: {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    },
    rating: 5,
  },
  {
    content: 'Working with Truly Grit was a game-changer for our business. Their data-driven approach and creative expertise helped us achieve 250% revenue growth and establish a strong market presence.',
    author: {
      name: 'Michael Chen',
      role: 'Marketing Director', 
      company: 'StyleCo',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    },
    rating: 5,
  },
  {
    content: 'The team at Truly Grit understood our business challenges and delivered solutions that exceeded our expectations. Their content strategy generated 500+ qualified leads and established us as thought leaders in our industry.',
    author: {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'DataFlow',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    },
    rating: 5,
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
          title="Marketing That"
          subtitle="Moves Mountains"
          useLogo={false}
          description="We help ambitious businesses achieve extraordinary growth through strategic marketing that builds lasting connections and drives measurable results."
          primaryCta={{
            text: 'Start Your Journey',
            href: '/contact',
          }}
          secondaryCta={{
            text: 'See Our Work',
            href: '/work',
          }}
          backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&auto=format&q=75"
        />
        
        <FeaturesGrid
          title="Why Choose Truly Grit"
          description="We combine strategic thinking with creative execution to deliver marketing solutions that drive real business results."
          features={features}
        />
        
        <ProcessTimeline
          title="Our Process"
          description="We follow a proven methodology that ensures every project delivers exceptional results from start to finish."
          steps={processSteps}
        />
        
        <CaseStudiesGrid
          title="Our Work"
          description="Explore our portfolio of successful projects and see how we've helped businesses achieve their marketing goals."
          caseStudies={sampleCaseStudies}
        />
        
        <Testimonials
          title="What Our Clients Say"
          description="Hear from the businesses we've helped achieve their marketing goals and drive real growth."
          testimonials={testimonials}
        />
        
        <CTASection
          title="Ready to Grow Your Business?"
          description="Let's discuss how we can help you achieve your marketing goals and drive real business results."
          primaryCta={{
            text: 'Get Started',
            href: '/contact',
          }}
          secondaryCta={{
            text: 'Learn More',
            href: '/services',
          }}
          variant="gradient"
        />
      </main>
      <SiteFooter />
    </div>
  )
}
