'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
  Target,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const menuItems = [
  {
    title: 'Home',
    description: 'Discover our marketing solutions',
    href: '/',
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    featured: true,
  },
  {
    title: 'Our Work',
    description: 'Explore our portfolio',
    href: '/work',
    icon: Briefcase,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    featured: false,
  },
  {
    title: 'Services',
    description: 'Comprehensive marketing services',
    href: '/services',
    icon: Settings,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    featured: false,
  },
  {
    title: 'About',
    description: 'Meet our expert team',
    href: '/about',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    featured: false,
  },
  {
    title: 'Pricing',
    description: 'Transparent pricing plans',
    href: '/pricing',
    icon: DollarSign,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    featured: false,
  },
  {
    title: 'Contact',
    description: 'Get in touch with us',
    href: '/contact',
    icon: MessageCircle,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    featured: true,
  },
]

const additionalItems = [
  {
    title: 'Blog',
    description: 'Marketing insights and tips',
    href: '/blog',
    icon: FileText,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
  },
  {
    title: 'FAQ',
    description: 'Common questions answered',
    href: '/faq',
    icon: HelpCircle,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
  },
  {
    title: 'Navigation',
    description: 'Explore all sections',
    href: '/navigation',
    icon: Target,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-700',
  },
]

interface MenuItemProps {
  item: typeof menuItems[0]
  index: number
  isOpen: boolean
}

function MenuItem({ item, index, isOpen }: MenuItemProps) {
  const IconComponent = item.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ 
        opacity: isOpen ? 1 : 0, 
        y: isOpen ? 0 : 20, 
        scale: isOpen ? 1 : 0.9 
      }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg border-0 shadow-md group-hover:shadow-xl overflow-hidden">
        <Link href={item.href} className="block h-full">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className={`h-6 w-6 ${item.textColor}`} />
              </div>
              {item.featured && (
                <div className="flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                  <Star className="h-3 w-3" />
                  Featured
                </div>
              )}
            </div>
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
              {item.title}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              {item.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>Learn more</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  )
}

interface StaggeredMenuProps {
  className?: string
}

export function StaggeredMenu({ className = '' }: StaggeredMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [showAdditional, setShowAdditional] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setShowAdditional(false)
    }
  }

  const toggleAdditional = () => {
    setShowAdditional(!showAdditional)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Menu Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-6 right-6 z-50"
      >
        <Button
          onClick={toggleMenu}
          size="lg"
          className="rounded-full shadow-lg bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white border-0"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground">Explore</h2>
                  <Button
                    onClick={toggleMenu}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground">
                  Navigate through our services and resources
                </p>
              </motion.div>

              {/* Main Menu Items */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="space-y-4 mb-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Main Sections</h3>
                <div className="grid grid-cols-1 gap-4">
                  {menuItems.map((item, index) => (
                    <MenuItem key={item.href} item={item} index={index} isOpen={isOpen} />
                  ))}
                </div>
              </motion.div>

              {/* Additional Resources Toggle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mb-6"
              >
                <Button
                  onClick={toggleAdditional}
                  variant="outline"
                  className="w-full justify-between"
                >
                  <span>Additional Resources</span>
                  <motion.div
                    animate={{ rotate: showAdditional ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>

              {/* Additional Resources */}
              <AnimatePresence>
                {showAdditional && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 mb-8"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">More Resources</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {additionalItems.map((item, index) => (
                        <MenuItem 
                          key={item.href} 
                          item={item} 
                          index={index + 6} 
                          isOpen={showAdditional} 
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="bg-gradient-to-r from-primary to-orange-500 rounded-2xl p-6 text-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-5 w-5" />
                  <h3 className="text-lg font-bold">Ready to Get Started?</h3>
                </div>
                <p className="text-sm opacity-90 mb-4">
                  Choose your path and let's transform your business together.
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link href="/work">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
