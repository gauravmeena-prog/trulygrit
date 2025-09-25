import { Metadata } from 'next'
import Image from 'next/image'

import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Blog Post | Truly Grit',
  description: 'Read our latest marketing insights and strategies.',
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = {
    title: '5 Marketing Strategies That Actually Work in 2024',
    content: `
      <p>In today's competitive landscape, having the right marketing strategies can make or break your business. Here are five proven strategies that are delivering real results in 2024.</p>
      
      <h2>1. Content Marketing Excellence</h2>
      <p>Quality content remains king. Focus on creating valuable, educational content that solves your audience's problems and positions you as an industry expert.</p>
      
      <h2>2. Personalization at Scale</h2>
      <p>Use data-driven insights to deliver personalized experiences across all touchpoints. This includes email marketing, website experiences, and advertising campaigns.</p>
      
      <h2>3. Video Marketing Domination</h2>
      <p>Video content continues to outperform other formats. Invest in high-quality video production for your website, social media, and advertising campaigns.</p>
      
      <h2>4. Social Commerce Integration</h2>
      <p>Integrate your e-commerce with social media platforms to create seamless shopping experiences directly within social feeds.</p>
      
      <h2>5. AI-Powered Automation</h2>
      <p>Leverage artificial intelligence to automate repetitive tasks, personalize customer experiences, and optimize your marketing campaigns in real-time.</p>
      
      <p>By implementing these strategies, you'll be well-positioned to grow your business and stay ahead of the competition in 2024.</p>
    `,
    date: 'January 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format&q=75',
  }

  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]} />
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </section>
    </>
  )
}
