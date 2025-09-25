'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  useLogo?: boolean
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
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
    <section className="relative w-full bg-white py-24 sm:py-32 lg:py-40">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
          >
            <h1 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl text-left lg:text-left text-center lg:text-left max-w-4xl">
              Truly Grit isn't just a name.
              <br />
              <span className="block mt-2">It's our way of building brands with courage and conviction.</span>
            </h1>
          </motion.div>
          
          {/* Founder Note */}
          <motion.div
            className="mt-16 lg:mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-right">
              <p className="text-sm text-gray-500 leading-relaxed">
                A note from our Founder, Gaurav Meena
                <br />
                <span className="underline cursor-pointer hover:text-gray-700 transition-colors">
                  Read more ➝
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
