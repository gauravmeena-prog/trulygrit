'use client'

import { motion } from 'framer-motion'
import { LiquidEtherBackground } from './LiquidEtherBackground'

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <LiquidEtherBackground />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-28 text-center">
        <motion.h1 
          className="text-[var(--fs-h1)] leading-tight font-heading font-semibold tracking-tightish text-gray-900 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-gray-900/90">
            Every Campaign We Launch
          </span>
          <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold">
            Tells a Story
          </span>
          <span className="block text-gray-900/80">
            — and That Story Ends in Results.
          </span>
        </motion.h1>
        
        {/* Decorative underline */}
        <motion.div 
          className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
        
        <motion.p 
          className="text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          We don't just create marketing campaigns. We craft narratives that connect, inspire, and drive your business forward with measurable impact.
        </motion.p>
      </div>
    </section>
  );
}
