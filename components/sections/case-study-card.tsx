'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Calendar, Sparkles, TrendingUp, Award } from 'lucide-react'

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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Unique transformation showcase */}
      <div className="relative bg-gradient-to-br from-white via-gray-50/30 to-white rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4">
        
        {/* Floating transformation elements */}
        <motion.div 
          className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-full flex items-center justify-center shadow-lg"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        >
          <Building2 className="h-8 w-8 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute -top-4 -right-4 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg"
          animate={{ y: [-5, 5, -5], rotate: [0, 180, 360] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <Sparkles className="h-6 w-6 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-6 -right-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        >
          <Award className="h-5 w-5 text-white" />
        </motion.div>
        
        {/* Transformation timeline */}
        <div className="relative z-10">
          {/* Before/After transformation visual */}
          <div className="relative mb-8">
            <motion.div 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={caseStudy.coverImage}
                alt={`${caseStudy.title} transformation showcase`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              
              {/* Transformation overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              {/* Before/After labels */}
              <div className="absolute top-4 left-4 opacity-0 hover:opacity-100 transition-all duration-500 transform translate-y-4 hover:translate-y-0">
                <div className="flex gap-3">
                  <div className="bg-red-500/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Before
                    </div>
                    <div className="text-sm font-bold text-white">DA-IICT</div>
                  </div>
                  <div className="bg-green-500/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      After
                    </div>
                    <div className="text-sm font-bold text-white">DAU</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Transformation arrow */}
            <motion.div 
              className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ x: [-5, 5, -5], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="h-8 w-8 text-white" />
            </motion.div>
          </div>
          
          {/* Client badge with year */}
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">{caseStudy.client}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{caseStudy.year}</span>
            </div>
            
            <motion.div 
              className="flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Calendar className="h-4 w-4 text-orange-600" />
              <span className="text-xs font-bold text-orange-600">Transformation</span>
            </motion.div>
          </div>
          
          {/* Title with transformation emphasis */}
          <motion.h3 
            className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              {caseStudy.title}
            </span>
          </motion.h3>
          
          {/* Description with transformation story */}
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {caseStudy.summary}
          </motion.p>
          
          {/* Services with transformation tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {caseStudy.services.map((service, index) => (
              <motion.span 
                key={service}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {service}
              </motion.span>
            ))}
          </div>
          
          {/* Transformation metrics showcase */}
          {caseStudy.metrics && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {Object.entries(caseStudy.metrics).map(([key, value], index) => (
                <motion.div 
                  key={key}
                  className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl p-4 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
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
          
          {/* Transformation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between"
          >
            <Button asChild variant="outline" className="group/btn border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <Link href={`/work/${caseStudy.slug}`}>
                View Full Transformation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
            
            <motion.div 
              className="text-sm text-gray-500 font-medium"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Complete Brand Evolution
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-orange-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
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
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      {/* Floating background orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/8 to-orange-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tl from-orange-500/8 to-primary/8 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
              Real Clients
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
        </motion.div>
        
        {/* Unique transformation showcase layout */}
        <div className="mx-auto mt-16 max-w-6xl">
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
        
        {/* Floating sparkles */}
        <div className="absolute top-1/3 right-1/3">
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Sparkles className="h-6 w-6 text-primary/40" />
          </motion.div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/3">
          <motion.div
            animate={{ 
              y: [10, -10, 10],
              rotate: [360, 180, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <Sparkles className="h-4 w-4 text-orange-500/40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}