'use client'

import { siteConfig } from '@/lib/site-config'

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/Logo_white_bg.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'CA',
      addressLocality: 'San Francisco',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'hello@trulygrithq.com',
    },
    sameAs: [
      'https://twitter.com/trulygrithq',
      'https://linkedin.com/company/truly-grit',
      'https://instagram.com/trulygrithq',
    ],
    founder: {
      '@type': 'Person',
      name: 'Sarah Johnson',
    },
    numberOfEmployees: '25',
    foundingDate: '2020',
    areaServed: 'Worldwide',
    serviceType: [
      'Digital Marketing',
      'Brand Strategy',
      'Web Design',
      'SEO Optimization',
      'Content Marketing',
      'Social Media Marketing',
      'Paid Advertising',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Marketing Services',
    description: 'Comprehensive digital marketing services including brand strategy, web design, SEO, and content marketing.',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Worldwide',
    serviceType: 'Digital Marketing',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brand Strategy',
            description: 'Comprehensive brand strategy and identity development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Design',
            description: 'Custom website design and development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Optimization',
            description: 'Search engine optimization and organic growth',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content Marketing',
            description: 'Strategic content creation and distribution',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  )
}
