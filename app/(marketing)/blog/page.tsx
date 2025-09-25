import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Blog | Truly Grit - Marketing Insights & Tips',
  description: 'Discover marketing insights, strategies, and tips from the Truly Grit team. Learn how to grow your business with proven marketing techniques.',
  openGraph: {
    title: 'Blog | Truly Grit - Marketing Insights & Tips',
    description: 'Discover marketing insights, strategies, and tips from the Truly Grit team. Learn how to grow your business with proven marketing techniques.',
    type: 'website',
  },
}

const blogPosts = [
  {
    title: '5 Marketing Strategies That Actually Work in 2024',
    excerpt: 'Discover the proven marketing strategies that are driving real results for businesses in 2024.',
    date: 'January 15, 2024',
    readTime: '5 min read',
    slug: '5-marketing-strategies-2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=75',
  },
  {
    title: 'How to Build a Brand That Customers Love',
    excerpt: 'Learn the essential elements of building a memorable and lovable brand that resonates with your target audience.',
    date: 'January 10, 2024',
    readTime: '7 min read',
    slug: 'build-brand-customers-love',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format&q=75',
  },
  {
    title: 'The Complete Guide to Digital Marketing ROI',
    excerpt: 'Master the art of measuring and maximizing your digital marketing return on investment.',
    date: 'January 5, 2024',
    readTime: '6 min read',
    slug: 'digital-marketing-roi-guide',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop&auto=format&q=75',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Marketing Insights & Tips
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover proven strategies, industry insights, and actionable tips to grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Read more
                      <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
