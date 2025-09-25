import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'
import { CardNavigation } from '@/components/card-navigation'

export const metadata: Metadata = {
  title: 'Navigation | Truly Grit - Explore Our Services',
  description: 'Navigate through all our services, pages, and resources. Find exactly what you need to grow your business.',
  openGraph: {
    title: 'Navigation | Truly Grit - Explore Our Services',
    description: 'Navigate through all our services, pages, and resources. Find exactly what you need to grow your business.',
    type: 'website',
  },
}

export default function NavigationPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Navigation' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Explore Everything
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Navigate through all our services, resources, and pages. Find exactly what you need to transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Card Navigation */}
      <CardNavigation />
    </>
  )
}
