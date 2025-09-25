'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { getIcon } from '@/lib/icons'
import { CheckCircle } from 'lucide-react'

interface ProcessStep {
  iconName: string
  title: string
  description: string
  duration: string
  deliverables?: string[]
}

interface ProcessTimelineProps {
  title: string
  description: string
  steps: ProcessStep[]
}

export function ProcessTimeline({ title, description, steps }: ProcessTimelineProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Floating background orbs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-primary/8 to-orange-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-tl from-orange-500/8 to-primary/8 rounded-full blur-3xl"></div>
      
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
              Our Proven 4-Step
            </span>
            <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
              Growth System
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
            We don't just create marketing campaigns—we build complete growth systems that transform your business from startup to market leader.
          </motion.p>
        </motion.div>
        
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = getIcon(step.iconName)
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden p-8">
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
                      {/* Step number and icon */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-orange-500 to-primary group-hover:scale-110 transition-all duration-500 shadow-lg">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold leading-tight text-gray-900 group-hover:text-primary transition-colors duration-300">
                              {step.title}
                            </h3>
                            <span className="text-sm font-semibold text-primary bg-gradient-to-r from-primary/10 to-orange-500/10 px-3 py-1.5 rounded-lg border border-primary/20">
                              {step.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg leading-relaxed text-gray-600 font-medium mb-6">
                        {step.description}
                      </p>
                      
                      {step.deliverables && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Key Deliverables</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <motion.div 
                                key={deliverableIndex} 
                                className="flex items-center gap-3 text-sm font-medium text-gray-700 bg-gray-50/80 px-3 py-2 rounded-lg"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: deliverableIndex * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0"></div>
                                <span>{deliverable}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
