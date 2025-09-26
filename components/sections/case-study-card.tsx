'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, TrendingUp, GraduationCap } from 'lucide-react'

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
      {/* Clean minimal layout - no cards */}
      <div className="relative bg-white py-12">
        
        {/* Header section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{caseStudy.client}</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-400">{caseStudy.year}</span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full">
              <GraduationCap className="h-4 w-4 text-orange-600" />
              <span className="text-xs font-medium text-orange-600">Admissions 2025</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-primary">24th Year</span>
            </div>
          </div>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image section */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={caseStudy.coverImage}
                alt={`${caseStudy.title} case study`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Content section */}
          <div className="order-1 lg:order-2 space-y-6">
            
            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              {caseStudy.title}
            </h3>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {caseStudy.summary}
            </p>
            
            {/* Services */}
            <div className="flex flex-wrap gap-3">
              {caseStudy.services.map((service, index) => (
                <span 
                  key={service}
                  className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg"
                >
                  {service}
                </span>
              ))}
            </div>
            
            {/* Metrics */}
            {caseStudy.metrics && (
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(caseStudy.metrics).map(([key, value]) => (
                  <div 
                    key={key}
                    className="border-l-4 border-primary pl-4"
                  >
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                      {key}
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="mt-12 border-b border-gray-200"></div>
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
        <div className="space-y-20">
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