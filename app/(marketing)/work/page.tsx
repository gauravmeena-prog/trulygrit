import WorkPageClient from './work-client'

export const metadata = {
  title: 'Our Work | Truly Grit Portfolio & Services',
  description: 'Discover our comprehensive marketing services and portfolio. From brand transformation to digital strategy, we deliver results that drive business growth.',
  openGraph: {
    title: 'Our Work | Truly Grit Portfolio & Services',
    description: 'Discover our comprehensive marketing services and portfolio. From brand transformation to digital strategy, we deliver results that drive business growth.',
    url: 'https://truly-grit.vercel.app/work',
    type: 'website',
  },
  twitter: {
    title: 'Our Work | Truly Grit Portfolio & Services',
    description: 'Discover our comprehensive marketing services and portfolio. From brand transformation to digital strategy, we deliver results that drive business growth.',
  },
}

export default function WorkPage() {
  return <WorkPageClient />
}