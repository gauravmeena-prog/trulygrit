'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

export function StorytellingSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-gray-50/50 to-white py-16 sm:py-20 lg:py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl italic tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="block text-foreground/90">
              Truly Grit isn't just a name.
            </span>
            <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold">
              It's a mission to create brands with courage.
            </span>
          </motion.h2>
          
          {/* Decorative underline */}
          <motion.div
            className="mx-auto mt-8 h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          />
          
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/5 to-orange-500/5 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
