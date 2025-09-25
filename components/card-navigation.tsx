'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Home, 
  Briefcase, 
  Settings, 
  Users, 
  MessageCircle, 
  DollarSign,
  FileText,
  HelpCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target
} from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const navigationCards = [
  {
    title: 'Home',
    description: 'Discover our marketing solutions and see how we can transform your business.',
    href: '/',
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    stats: '300% avg growth',
    featured: true,
  },
  {
    title: 'Our Work',
    description: 'Explore our portfolio of successful projects and real client results.',
    href: '/work',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    stats: '50+ projects',
    featured: false,
  },
  {
    title: 'Services',
    description: 'Comprehensive marketing services tailored to your business needs.',
    href: '/services',
    icon: Settings,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    stats: '6 core services',
    featured: false,
  },
  {
    title: 'About',
    description: 'Meet our team and learn about our mission to help businesses grow.',
    href: '/about',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    stats: 'Expert team',
    featured: false,
  },
  {
    title: 'Pricing',
    description: 'Transparent pricing plans designed to fit your budget and goals.',
    href: '/pricing',
    icon: DollarSign,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    stats: 'Flexible plans',
    featured: false,
  },
  {
    title: 'Contact',
    description: 'Ready to start your journey? Get in touch for a free consultation.',
    href: '/contact',
    icon: MessageCircle,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    stats: 'Free consultation',
    featured: true,
  },
]

const additionalCards = [
  {
    title: 'Blog',
    description: 'Marketing insights, tips, and industry trends.',
    href: '/blog',
    icon: FileText,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    stats: 'Latest insights',
    featured: false,
  },
  {
    title: 'FAQ',
    description: 'Find answers to common questions about our services.',
    href: '/faq',
    icon: HelpCircle,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
    stats: 'Quick answers',
    featured: false,
  },
]

interface NavigationCardProps {
  card: typeof navigationCards[0]
  index: number
}

function NavigationCard({ card, index }: NavigationCardProps) {
  const IconComponent = card.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg border-0 shadow-md group-hover:shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-lg ${card.bgColor} group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className={`h-6 w-6 ${card.textColor}`} />
            </div>
            {card.featured && (
              <div className="flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                <Star className="h-3 w-3" />
                Featured
              </div>
            )}
          </div>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {card.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {card.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span>{card.stats}</span>
            </div>
            <Button asChild variant="ghost" size="sm" className="group/btn">
              <Link href={card.href}>
                Explore
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function CardNavigation() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Navigate Your Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our comprehensive marketing solutions and discover how we can help transform your business.
          </p>
        </motion.div>

        {/* Main Navigation Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {navigationCards.map((card, index) => (
            <NavigationCard key={card.href} card={card} index={index} />
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          className="border-t border-border pt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Additional Resources
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {additionalCards.map((card, index) => (
              <NavigationCard key={card.href} card={card} index={index + 6} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary to-orange-500 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Choose your path and let's transform your business together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/work">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
