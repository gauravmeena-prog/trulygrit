'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
    revenue?: string
    leads?: string
    growth?: string
    sales?: string
    conversion?: string
    traffic?: string
    timeline?: string
  }
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  featured?: boolean
}

export function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group ${featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="relative h-full overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group rounded-2xl">
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-orange-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating background elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/8 to-orange-500/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-orange-500/8 to-primary/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
        
        {/* Modern border gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-orange-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
          <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-2xl"></div>
        </div>
        
        <div className="relative z-10">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={caseStudy.coverImage}
            alt={`${caseStudy.title} case study cover image showing project results for ${caseStudy.client}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Ss6RtEyX9WdQTBfVJUkGh4kyBhFcFCc8BQP0/z7gPcL4bfQr3aBcGbCXR8DmOZgOx9PvnT/ZbSJmUlpWFr9Y3B3m5chsrkOW+uo7cGAqnr7axG2v4HU0VJy0kd5ESf//Z"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-1">
              {caseStudy.services.slice(0, 3).map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-white/20 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="line-clamp-2 text-xl font-bold group-hover:text-primary transition-colors">
                {caseStudy.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">{caseStudy.client}</span>
                <span>•</span>
                <span>{caseStudy.year}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CardDescription className="line-clamp-3 text-base">
            {caseStudy.summary}
          </CardDescription>
          
          {caseStudy.metrics && (
            <div className="grid grid-cols-2 gap-3 pt-2">
              {Object.entries(caseStudy.metrics).slice(0, 4).map(([key, value]) => (
                <div key={key} className="text-center p-2 bg-primary/5 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-1">
                    <TrendingUp className="h-3 w-3" />
                    <span className="capitalize">{key}</span>
                  </div>
                  <div className="font-bold text-sm text-primary">{value}</div>
                </div>
              ))}
            </div>
          )}
          
          <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
            <Link href={`/work/${caseStudy.slug}`}>
              View Case Study
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
        </div>
      </Card>
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
            Don't just take our word for it—see the actual results we've delivered for businesses just like yours. These aren't hypothetical case studies—they're real transformations with real numbers.
          </motion.p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {displayedCaseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              featured={index === 0 && !showAll}
            />
          ))}
        </div>
        
        {!showAll && caseStudies.length > 3 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" variant="outline">
              <Link href="/work">
                View All Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
