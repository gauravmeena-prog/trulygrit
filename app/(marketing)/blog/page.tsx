import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'
import { CTASection } from '@/components/sections/cta-section'

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
    title: 'The DAU Transformation: How We Helped a University Rebrand and Scale Admissions',
    excerpt: 'A detailed case study of how we helped Dhirubhai Ambani University transition from DA-IICT to DAU, managing their 24th anniversary and admissions 2025 campaign.',
    date: 'December 20, 2024',
    readTime: '8 min read',
    slug: 'dau-transformation-case-study',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&auto=format&q=75',
    featured: true,
  },
  {
    title: '5 Marketing Strategies That Actually Work in 2025',
    excerpt: 'Discover the proven marketing strategies that are driving real results for businesses in 2025, based on our experience with 50+ successful campaigns.',
    date: 'December 15, 2024',
    readTime: '6 min read',
    slug: '5-marketing-strategies-2025',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
  {
    title: 'How to Build a Brand That Customers Love and Trust',
    excerpt: 'Learn the essential elements of building a memorable and trustworthy brand that resonates with your target audience and drives long-term loyalty.',
    date: 'December 10, 2024',
    readTime: '7 min read',
    slug: 'build-brand-customers-love-trust',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
  {
    title: 'The Complete Guide to Digital Marketing ROI in 2025',
    excerpt: 'Master the art of measuring and maximizing your digital marketing return on investment with our proven framework and real-world examples.',
    date: 'December 5, 2024',
    readTime: '9 min read',
    slug: 'digital-marketing-roi-guide-2025',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
  {
    title: 'Content Marketing That Converts: Lessons from 100+ Campaigns',
    excerpt: 'Discover the content marketing strategies that actually drive conversions, based on our analysis of over 100 successful campaigns across different industries.',
    date: 'November 28, 2024',
    readTime: '8 min read',
    slug: 'content-marketing-converts-lessons',
    category: 'Content Marketing',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
  {
    title: 'Social Media Marketing: From Strategy to Execution',
    excerpt: 'Learn how to create and execute a social media marketing strategy that drives engagement, builds community, and generates real business results.',
    date: 'November 20, 2024',
    readTime: '6 min read',
    slug: 'social-media-marketing-strategy-execution',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop&auto=format&q=75',
    featured: false,
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Professional Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Marketing Blog</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight mb-8">
              <span className="block text-gray-900/90">
                Marketing
              </span>
              <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold mt-2">
                Insights
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto font-medium">
              Discover proven strategies, industry insights, and actionable tips from our marketing experts to accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
              All Posts
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Case Study
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Strategy
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Branding
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Analytics
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Content Marketing
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Social Media
            </button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-gray-600">Our most popular and impactful content</p>
          </div>
          
          {(() => {
            const featuredPost = blogPosts.find(post => post.featured)
            if (!featuredPost) return null
            
            return (
              <article className="group">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          {featuredPost.category}
                        </span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <time dateTime={featuredPost.date}>{featuredPost.date}</time>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      
                      <a
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center text-primary font-semibold text-lg hover:underline group-hover:gap-3 transition-all"
                      >
                        Read Full Article
                        <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })()}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our latest marketing insights and strategies</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.slug} className="group">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-semibold hover:underline group-hover:gap-2 transition-all"
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

      {/* Professional CTA Section */}
      <CTASection
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how our proven strategies can help your business grow. Get a free consultation and see how we can accelerate your success."
        primaryCta={{
          text: 'Get Free Consultation',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Our Work',
          href: '/work',
        }}
        variant="gradient"
      />
    </>
  )
}
