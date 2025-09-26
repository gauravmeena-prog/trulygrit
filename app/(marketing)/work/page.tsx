import { Metadata } from 'next'
import { CaseStudiesGrid } from '@/components/sections/case-study-card'
import { CTASection } from '@/components/sections/cta-section'


const allCaseStudies = [
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
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              <span className="block text-gray-900/90">
                Our Work
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Real Results
              </span>
            </h1>
            <div className="mt-8 mb-6">
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
            </div>
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              Founded June 2025. We build revenue engines that deliver results through speed, measurement, and proven strategies. See how we transform businesses through strategic marketing and brand development.
            </p>
          </div>
        </div>
      </section>

      <CaseStudiesGrid
        title="Real Results from Real Client"
        description="Our partnership with Dhirubhai Ambani University demonstrates our expertise in comprehensive brand transformations and institutional positioning."
        caseStudies={allCaseStudies}
        showAll={true}
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
    </>
  )
}
