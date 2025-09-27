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
      addressCountry: 'IN',
      addressRegion: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
      areaServed: ['IN', 'US', 'UK', 'CA', 'AU'],
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://x.com/truly_grit',
      'https://www.linkedin.com/company/trulygrit/posts/?feedView=all',
      'https://www.instagram.com/truly_grit/',
    ],
    founder: {
      '@type': 'Person',
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.title,
      description: siteConfig.author.bio,
      url: `${siteConfig.url}/about`,
      sameAs: [
        'https://www.linkedin.com/in/gauravmeena--/',
        'https://www.instagram.com/gaurav.meena___/',
      ],
    },
    foundingDate: '2024',
    areaServed: 'Worldwide',
    serviceType: [
      'Strategic Marketing',
      'Brand Strategy',
      'Digital Marketing',
      'Business Growth',
      'Data Analytics',
      'Creative Strategy',
      'Market Research',
      'Customer Acquisition',
      'Brand Transformation',
      'Marketing Automation',
      'Content Marketing',
      'Social Media Marketing',
      'SEO Optimization',
      'Performance Marketing',
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
