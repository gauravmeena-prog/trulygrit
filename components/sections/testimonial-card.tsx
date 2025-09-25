'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, Star, MessageCircle, ArrowRight, Sparkles } from 'lucide-react'

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    company: string
    image: string
  }
  rating: number
  results?: string[]
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Floating conversation bubble */}
      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
        {/* Quote icon with floating animation */}
        <motion.div 
          className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-full flex items-center justify-center shadow-lg"
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          <Quote className="h-6 w-6 text-white" />
        </motion.div>
        
        {/* Floating particles around the bubble */}
        <motion.div 
          className="absolute -top-2 -right-2 w-3 h-3 bg-orange-400 rounded-full opacity-60"
          animate={{ y: [-3, 3, -3], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div 
          className="absolute -bottom-4 -left-4 w-2 h-2 bg-primary rounded-full opacity-40"
          animate={{ y: [3, -3, 3], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.7 }}
        />
        
        {/* Quote content */}
        <div className="relative z-10">
          {/* Rating stars with animation */}
          <motion.div 
            className="flex mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <Star
                  className={`h-5 w-5 ${
                    i < testimonial.rating
                      ? 'text-orange-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Quote text with typewriter effect */}
          <motion.blockquote 
            className="text-xl text-gray-800 leading-relaxed font-medium mb-8 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-4xl absolute -top-2 -left-2">"</span>
            {testimonial.content}
            <span className="text-primary text-4xl absolute -bottom-4 -right-2">"</span>
          </motion.blockquote>
          
          {/* Author info with floating elements */}
          <div className="flex items-center gap-6">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <Image
                  src={testimonial.author.image}
                  alt={`${testimonial.author.name} profile picture`}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                />
                {/* Floating ring around profile */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
            
            <div className="flex-1">
              <motion.div 
                className="font-bold text-gray-900 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                {testimonial.author.name}
              </motion.div>
              <motion.div 
                className="text-primary font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {testimonial.author.role}
              </motion.div>
              <motion.div 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                {testimonial.author.company}
              </motion.div>
            </div>
            
            {/* Floating arrow */}
            <motion.div
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-full shadow-lg"
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          
          {/* Results with floating cards */}
          {testimonial.results && (
            <motion.div 
              className="mt-8 pt-6 border-t border-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Key Results
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {testimonial.results.map((result, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-orange-500/10 text-primary font-semibold text-sm rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {result}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

interface TestimonialsProps {
  title: string
  description: string
  testimonials: Testimonial[]
}

export function Testimonials({ title, description, testimonials }: TestimonialsProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      {/* Floating background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-primary/8 to-orange-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-orange-500/8 to-primary/8 rounded-full blur-3xl"></div>
      
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
              What Our Clients
            </span>
            <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
              Actually Say
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
            Hear directly from our client about their experience working with Truly Grit. Real feedback from a real partnership that delivered real results.
          </motion.p>
        </motion.div>
        
        {/* Unique testimonial layout - single floating bubble */}
        <div className="mx-auto mt-16 max-w-4xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} />
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