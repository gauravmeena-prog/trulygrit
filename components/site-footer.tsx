import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

import { siteConfig } from '@/lib/site-config'

const footerNavigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Navigation', href: '/navigation' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Brand Strategy', href: '/services#brand-strategy' },
    { name: 'Digital Marketing', href: '/services#digital-marketing' },
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Content Creation', href: '/services#content-creation' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    {
      name: 'Twitter',
      href: siteConfig.links.twitter,
      icon: Twitter,
    },
    {
      name: 'GitHub',
      href: siteConfig.links.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: siteConfig.links.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: siteConfig.links.instagram,
      icon: Instagram,
    },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-foreground">Contact</h3>
              <div className="mt-6 space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.email}
                  </Link>
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  <Link
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </Link>
                </p>
                <address className="text-sm leading-6 text-muted-foreground not-italic">
                  {siteConfig.contact.address}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center space-y-2 text-center md:order-1 md:mt-0 md:flex-row md:space-x-2 md:space-y-0">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()}
            </p>
            <Image
              src="/Logo_white_bg.png"
              alt="Truly Grit"
              width={80}
              height={27}
              className="h-4 w-auto filter brightness-0"
            />
            <p className="text-xs leading-5 text-muted-foreground">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
