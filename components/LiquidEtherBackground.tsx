'use client'

import { motion } from 'framer-motion'

export function LiquidEtherBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main liquid ether shapes */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-orange-500/15 to-transparent blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-bl from-orange-500/20 via-primary/10 to-transparent blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/15 via-orange-500/20 to-transparent blur-2xl"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 270, 540],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-gradient-to-tl from-orange-500/25 via-primary/15 to-transparent blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
          scale: [1, 0.9, 1],
          rotate: [0, -270, -540],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15,
        }}
      />
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-2 h-2 bg-primary/40 rounded-full"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
          opacity: [0.4, 0.8, 0.3, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-orange-500/50 rounded-full"
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 40, -20, 0],
          opacity: [0.3, 0.7, 0.2, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-primary/35 rounded-full"
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -60, 30, 0],
          opacity: [0.2, 0.6, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
      />
      
      {/* Subtle wave patterns */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 via-transparent to-transparent"
        animate={{
          scaleX: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/8 via-transparent to-transparent rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  )
}
