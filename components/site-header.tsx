'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-lg shadow-gray-900/5' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100/60'
      )}
    >
      <div className="container flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src="/Logo_white_bg.png"
              alt="Truly Grit"
              width={140}
              height={45}
              className="h-9 w-auto filter brightness-0 transition-all duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg',
                pathname === item.href
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              )}
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-orange-500 rounded-xl hover:from-primary/90 hover:to-orange-500/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 w-10 p-0 hover:bg-gray-100 transition-colors duration-200"
              >
                <Menu className="h-5 w-5 text-gray-700" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/Logo_white_bg.png"
                      alt="Truly Grit"
                      width={120}
                      height={40}
                      className="h-8 w-auto filter brightness-0"
                    />
                  </Link>
                </div>
                
                <div className="flex-1 px-6 py-8">
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-200',
                          pathname === item.href
                            ? 'text-primary bg-primary/10 border border-primary/20'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="p-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-orange-500 rounded-xl hover:from-primary/90 hover:to-orange-500/90 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
