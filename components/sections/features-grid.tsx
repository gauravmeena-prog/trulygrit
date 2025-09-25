'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { getIcon } from '@/lib/icons'

interface Feature {
  iconName: string
  title: string
  description: string
  benefit?: string
}

interface FeaturesGridProps {
  title: string
  description: string
  features: Feature[]
}

export function FeaturesGrid({ title, description, features }: FeaturesGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative py-24 sm:py-32 bg-gray-50/50">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
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
              Markets forget noise.
            </span>
            <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
              They remember results.
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
            <span className="font-semibold text-gray-900">Founded on 18 June 2025,</span> Truly Grit builds revenue engines the hard way—by shipping fast, measuring everything, and letting proof speak.
          </motion.p>
        </motion.div>
        
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
            {features.map((feature, index) => {
              const IconComponent = getIcon(feature.iconName)
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  <Card className="relative h-full bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group rounded-xl overflow-hidden">
                    {/* Professional subtle accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.5)_50%,transparent_65%)]"></div>
                    </div>
                    
                    <div className="relative z-10 p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 group-hover:bg-primary/10 transition-all duration-300 border border-gray-100">
                          <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors duration-300" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg font-semibold leading-tight text-gray-900 mt-4">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 flex flex-1 flex-col space-y-4">
                        <CardDescription className="flex-1 text-base leading-relaxed text-gray-600">
                          {feature.description}
                        </CardDescription>
                        {feature.benefit && (
                          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-2 rounded-lg border border-primary/10">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                            <span>{feature.benefit}</span>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
