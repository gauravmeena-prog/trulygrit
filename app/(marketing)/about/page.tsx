import { Metadata } from 'next'
import Image from 'next/image'

import { FeaturesGrid } from '@/components/sections/features-grid'
import { CTASection } from '@/components/sections/cta-section'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent } from '@/components/ui/card'


const values = [
  {
    iconName: 'target',
    title: 'Strategic Focus',
    description: 'We develop comprehensive strategies that align with your business goals and market opportunities.',
  },
  {
    iconName: 'users',
    title: 'Client Partnership',
    description: 'We build lasting relationships with our clients, working as an extension of their team to achieve shared success.',
  },
  {
    iconName: 'award',
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from strategy development to creative execution.',
  },
  {
    iconName: 'trending-up',
    title: 'Continuous Growth',
    description: 'We stay ahead of industry trends and continuously evolve our approach to deliver cutting-edge solutions.',
  },
]

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Successful Projects', value: '200+' },
  { label: 'Happy Clients', value: '150+' },
  { label: 'Team Members', value: '25+' },
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'Sarah founded Truly Grit with a vision to help businesses achieve remarkable growth through strategic marketing. With over 15 years of experience in marketing and business development, she leads our team with passion and expertise.',
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'Michael leads our creative team, bringing over 12 years of experience in brand design and digital experiences. His work has been recognized by industry awards and has helped numerous brands establish strong visual identities.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Strategy Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'Emily develops data-driven strategies that have helped our clients achieve significant growth. With expertise in analytics and market research, she ensures every campaign is optimized for maximum impact.',
  },
  {
    name: 'David Kim',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=75',
    bio: 'David ensures our technical solutions are scalable, performant, and aligned with the latest web standards. His technical expertise helps us deliver seamless digital experiences for our clients.',
  },
]

export const metadata = {
  title: 'About Us | Truly Grit Marketing Agency',
  description: 'Meet the team behind Truly Grit. We are strategic marketing professionals dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
  openGraph: {
    title: 'About Us | Truly Grit Marketing Agency',
    description: 'Meet the team behind Truly Grit. We are strategic marketing professionals dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
    url: 'https://truly-grit.vercel.app/about',
    type: 'website',
  },
  twitter: {
    title: 'About Us | Truly Grit Marketing Agency',
    description: 'Meet the team behind Truly Grit. We are strategic marketing professionals dedicated to helping businesses achieve extraordinary growth through data-driven strategies and creative excellence.',
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'About' }]} />
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              About Truly Grit
            </h1>
            <Image
              src="/Logo_white_bg.png"
              alt="Truly Grit"
              width={200}
              height={67}
              className="h-12 w-auto dark:filter-none filter brightness-0"
            />
          </div>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We are a strategic marketing agency dedicated to helping ambitious businesses achieve extraordinary growth. 
            Our team combines deep industry expertise with creative innovation to deliver marketing solutions that drive real results.
          </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Founded in 2014, Truly Grit was born from a simple belief: great marketing should build genuine connections and drive meaningful results.
              </p>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Starting with a small team and big ambitions, we've grown into a trusted partner for businesses across industries. We've helped over 150 companies transform their marketing approach, from struggling startups to established enterprises looking to scale.
              </p>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Today, we continue to push the boundaries of what's possible in marketing, combining strategic thinking with creative execution to deliver solutions that not only meet our clients' goals but exceed their expectations.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <div className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=75"
                      alt="Team collaboration session with diverse professionals working together on marketing strategy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <div className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
                    <Image
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=450&fit=crop&auto=format&q=75"
                      alt="Strategic planning session with marketing professionals analyzing data and creating campaigns"
                      width={600}
                      height={450}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <div className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover">
                    <Image
                      src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop&auto=format&q=75"
                      alt="Modern creative workspace with design tools and marketing materials showcasing brand development process"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Impact
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Numbers that reflect our commitment to client success
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-muted/50 p-8">
                  <dt className="text-sm font-semibold leading-6 text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Values */}
      <FeaturesGrid
        title="Our Values"
        description="The principles that guide everything we do and shape how we work with our clients."
        features={values}
      />

      {/* Team */}
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The talented individuals behind our success and your results.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {team.map((person) => (
              <Card key={person.name} className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src={person.image}
                      alt={`Professional headshot of ${person.name}, ${person.role} at Truly Grit`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {person.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {person.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss how our team can help you achieve your business goals through strategic marketing."
        primaryCta={{
          text: 'Get In Touch',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Our Work',
          href: '/work',
        }}
      />
    </>
  )
}
