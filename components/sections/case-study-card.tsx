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
      {/* Symmetric layout */}
      <div className="relative bg-white py-16">
        
        {/* Symmetric content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={caseStudy.coverImage}
                alt={`${caseStudy.title} case study`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Client badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">{caseStudy.client}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{caseStudy.year}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {caseStudy.title}
            </h3>
            
            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {caseStudy.summary}
            </p>
            
            {/* Service tags */}
            <div className="flex flex-wrap gap-3">
              {caseStudy.services.map((service, index) => (
                <span 
                  key={service}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  {service}
                </span>
              ))}
            </div>
            
            {/* Key metrics */}
            {caseStudy.metrics && (
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                {Object.entries(caseStudy.metrics).map(([key, value]) => (
                  <motion.div
                    key={key}
                    className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-xl p-4 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      {key}
                    </div>
                    <div className="text-xl font-bold text-primary flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-orange-500" /> {value}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="mt-16 border-b border-gray-200"></div>
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