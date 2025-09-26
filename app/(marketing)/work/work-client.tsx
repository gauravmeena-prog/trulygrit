'use client'

import { motion } from 'framer-motion'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CTASection } from '@/components/sections/cta-section'
import { ArrowRight, Calendar, Users, TrendingUp, Award } from 'lucide-react'

const services = [
  {
    icon: Award,
    title: 'Brand Transformation',
    description: 'Complete brand overhauls that reposition companies for growth and market leadership.',
    features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Market Positioning']
  },
  {
    icon: TrendingUp,
    title: 'Digital Strategy',
    description: 'Data-driven digital strategies that optimize performance and drive measurable results.',
    features: ['Digital Roadmaps', 'Performance Analytics', 'Conversion Optimization', 'Growth Hacking']
  },
  {
    icon: Users,
    title: 'Institutional Marketing',
    description: 'Specialized marketing for educational institutions and large organizations.',
    features: ['Admission Campaigns', 'Stakeholder Communication', 'Reputation Management', 'Community Building']
  },
  {
    icon: Calendar,
    title: 'Campaign Management',
    description: 'End-to-end campaign management from strategy to execution and optimization.',
    features: ['Campaign Planning', 'Multi-Channel Execution', 'Performance Tracking', 'ROI Optimization']
  }
]

const projectHighlights = [
  {
    title: 'University Rebranding Excellence',
    client: 'Dhirubhai Ambani University',
    year: '2024',
    challenge: 'Complete institutional rebrand from DA-IICT to DAU while maintaining academic excellence and celebrating 24th anniversary.',
    solution: 'Strategic brand transformation with comprehensive digital presence overhaul and admission campaign management.',
    results: [
      'Successful brand transition',
      '24th anniversary celebration',
      '2025 admissions management',
      'Enhanced institutional positioning'
    ]
  }
]

export default function WorkPageClient() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block text-gray-900/90">
                  Our Work
                </span>
                <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                  Services & Expertise
                </span>
              </motion.h1>
              <div className="mt-8 mb-6">
                <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
              </div>
              <motion.p 
                className="text-xl leading-relaxed text-gray-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Founded June 2025. We specialize in comprehensive brand transformations, digital strategy, and institutional marketing. Our expertise drives measurable results for ambitious organizations.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deliver comprehensive marketing solutions tailored to your business needs and growth objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Project Highlight Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Project Highlight</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A detailed look at how we approach complex institutional transformations.
              </p>
            </div>
            
            {projectHighlights.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Project Info */}
                  <div className="lg:col-span-1">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <div className="text-sm text-gray-500 mb-4">
                          {project.client} • {project.year}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-gray-700 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven 4-step process ensures every project delivers exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'Deep dive into your business, goals, and market position.' },
                { step: '02', title: 'Strategy', description: 'Develop comprehensive roadmap aligned with your objectives.' },
                { step: '03', title: 'Execution', description: 'Implement strategies with precision and attention to detail.' },
                { step: '04', title: 'Optimization', description: 'Monitor, measure, and optimize for continuous improvement.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Start Your Project?"
          description="Let's discuss how we can help you achieve your business goals through strategic marketing and brand development."
          primaryCta={{
            text: 'Get Your Free Strategy Call',
            href: '/contact',
          }}
          secondaryCta={{
            text: 'Learn About Our Process',
            href: '/services',
          }}
          variant="gradient"
        />
      </main>
      <SiteFooter />
    </div>
  )
}
