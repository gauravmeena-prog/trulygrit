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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Modern transformation showcase - no cards */}
      <div className="relative overflow-hidden">
        
        {/* Animated background with floating elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/30 rounded-none"></div>
        
        
        {/* Main content area */}
        <div className="relative z-10 py-16 px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Header section with client info */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
              <div className="flex-1">
                <motion.div 
                  className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full border border-primary/20 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">{caseStudy.client}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{caseStudy.year}</span>
                </motion.div>
                
                <motion.h2 
                  className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
                    {caseStudy.title}
                  </span>
                </motion.h2>
                
                <motion.div 
                  className="flex items-center gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                    <GraduationCap className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-bold text-orange-600">Admissions 2025 Managed</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold text-primary">24th Anniversary</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Animated image showcase */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  {/* Main image container with advanced animations */}
                  <motion.div 
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={caseStudy.coverImage}
                      alt={`${caseStudy.title} transformation showcase`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Animated overlay effects */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Before/After transformation labels */}
                    <motion.div 
                      className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <div className="flex gap-4">
                        <motion.div 
                          className="bg-red-500/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                            Before
                          </div>
                          <div className="text-lg font-bold text-white">DA-IICT</div>
                        </motion.div>
                        <motion.div 
                          className="bg-green-500/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                            After
                          </div>
                          <div className="text-lg font-bold text-white">DAU</div>
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* Floating admission success indicator */}
                    <motion.div 
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <div className="bg-green-500/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-white" />
                          <div>
                            <div className="text-xs font-bold text-white uppercase tracking-wider">
                              Admissions 2025
                            </div>
                            <div className="text-sm font-bold text-white">All Courses</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                </div>
              </motion.div>
              
              {/* Content section */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                
                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed font-medium">
                  {caseStudy.summary}
                </p>
                
                {/* Services with modern tags */}
                <div className="flex flex-wrap gap-4">
                  {caseStudy.services.map((service, index) => (
                    <motion.span 
                      key={service}
                      className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
                
                {/* Transformation metrics */}
                {caseStudy.metrics && (
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(caseStudy.metrics).map(([key, value], index) => (
                      <motion.div 
                        key={key}
                        className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-3xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                            {key}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          {value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {/* CTA */}
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Button asChild variant="outline" className="group/btn border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-lg">
                    <Link href={`/work/${caseStudy.slug}`}>
                      View Complete Transformation
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-orange-500/5 to-primary/5 rounded-full blur-3xl opacity-50"></div>
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
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="block text-gray-900/90">
              Real Results from
            </span>
            <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
              Real Clients
            </span>
          </motion.h2>
          
          <motion.div
            className="mt-8 mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto h-1 w-32 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
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
        </motion.div>
        
        {/* Unique transformation showcase layout */}
        <div className="space-y-32">
          {displayedCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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