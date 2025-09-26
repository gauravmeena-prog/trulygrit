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
  { label: 'Successful Campaigns', value: '50+' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Growth Rate', value: '300%' },
]

const team = [
  {
    name: 'Gaurav Meena',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'Gaurav founded Truly Grit with a vision to help businesses achieve remarkable growth through strategic marketing. With expertise in digital marketing and brand transformation, he leads our team with passion and results-driven approach.',
  },
  {
    name: 'Marketing Strategists',
    role: 'Strategy Team',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'Our strategy team develops data-driven marketing approaches that have helped clients like DAU achieve significant growth. We combine analytics expertise with creative thinking to deliver maximum impact.',
  },
  {
    name: 'Creative Team',
    role: 'Design & Content',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'Our creative team brings brands to life through compelling visual design and content. From brand identity to social media content, we create materials that engage audiences and drive conversions.',
  },
  {
    name: 'Technical Team',
    role: 'Development & Analytics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'Our technical team ensures all digital solutions are scalable, performant, and optimized for results. We handle everything from website development to advanced analytics and tracking.',
  },
]

export const metadata = {
  title: 'About Us | Truly Grit Marketing Agency',
  description: 'Meet the team behind Truly Grit. We are strategic marketing professionals dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
  openGraph: {
    title: 'About Us | Truly Grit Marketing Agency',
    description: 'Meet the team behind Truly Grit. We are strategic marketing professionals dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
    url: 'https://truly-grit.vercel.app/about',
    type: 'website',
  },
  twitter: {
    title: 'About Us | Truly Grit Marketing Agency',
    description: 'Meet the team behind Truly Grit. We are strategic marketing professionals dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Professional Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'About' }]} />
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">About Us</span>
            </div>
            
            <div className="flex flex-col items-center space-y-8 mb-12">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
                <span className="block text-gray-900/90">
                  About
                </span>
                <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                  Truly Grit
                </span>
              </h1>
              <Image
                src="/Logo_white_bg.png"
                alt="Truly Grit"
                width={200}
                height={67}
                className="h-16 w-auto filter brightness-0"
              />
            </div>
            
            <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
              Founded on June 18, 2025, Truly Grit is a strategic marketing agency dedicated to helping ambitious businesses achieve extraordinary growth through data-driven strategies and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Story Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Story</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight mb-6">
              <span className="block text-gray-900/90">
                Building Revenue Engines
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                The Hard Way
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              Founded on June 18, 2025, Truly Grit was born from a simple belief: great marketing should build genuine connections and drive meaningful results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  We build revenue engines that deliver results through speed, measurement, and proven strategies. Our approach combines data-driven insights with creative excellence to help businesses achieve extraordinary growth.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">What Sets Us Apart</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600">We focus on measurable results, not vanity metrics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600">Our strategies are built on real data and proven frameworks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600">We work as an extension of your team, not just a vendor</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600">Every campaign is optimized for maximum ROI and growth</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=75"
                  alt="Truly Grit team working on marketing strategy and campaign development"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Stats Section */}
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Impact</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight mb-6">
              <span className="block text-gray-900/90">
                Proven Results
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Real Impact
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              Numbers that reflect our commitment to client success and measurable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Values Section */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Values</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight mb-6">
              <span className="block text-gray-900/90">
                The Principles
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                That Guide Us
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              The core values that shape everything we do and how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = getIcon(value.iconName)
              return (
                <div key={value.title} className="group">
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional Team Section */}
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Team</span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight mb-6">
              <span className="block text-gray-900/90">
                Meet The
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Truly Grit Team
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-600 font-medium">
              The talented individuals behind our success and your results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <div key={person.name} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      src={person.image}
                      alt={`Professional headshot of ${person.name}, ${person.role} at Truly Grit`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-4">
                      {person.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <CTASection
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how our team can help you achieve extraordinary growth through strategic marketing and proven results."
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
