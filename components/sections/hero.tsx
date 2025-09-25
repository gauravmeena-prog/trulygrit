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
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32 lg:py-40">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Professional business environment showcasing growth and innovation"
            fill
            className="object-cover opacity-[0.03]"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
      )}
      
      {/* Professional background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
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
                  className="h-16 w-auto sm:h-20 filter brightness-0"
                  priority
                />
              </div>
            ) : (
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance leading-tight">
                <motion.span 
                  className="block text-foreground/90"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {title}
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {subtitle}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary to-orange-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  />
                </motion.span>
              </h1>
            )}
          </motion.div>
          
          <motion.p
            className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto text-balance font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {description}
          </motion.p>

          {/* Enhanced Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.div 
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm border border-primary/10"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-foreground">5.0 Rating</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm border border-green-500/10"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-semibold text-foreground">50+ Happy Clients</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-sm border border-primary/10"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">300% Avg Growth</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-16 flex items-center justify-center gap-x-6 flex-wrap gap-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-white font-semibold px-8 py-6 text-lg rounded-xl border-0">
                <Link href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild variant="outline" size="lg" className="group border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 font-semibold px-8 py-6 text-lg rounded-xl bg-white/80 backdrop-blur-sm">
                <Link href={secondaryCta.href}>
                  <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  {secondaryCta.text}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Urgency element */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-orange-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ⚡
              </motion.div>
              <span className="text-sm font-medium text-foreground">
                Limited spots available for Q1 2024 • Book your strategy call today
              </span>
            </div>
          </motion.div>

          {/* Professional badge */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/10">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-foreground">Trusted by 50+ Growing Businesses</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-orange-500 to-primary opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      {/* Additional subtle gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-2xl">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-orange-500/20 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
