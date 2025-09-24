import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const blogPosts = [
  {
    slug: '5-marketing-strategies-that-drive-growth',
    title: '5 Marketing Strategies That Actually Drive Business Growth',
    excerpt: 'Discover the proven marketing strategies that successful companies use to achieve sustainable growth and increase revenue.',
    author: 'Truly Grit Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format&q=75',
    featured: true,
  },
  {
    slug: 'brand-storytelling-guide',
    title: 'The Complete Guide to Brand Storytelling That Connects',
    excerpt: 'Learn how to craft compelling brand stories that resonate with your audience and build lasting emotional connections.',
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
  {
    slug: 'digital-marketing-trends-2024',
    title: 'Digital Marketing Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in 2024.',
    author: 'Michael Chen',
    date: '2024-01-05',
    readTime: '5 min read',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
  {
    slug: 'conversion-optimization-tips',
    title: '10 Conversion Optimization Tips That Actually Work',
    excerpt: 'Boost your conversion rates with these data-driven optimization strategies that have proven results.',
    author: 'Emily Rodriguez',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Optimization',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
  {
    slug: 'building-brand-authority',
    title: 'How to Build Brand Authority in Your Industry',
    excerpt: 'Establish your brand as a thought leader and trusted authority in your market with these proven strategies.',
    author: 'Truly Grit Team',
    date: '2023-12-20',
    readTime: '9 min read',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
  {
    slug: 'social-media-strategy-guide',
    title: 'The Ultimate Social Media Strategy Guide for 2024',
    excerpt: 'Create a winning social media strategy that drives engagement, builds community, and generates leads.',
    author: 'Alex Thompson',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
]

const categories = ['All', 'Strategy', 'Branding', 'Digital Marketing', 'Optimization', 'Social Media']

export const metadata: Metadata = {
  title: 'Blog | Truly Grit - Marketing Insights & Strategies',
  description: 'Stay updated with the latest marketing insights, strategies, and industry trends from the Truly Grit team.',
  openGraph: {
    title: 'Blog | Truly Grit - Marketing Insights & Strategies',
    description: 'Stay updated with the latest marketing insights, strategies, and industry trends from the Truly Grit team.',
    type: 'website',
  },
}

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Marketing Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Stay ahead of the curve with expert insights, proven strategies, and industry trends 
              that drive real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Article
              </h2>
            </div>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl mb-4">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-lg mb-6">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      By {featuredPost.author}
                    </span>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-6 text-lg leading-8 opacity-90">
              Get the latest marketing insights and strategies delivered straight to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 max-w-md px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
