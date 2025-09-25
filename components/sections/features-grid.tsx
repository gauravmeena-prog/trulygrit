'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

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
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      {/* Subtle floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-orange-500/5 to-primary/5 rounded-full blur-3xl"></div>
      
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
            <span className="font-semibold text-gray-900">Founded June 2025.</span> We build revenue engines that deliver results through speed, measurement, and proven strategies.
          </motion.p>
        </motion.div>
        
               <motion.div
                 className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24"
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
               >
                 {/* Unique floating elements layout */}
                 <div className="relative">
                   {/* Connection lines */}
                   <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block"></div>
                   
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                     {features.map((feature, index) => {
                       const IconComponent = getIcon(feature.iconName)
                       const isEven = index % 2 === 0
                       
                       return (
                         <motion.div
                           key={index}
                           variants={itemVariants}
                           className={`relative flex items-start gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                         >
                           {/* Floating icon with connection line */}
                           <div className="relative flex-shrink-0">
                             <motion.div 
                               className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary via-orange-500 to-primary shadow-2xl group-hover:shadow-primary/25 transition-all duration-500"
                               whileHover={{ scale: 1.1, rotate: 5 }}
                             >
                               <IconComponent className="h-9 w-9 text-white" />
                               
                               {/* Pulsing ring */}
                               <motion.div 
                                 className="absolute inset-0 rounded-full border-2 border-primary/30"
                                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                 transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                               />
                               
                               {/* Floating particles */}
                               <motion.div 
                                 className="absolute -top-2 -right-2 h-3 w-3 bg-orange-400 rounded-full opacity-60"
                                 animate={{ y: [-5, 5, -5], opacity: [0.6, 1, 0.6] }}
                                 transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                               />
                               <motion.div 
                                 className="absolute -bottom-2 -left-2 h-2 w-2 bg-primary rounded-full opacity-40"
                                 animate={{ y: [5, -5, 5], opacity: [0.4, 0.8, 0.4] }}
                                 transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                               />
                             </motion.div>
                             
                             {/* Connection line to content */}
                             <div className={`absolute top-10 w-16 h-0.5 bg-gradient-to-r from-primary to-transparent ${isEven ? 'right-0' : 'left-0'} hidden lg:block`}></div>
                           </div>
                           
                           {/* Content area */}
                           <div className="flex-1 min-w-0">
                             <motion.div 
                               className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 group"
                               whileHover={{ y: -8, scale: 1.02 }}
                             >
                               {/* Floating background orbs */}
                               <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                               <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-orange-500/10 to-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
                               
                               <div className="relative z-10">
                                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                                   {feature.title}
                                 </h3>
                                 
                                 <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                                   {feature.description}
                                 </p>
                                 
                                 {feature.benefit && (
                                   <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-2xl border border-primary/20 backdrop-blur-sm">
                                     <motion.div 
                                       className="h-3 w-3 bg-gradient-to-r from-primary to-orange-500 rounded-full"
                                       animate={{ scale: [1, 1.2, 1] }}
                                       transition={{ duration: 2, repeat: Infinity }}
                                     />
                                     <span className="text-sm font-bold text-primary tracking-wide uppercase">
                                       {feature.benefit}
                                     </span>
                                   </div>
                                 )}
                               </div>
                               
                               {/* Decorative elements */}
                               <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-60"></div>
                               <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-500/40 rounded-full opacity-80"></div>
                             </motion.div>
                           </div>
                         </motion.div>
                       )
                     })}
                   </div>
                   
                   {/* Central connecting element */}
                   <motion.div 
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-primary to-orange-500 rounded-full shadow-lg hidden lg:block"
                     animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                     transition={{ duration: 3, repeat: Infinity }}
                   />
                 </div>
               </motion.div>
      </div>
    </section>
  )
}
