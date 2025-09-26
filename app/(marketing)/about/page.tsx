import { Metadata } from 'next'
import Image from 'next/image'

import { FeaturesGrid } from '@/components/sections/features-grid'
import { CTASection } from '@/components/sections/cta-section'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent } from '@/components/ui/card'
import { getIcon } from '@/lib/icons'


const values = [
  {
    iconName: 'target',
    title: 'Results-Driven Approach',
    description: 'We focus on delivering measurable results that directly impact your bottom line, not just vanity metrics.',
  },
  {
    iconName: 'users',
    title: 'Client Success Partnership',
    description: 'We work as an extension of your team, building lasting relationships based on mutual success and growth.',
  },
  {
    iconName: 'award',
    title: 'Proven Excellence',
    description: 'Our track record speaks for itself - from DAU transformation to successful campaigns, we deliver exceptional results.',
  },
  {
    iconName: 'trending-up',
    title: 'Continuous Innovation',
    description: 'We stay ahead of marketing trends and continuously evolve our strategies to keep you competitive.',
  },
]


const team = [
  {
    name: 'Gaurav Meena',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'I founded this agency with a vision to help businesses achieve remarkable growth through strategic marketing. As a solo founder, I handle everything from strategy to execution, ensuring every client receives my personal attention and expertise.',
    linkedin: 'https://linkedin.com/in/gauravmeena',
    instagram: 'https://www.instagram.com/gaurav.meena___/',
  },
]

export const metadata = {
  title: 'About Me | Truly Grit Marketing Agency',
  description: 'Meet Gaurav Meena, the solo founder behind Truly Grit. A strategic marketing professional dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
  openGraph: {
    title: 'About Me | Truly Grit Marketing Agency',
    description: 'Meet Gaurav Meena, the solo founder behind Truly Grit. A strategic marketing professional dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
    url: 'https://truly-grit.vercel.app/about',
    type: 'website',
  },
  twitter: {
    title: 'About Me | Truly Grit Marketing Agency',
    description: 'Meet Gaurav Meena, the solo founder behind Truly Grit. A strategic marketing professional dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Clean Hero Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'About' }]} />
          
          <div className="text-center max-w-5xl mx-auto mt-20">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="block text-gray-900">
                About
              </span>
              <span className="block text-orange-600 font-extrabold mt-2">
                Truly Grit
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto mb-12">
              We are a strategic marketing agency dedicated to helping ambitious businesses achieve extraordinary growth through data-driven strategies and creative excellence. Founded in 2025, we bring personal attention and expertise to every project.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
                <span className="text-gray-800 font-medium">Founded 2025</span>
              </div>
              <div className="bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
                <span className="text-gray-800 font-medium">Strategic Marketing</span>
              </div>
              <div className="bg-gray-100 rounded-full px-6 py-3 border border-gray-200">
                <span className="text-gray-800 font-medium">Data-Driven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building Revenue Engines
              <span className="block text-orange-600 mt-2">The Hard Way</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe great marketing should build genuine connections and drive meaningful results. Founded in 2025, we've built our reputation on delivering measurable outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-1 rounded-full mb-6 group-hover:w-24 transition-all duration-300"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  We build revenue engines that deliver results through speed, measurement, and proven strategies. Our approach combines data-driven insights with creative excellence to help businesses achieve extraordinary growth.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">What Sets Us Apart</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Focus on measurable results, not vanity metrics</span>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Strategies built on real data and proven frameworks</span>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Work as an extension of your team, not just a vendor</span>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Every campaign gets our personal attention and optimization</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=75"
                  alt="Marketing strategy and campaign development"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Principles
              <span className="block text-orange-600 mt-2">That Guide Us</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The core values that shape everything we do and how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = getIcon(value.iconName)
              return (
                <div key={value.title} className="group">
                  <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group-hover:border-orange-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                        {value.description}
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet The
              <span className="block text-orange-600 font-extrabold mt-2">
                Truly Grit Team
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strategic marketing professionals bringing personal attention and expertise to every project.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                    <Image
                      src={team[0].image}
                      alt={`Professional headshot of ${team[0].name}, ${team[0].role}`}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white p-4 rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <div className="text-lg font-bold">Founder</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {team[0].name}
                    </h3>
                    <p className="text-xl font-semibold text-orange-600 mb-6">
                      {team[0].role}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {team[0].bio}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h4>
                    <div className="flex gap-4">
                      <a
                        href={team[0].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href={team[0].instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                        </svg>
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company CTA Section */}
      <CTASection
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how we can help you achieve extraordinary growth through strategic marketing and proven results. Our team brings personal attention and expertise to every project."
        primaryCta={{
          text: 'Get Free Consultation',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Our Work',
          href: '/work',
        }}
        variant="gradient"
      />
    </>
  )
}
