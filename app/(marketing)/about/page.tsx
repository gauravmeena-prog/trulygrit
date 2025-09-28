import { Metadata } from 'next'

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
    bio: 'I founded Truly Grit with a vision to help businesses achieve remarkable growth through strategic marketing. As a passionate entrepreneur, I bring fresh perspectives and dedicated focus to every project. Being a solo founder means every client gets my personal attention and commitment to their success.',
    linkedin: 'https://www.linkedin.com/in/gauravmeena--/',
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'About' }]} />
          
          <div className="text-center max-w-4xl mx-auto mt-20">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="block text-gray-900">
                About
              </span>
              <span className="block text-orange-600 font-extrabold mt-2">
                Truly Grit
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto mb-12">
              We are a strategic marketing agency dedicated to helping ambitious businesses achieve extraordinary growth through data-driven strategies and creative excellence. Founded with a vision to transform how businesses approach marketing, we bring personal attention, proven expertise, and measurable results to every project.
            </p>
            
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building Revenue Engines
              <span className="block text-orange-600 mt-2">The Hard Way</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              We believe great marketing should build genuine connections and drive meaningful results. Founded in 2025, we're building our reputation one client at a time, focusing on delivering real value through strategic thinking and creative execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-1 rounded-full mb-6 group-hover:w-24 transition-all duration-300"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  We build revenue engines that deliver results through speed, measurement, and strategic thinking. Our approach combines data-driven insights with creative excellence to help businesses achieve growth. Every campaign is carefully planned and executed for maximum impact.
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
            
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Principles
              <span className="block text-orange-600 mt-2">That Guide Us</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet The
              <span className="block text-orange-600 font-extrabold mt-2">
                Truly Grit Team
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Strategic marketing professionals bringing personal attention and expertise to every project.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg text-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    {team[0].name}
                  </h3>
                  <p className="text-2xl font-semibold text-orange-600 mb-8">
                    {team[0].role}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-xl max-w-3xl mx-auto">
                    {team[0].bio}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-8">Connect With Us</h4>
                  <div className="flex justify-center gap-6">
                    <a
                      href={team[0].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-medium hover:scale-105 text-lg"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href={team[0].instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white rounded-xl hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 transition-all duration-200 font-medium hover:scale-105 text-lg shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-3.403 0-6.162-2.759-6.162-6.162s2.759-6.162 6.162-6.162 6.162 2.759 6.162 6.162-2.759 6.162-6.162 6.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
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
        description="Let's discuss how we can help you achieve extraordinary growth through strategic marketing and proven results. Our professional approach ensures every project receives the attention and expertise it deserves."
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
