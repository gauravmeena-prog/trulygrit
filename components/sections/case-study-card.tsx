'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, TrendingUp, GraduationCap, ArrowRight } from 'lucide-react'

interface CaseStudy {
  title: string
  client: string
  year: number
  services: string[]
  coverImage: string
  summary: string
  slug: string
  metrics?: {
    [key: string]: string
  }
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Unique storytelling layout - no boxes */}
      <div className="relative py-24 overflow-hidden">
        
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-orange-50/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-orange-500/5 to-primary/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Hero image with overlay content */}
          <div className="relative mb-16">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
              <Image
                src={caseStudy.coverImage}
                alt={`${caseStudy.title} case study`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="max-w-4xl">
                  {/* Client info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-white/90 text-lg font-semibold">{caseStudy.client}</span>
                    <span className="text-white/60">•</span>
                    <span className="text-white/60 text-lg">{caseStudy.year}</span>
                  </div>
                  
                  {/* Main title */}
                  <h3 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    {caseStudy.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xl text-white/90 leading-relaxed font-medium max-w-3xl">
                    {caseStudy.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services and metrics - floating layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Services Delivered</h4>
              <div className="flex flex-wrap gap-4">
                {caseStudy.services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 text-gray-800 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {service}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Metrics */}
            {caseStudy.metrics && (
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h4>
                <div className="space-y-4">
                  {Object.entries(caseStudy.metrics).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:bg-white/80 transition-all duration-300"
                    >
                      <div className="text-gray-600 font-medium text-lg">
                        {key}
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                        {value}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom section divider */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  )
}

interface CaseStudiesGridProps {
  title: string
  description: string
  caseStudies: CaseStudy[]
  showAll?: boolean
}

export function CaseStudiesGrid({ 
  title, 
  description, 
  caseStudies, 
  showAll = false 
}: CaseStudiesGridProps) {
  const displayedCaseStudies = showAll ? caseStudies : caseStudies.slice(0, 3)
  
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="block text-gray-900/90">
              Real Results from
            </span>
            <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
              Real Client
            </span>
          </motion.h2>
          
          <motion.div
            className="mt-8 mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
          </motion.div>
          
          <motion.p 
            className="text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* Case studies */}
        <div className="space-y-0">
          {displayedCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CaseStudyCard caseStudy={caseStudy} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}