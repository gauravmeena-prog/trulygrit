import { Metadata } from 'next'
import { CaseStudiesGrid } from '@/components/sections/case-study-card'
import { CTASection } from '@/components/sections/cta-section'


const allCaseStudies = [
  {
    title: 'Brand Transformation for Tech Startup',
    client: 'InnovateTech',
    year: 2023,
    services: ['Brand Strategy', 'Web Design', 'Digital Marketing'],
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    summary: 'Complete brand overhaul that resulted in 300% increase in qualified leads and $2M in new revenue.',
    slug: 'innovatetech-brand-transformation',
  },
  {
    title: 'E-commerce Growth Campaign',
    client: 'StyleCo',
    year: 2023,
    services: ['Paid Advertising', 'Conversion Optimization', 'Analytics'],
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    summary: 'Drove 250% increase in online sales through strategic paid advertising and conversion optimization.',
    slug: 'styleco-ecommerce-growth',
  },
  {
    title: 'Content Strategy for B2B SaaS',
    client: 'DataFlow',
    year: 2023,
    services: ['Content Strategy', 'SEO', 'Lead Generation'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    summary: 'Comprehensive content strategy that generated 500+ qualified leads and established thought leadership.',
    slug: 'dataflow-content-strategy',
  },
  {
    title: 'Restaurant Chain Digital Transformation',
    client: 'FreshBites',
    year: 2023,
    services: ['Digital Strategy', 'Mobile App', 'Social Media'],
    coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    summary: 'Digital transformation that increased online orders by 400% and customer retention by 60%.',
    slug: 'freshbites-digital-transformation',
  },
  {
    title: 'Healthcare Platform Launch',
    client: 'MedConnect',
    year: 2022,
    services: ['Product Launch', 'Content Marketing', 'PR'],
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    summary: 'Successful platform launch campaign that acquired 10K+ users in the first month.',
    slug: 'medconnect-platform-launch',
  },
  {
    title: 'Financial Services Rebrand',
    client: 'SecureInvest',
    year: 2022,
    services: ['Brand Identity', 'Website Redesign', 'Marketing Automation'],
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    summary: 'Complete rebrand that modernized their image and increased client acquisition by 180%.',
    slug: 'secureinvest-rebrand',
  },
]

export const metadata = {
  title: 'Our Work | Truly Grit Case Studies & Portfolio',
  description: 'Explore our successful marketing campaigns and case studies. See how we transformed brands and delivered exceptional results through strategic marketing solutions.',
  openGraph: {
    title: 'Our Work | Truly Grit Case Studies & Portfolio',
    description: 'Explore our successful marketing campaigns and case studies. See how we transformed brands and delivered exceptional results through strategic marketing solutions.',
    url: 'https://truly-grit.vercel.app/work',
    type: 'website',
  },
  twitter: {
    title: 'Our Work | Truly Grit Case Studies & Portfolio',
    description: 'Explore our successful marketing campaigns and case studies. See how we transformed brands and delivered exceptional results through strategic marketing solutions.',
  },
}

export default function WorkPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Our Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our portfolio of successful marketing campaigns and brand transformations 
              that have driven real business results for our clients.
            </p>
          </div>
        </div>
      </section>

      <CaseStudiesGrid
        title="Case Studies"
        description="Each project tells a story of strategic thinking, creative execution, and measurable results."
        caseStudies={allCaseStudies}
        showAll={true}
      />

      <CTASection
        title="Ready to Create Your Success Story?"
        description="Let's discuss how we can help you achieve similar results for your business."
        primaryCta={{
          text: 'Start Your Project',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Learn About Our Process',
          href: '/services',
        }}
      />
    </>
  )
}
