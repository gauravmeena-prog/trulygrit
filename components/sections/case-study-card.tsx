'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
      whileHover={{ y: -5 }}
      className={`group ${featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 group-hover:shadow-xl">
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
          
          <Button asChild variant="ghost" className="group/btn p-0 h-auto font-medium">
            <Link href={`/work/${caseStudy.slug}`}>
              View Case Study
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
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
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {description}
          </p>
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
