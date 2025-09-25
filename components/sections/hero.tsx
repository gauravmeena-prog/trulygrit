'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, CheckCircle, TrendingUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  useLogo?: boolean
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export function Hero({
  title,
  subtitle,
  description,
  useLogo = false,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Professional business environment showcasing growth and innovation"
            fill
            className="object-cover opacity-5"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
      )}
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
          >
            {useLogo ? (
              <div className="flex flex-col items-center space-y-4">
                <span className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  {title}
                </span>
                <Image
                  src="/Logo_white_bg.png"
                  alt="Truly Grit"
                  width={300}
                  height={100}
                  className="h-16 w-auto sm:h-20"
                  priority
                />
              </div>
            ) : (
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {title}
                </motion.span>
                <motion.span 
                  className="block text-primary bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {subtitle}
                </motion.span>
              </h1>
            )}
          </motion.div>
          
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {description}
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-medium">5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>50+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>300% Avg Growth</span>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group border-2 hover:bg-primary/10 transition-all duration-300">
              <Link href={secondaryCta.href}>
                <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                {secondaryCta.text}
              </Link>
            </Button>
          </motion.div>

          {/* Urgency element */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-sm text-muted-foreground">
              ⚡ Limited spots available for Q1 2024 • Book your strategy call today
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
