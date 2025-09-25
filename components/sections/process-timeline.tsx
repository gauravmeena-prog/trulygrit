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
    <section className="py-24 sm:py-32 bg-muted/50">
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
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = getIcon(step.iconName)
              return (
                <motion.div
                  key={index}
                  className="relative flex gap-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {index !== steps.length - 1 && (
                    <div className="absolute left-5 top-14 -bottom-8 w-px bg-border" />
                  )}
                  
                  <div className="relative flex h-10 w-10 flex-none items-center justify-center bg-background">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-auto">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold leading-6 text-foreground">
                        {step.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-base leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                    
                    {step.deliverables && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Deliverables:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
