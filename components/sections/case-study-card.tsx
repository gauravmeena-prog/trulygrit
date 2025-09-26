'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
      {/* Clean, minimal, professional layout */}
      <div className="py-20 border-b border-gray-100 last:border-b-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Simple two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={caseStudy.coverImage}
                  alt={`${caseStudy.title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              
              {/* Client */}
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {caseStudy.client} • {caseStudy.year}
              </div>
              
              {/* Title */}
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {caseStudy.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {caseStudy.summary}
              </p>
              
              {/* Services */}
              <div className="flex flex-wrap gap-3">
                {caseStudy.services.map((service) => (
                  <span 
                    key={service}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded"
                  >
                    {service}
                  </span>
                ))}
              </div>
              
              {/* Metrics */}
              {caseStudy.metrics && (
                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                  {Object.entries(caseStudy.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        {key}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
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
        <div className="text-center mb-20">
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
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  )
}