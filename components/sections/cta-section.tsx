'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: 'default' | 'gradient'
}

export function CTASection({ 
  title, 
  description, 
  primaryCta, 
  secondaryCta,
  variant = 'default' 
}: CTASectionProps) {
  return (
    <section 
      className={`py-24 sm:py-32 ${
        variant === 'gradient' 
          ? 'bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10' 
          : 'bg-muted/50'
      }`}
    >
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
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="group">
              <Link href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            {secondaryCta && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCta.href}>
                  {secondaryCta.text}
                </Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
