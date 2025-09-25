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
        
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-orange-500 to-primary opacity-20 hidden lg:block"></div>
            
            <div className="space-y-16">
              {steps.map((step, index) => {
                const IconComponent = getIcon(step.iconName)
                return (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Step indicator */}
                    <div className="relative flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-gray-200 shadow-lg relative z-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-500">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-primary/20"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                            {step.title}
                          </h3>
                          <span className="flex-shrink-0 ml-4 px-4 py-2 bg-gradient-to-r from-primary to-orange-500 text-white text-sm font-semibold rounded-full shadow-md">
                            {step.duration}
                          </span>
                        </div>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        
                        {step.deliverables && (
                          <div className="border-t border-gray-100 pt-6">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center">
                              <div className="h-1 w-8 bg-gradient-to-r from-primary to-orange-500 mr-3"></div>
                              Key Deliverables
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {step.deliverables.map((deliverable, deliverableIndex) => (
                                <motion.div 
                                  key={deliverableIndex}
                                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200"
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.4, delay: deliverableIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full"></div>
                                  <span className="text-sm font-medium text-gray-700">{deliverable}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
