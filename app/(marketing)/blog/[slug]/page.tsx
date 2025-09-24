import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'

import { Breadcrumb } from '@/components/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Sample blog post data - in a real app, this would come from a CMS or API
const blogPosts = {
  '5-marketing-strategies-that-drive-growth': {
    slug: '5-marketing-strategies-that-drive-growth',
    title: '5 Marketing Strategies That Actually Drive Business Growth',
    excerpt: 'Discover the proven marketing strategies that successful companies use to achieve sustainable growth and increase revenue.',
    content: `
      <p>In today's competitive business landscape, having the right marketing strategies can make the difference between thriving and merely surviving. After working with hundreds of businesses, we've identified five core strategies that consistently drive real growth.</p>
      
      <h2>1. Content Marketing That Builds Authority</h2>
      <p>Content marketing isn't just about publishing blog posts. It's about creating valuable, educational content that positions your brand as a thought leader in your industry. Companies that invest in high-quality content marketing see 6x higher conversion rates compared to other marketing methods.</p>
      
      <p>Key elements of successful content marketing:</p>
      <ul>
        <li>Consistent publishing schedule</li>
        <li>SEO-optimized content that addresses customer pain points</li>
        <li>Multi-format content (blogs, videos, podcasts, infographics)</li>
        <li>Distribution across multiple channels</li>
      </ul>
      
      <h2>2. Customer-Centric Approach</h2>
      <p>The most successful businesses put their customers at the center of every marketing decision. This means deeply understanding your audience's needs, preferences, and behaviors, then tailoring your messaging and offers accordingly.</p>
      
      <h2>3. Data-Driven Decision Making</h2>
      <p>Gone are the days of marketing based on gut feelings. Today's successful businesses rely on data to guide their marketing strategies. This includes tracking key metrics, A/B testing campaigns, and continuously optimizing based on performance data.</p>
      
      <h2>4. Omnichannel Marketing</h2>
      <p>Your customers interact with your brand across multiple touchpoints. An effective omnichannel strategy ensures a consistent, seamless experience whether they're on your website, social media, email, or in-store.</p>
      
      <h2>5. Long-term Relationship Building</h2>
      <p>While quick wins are appealing, sustainable growth comes from building long-term relationships with your customers. Focus on customer lifetime value, retention strategies, and creating brand advocates who will promote your business organically.</p>
      
      <h2>Conclusion</h2>
      <p>These five strategies work best when implemented together as part of a comprehensive marketing approach. Start with one strategy, master it, then gradually incorporate the others. Remember, marketing success is a marathon, not a sprint.</p>
    `,
    author: 'Truly Grit Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format&q=75',
  },
  'brand-storytelling-guide': {
    slug: 'brand-storytelling-guide',
    title: 'The Complete Guide to Brand Storytelling That Connects',
    excerpt: 'Learn how to craft compelling brand stories that resonate with your audience and build lasting emotional connections.',
    content: `
      <p>Storytelling is one of the most powerful tools in marketing. It's how humans have communicated for thousands of years, and it remains the most effective way to connect with your audience on an emotional level.</p>
      
      <h2>Why Brand Storytelling Matters</h2>
      <p>Stories are 22 times more memorable than facts alone. When you tell a compelling brand story, you're not just sharing information – you're creating an emotional connection that can lead to customer loyalty and advocacy.</p>
      
      <h2>The Elements of a Great Brand Story</h2>
      <p>Every great brand story has three core elements:</p>
      <ul>
        <li><strong>Character:</strong> Your brand or founder as the protagonist</li>
        <li><strong>Conflict:</strong> The problem your brand solves</li>
        <li><strong>Resolution:</strong> How your brand provides the solution</li>
      </ul>
      
      <h2>Crafting Your Brand Story</h2>
      <p>Start by identifying your brand's origin story. What problem were you trying to solve? What challenges did you face? How did you overcome them? These elements form the foundation of your brand narrative.</p>
      
      <h2>Conclusion</h2>
      <p>A well-crafted brand story can differentiate your business from competitors and create lasting emotional connections with your customers.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&auto=format&q=75',
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found | Truly Grit Blog',
    }
  }

  return {
    title: `${post.title} | Truly Grit Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumb items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]} />
          
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 pb-8 border-b">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-semibold">By {post.author}</p>
                <p className="text-sm text-muted-foreground">Truly Grit Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
                  <p className="text-muted-foreground">
                    {post.author} is a member of the Truly Grit team, specializing in strategic marketing and brand development. 
                    With years of experience helping businesses grow, {post.author} shares insights and strategies that drive real results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This would be populated with related posts in a real implementation */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&auto=format&q=75"
                  alt="Related post"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Building Brand Authority</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to establish your brand as a thought leader in your industry.
                </p>
                <Button variant="ghost" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
