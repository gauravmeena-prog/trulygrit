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
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-white via-gray-50/30 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
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
                  <Card className="relative h-full overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group rounded-2xl">
                    {/* Floating background elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-orange-500/10 to-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
                    
                    {/* Gradient background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Subtle border gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-orange-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                      <div className="w-full h-full bg-white rounded-2xl"></div>
                    </div>
                    
                    <div className="relative z-10 p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-orange-500 to-primary group-hover:scale-110 transition-all duration-500 shadow-lg">
                          <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl font-bold leading-tight text-gray-900 group-hover:text-primary transition-colors duration-300 mt-4">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 flex flex-1 flex-col space-y-6">
                        <CardDescription className="flex-1 text-lg leading-relaxed text-gray-600 font-medium">
                          {feature.description}
                        </CardDescription>
                        {feature.benefit && (
                          <div className="inline-flex items-center gap-3 text-sm font-semibold text-primary bg-gradient-to-r from-primary/10 to-orange-500/10 px-4 py-3 rounded-xl border border-primary/20">
                            <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
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
