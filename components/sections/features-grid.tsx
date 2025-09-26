'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Crown, Target, Rocket, Eye } from 'lucide-react'

interface Feature {
  iconName: string
  title: string
  description: string
  benefit: string
}

interface FeaturesGridProps {
  title: string
  description: string
  features: Feature[]
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'crown':
      return Crown
    case 'target':
      return Target
    case 'rocket':
      return Rocket
    case 'eye':
      return Eye
    default:
      return Crown
  }
}

export function FeaturesGrid({ title, description, features }: FeaturesGridProps) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
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
            <span className="font-semibold text-gray-900">Founded June 2025.</span> We build revenue engines that deliver results through speed, measurement, and proven strategies.
          </motion.p>
        </div>
        
        {/* Professional features layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((feature, index) => {
            const IconComponent = getIcon(feature.iconName)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Simple, clean layout */}
                <div className="flex gap-6">
                  
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="text-sm font-medium text-primary">
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}