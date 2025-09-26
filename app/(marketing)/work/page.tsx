import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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

      {/* Detailed Case Study Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Case Study Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full border border-primary/20 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Case Study</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="block text-gray-900/90">
                DA-IICT to DAU
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Complete Brand Transformation
              </span>
            </h2>
            
            <div className="mt-8 mb-6">
              <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
            </div>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium max-w-4xl mx-auto">
              Led comprehensive brand transformation for Dhirubhai Ambani Institute of Information and Communication Technology's transition to Dhirubhai Ambani University. Delivered strategic rebranding, digital presence overhaul, and admission campaign management for 2025.
            </p>
          </div>
          
          {/* Main Case Study Content */}
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Image */}
            <div className="mb-16">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/dau_gate.jpg"
                  alt="Dhirubhai Ambani University Campus Gate"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-white/90 text-lg font-semibold">Dhirubhai Ambani University</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white/60 text-lg">2024</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      Celebrating 24 Years of Academic Excellence
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              
              {/* Left Column - Project Details */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT) approached us to lead their complete brand transformation as they transitioned to Dhirubhai Ambani University (DAU). This comprehensive project involved strategic rebranding, digital presence overhaul, and admission campaign management for their 2025 academic year.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    The institution needed to transition from their established DA-IICT identity to the new DAU brand while maintaining their 24-year legacy of academic excellence. The transformation required careful balance between honoring their past achievements and positioning for future growth.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h4>
                  <ul className="space-y-3 text-lg text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Strategic brand analysis and positioning framework</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Complete visual identity system development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Digital presence transformation and optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Admission campaign strategy and execution</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Right Column - Key Results */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h4>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl p-6 border border-primary/10">
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Brand Transformation</div>
                      <div className="text-2xl font-bold text-primary">DA-IICT → DAU</div>
                      <div className="text-gray-600 mt-2">Complete institutional rebrand</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl p-6 border border-primary/10">
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Established</div>
                      <div className="text-2xl font-bold text-primary">1999</div>
                      <div className="text-gray-600 mt-2">24 years of academic excellence</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl p-6 border border-primary/10">
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Admissions 2025</div>
                      <div className="text-2xl font-bold text-primary">Fully Managed</div>
                      <div className="text-gray-600 mt-2">All courses and programs</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl p-6 border border-primary/10">
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Anniversary</div>
                      <div className="text-2xl font-bold text-primary">24th Year</div>
                      <div className="text-gray-600 mt-2">Celebrating legacy and growth</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Services Delivered</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 text-sm font-semibold text-gray-700">
                      Brand Transformation
                    </span>
                    <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 text-sm font-semibold text-gray-700">
                      Digital Strategy
                    </span>
                    <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 text-sm font-semibold text-gray-700">
                      University Rebranding
                    </span>
                    <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 text-sm font-semibold text-gray-700">
                      Admission Campaigns
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Impact Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 mb-16">
              <h4 className="text-3xl font-bold text-gray-900 mb-6 text-center">Project Impact</h4>
              <p className="text-xl text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                The successful transformation positioned Dhirubhai Ambani University for its next phase of growth while celebrating their 24th year of academic excellence. The comprehensive rebranding established a fresh, modern identity that reflects the institution's evolution and commitment to innovation in education.
              </p>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="https://www.trulygrit.com/case-study/dhirubhai-ambani-university" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Watch Our Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
