'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, TrendingUp, GraduationCap, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'

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
      {/* Compact professional showcase */}
      <div className="relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        
        {/* Header with client info */}
        <div className="px-8 py-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{caseStudy.client}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-400">{caseStudy.year}</span>
            </div>
            <div className="flex items-center gap-3">
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
        </div>
        
        {/* Main content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Image section */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                <Image
                  src={caseStudy.coverImage}
                  alt={`${caseStudy.title} case study`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Content section */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Title */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {caseStudy.summary}
                </p>
              </div>
              
              {/* Services */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.services.map((service, index) => (
                  <span 
                    key={service}
                    className="px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
              
              {/* Metrics */}
              {caseStudy.metrics && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(caseStudy.metrics).map(([key, value]) => (
                    <div 
                      key={key}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {key}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* CTA */}
              <div className="pt-2">
                <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Link href={`/work/${caseStudy.slug}`}>
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
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
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Compact header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        {/* Case studies */}
        <div className="space-y-8">
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