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

const stats = [
  { label: 'Founded', value: 'June 2025' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Campaigns Launched', value: '10+' },
  { label: 'Years Experience', value: '5+' },
]

const team = [
  {
    name: 'Gaurav Meena',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'I founded this agency with a vision to help businesses achieve remarkable growth through strategic marketing. As a solo founder, I handle everything from strategy to execution, ensuring every client receives my personal attention and expertise.',
    linkedin: 'https://linkedin.com/in/gauravmeena',
    instagram: 'https://instagram.com/gauravmeena',
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
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About' }]} />
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              About Me
            </h1>
            
            <Image
              src="/Logo_white_bg.png"
              alt="Truly Grit"
              width={200}
              height={67}
              className="h-16 w-auto filter brightness-0 mx-auto mb-8"
            />
            
            <p className="text-xl leading-relaxed text-gray-600">
              I'm a strategic marketing professional dedicated to helping ambitious businesses achieve extraordinary growth through data-driven strategies and creative excellence. As a solo founder, I bring personal attention and expertise to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Clean Story Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              My Approach to Marketing
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">My Mission</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  I build revenue engines that deliver results through speed, measurement, and proven strategies. My approach combines data-driven insights with creative excellence to help businesses achieve extraordinary growth.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900">What Sets Me Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">Focus on measurable results, not vanity metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">Strategies built on real data and proven frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">Work as an extension of your team, not just a vendor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">Every campaign gets my personal attention and optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=75"
                    alt="Marketing strategy and campaign development"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Stats Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Track Record
            </h2>
            <p className="text-lg text-gray-600">
              Key metrics that reflect my commitment to client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Values Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything I do and how I work with clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const IconComponent = getIcon(value.iconName)
              return (
                <div key={value.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clean Founder Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Gaurav Meena
            </h2>
            <p className="text-lg text-gray-600">
              Strategic marketing professional bringing personal attention and expertise to every project.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={team[0].image}
                      alt={`Professional headshot of ${team[0].name}, ${team[0].role}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {team[0].name}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-6">
                    {team[0].role}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {team[0].bio}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
                    <div className="flex gap-4">
                      <a
                        href={team[0].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href={team[0].instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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

      {/* Personal CTA Section */}
      <CTASection
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how I can help you achieve extraordinary growth through strategic marketing and proven results. As a solo founder, you'll get my personal attention and expertise."
        primaryCta={{
          text: 'Get Free Consultation',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View My Work',
          href: '/work',
        }}
        variant="gradient"
      />
    </>
  )
}
