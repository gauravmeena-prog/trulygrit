'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getIcon } from '@/lib/icons'

interface Feature {
  iconName: string
  title: string
  description: string
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
    <section className="py-24 sm:py-32">
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
        
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = getIcon(feature.iconName)
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <IconComponent className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-base font-semibold leading-7 text-foreground">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col">
                      <CardDescription className="flex-1 text-base leading-7 text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
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
