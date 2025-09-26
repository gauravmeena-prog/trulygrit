import { Metadata } from 'next'
import Image from 'next/image'

import { Breadcrumb } from '@/components/breadcrumb'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Blog Post | Truly Grit',
  description: 'Read our latest marketing insights and strategies.',
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = {
    title: 'The DAU Transformation: How We Helped a University Rebrand and Scale Admissions',
    content: `
      <p>In this detailed case study, we'll walk you through how we helped Dhirubhai Ambani University (formerly DA-IICT) successfully transition their brand identity and manage their admissions 2025 campaign, celebrating their 24th year of academic excellence.</p>
      
      <h2>The Challenge: A Complete Brand Transformation</h2>
      <p>When DA-IICT decided to rebrand to DAU, they faced several critical challenges:</p>
      <ul>
        <li>Low awareness of the new DAU branding</li>
        <li>Confusion among prospective students and parents</li>
        <li>Need to maintain trust while introducing change</li>
        <li>Compressed timeline for admissions 2025 campaign</li>
        <li>Unoptimized social media channels</li>
      </ul>
      
      <h2>Our Strategic Approach</h2>
      <p>We developed a comprehensive 4-pillar strategy to address these challenges:</p>
      
      <h3>1. Content Marketing Excellence</h3>
      <p>We created engaging content aligned with the new branding, including:</p>
      <ul>
        <li>Professional drone photography and videography of the campus</li>
        <li>Highlighting key USPs: Alumni success, placements, coding culture, faculty expertise</li>
        <li>Content tailored for different audiences: students, parents, and alumni</li>
        <li>Complete social media profile revamp with new identity</li>
      </ul>
      
      <h3>2. Performance Marketing Optimization</h3>
      <p>Our targeted paid campaigns delivered impressive results:</p>
      <ul>
        <li>42% increase in agency-sourced applications</li>
        <li>25% reduction in cost per application</li>
        <li>Double the leads compared to previous year</li>
        <li>Strategic audience segmentation and retargeting</li>
      </ul>
      
      <h3>3. Web Development & SEO</h3>
      <p>We completely revamped their digital presence:</p>
      <ul>
        <li>Modern, responsive website design</li>
        <li>SEO optimization for better discoverability</li>
        <li>Streamlined admission forms and lead capture</li>
        <li>Comprehensive analytics setup</li>
      </ul>
      
      <h3>4. Lead Nurturing & Conversion</h3>
      <p>Our automated systems ensured high conversion rates:</p>
      <ul>
        <li>Personalized email and SMS sequences</li>
        <li>Lead scoring and segmentation</li>
        <li>CRM integration for smooth tracking</li>
        <li>Improved admission pipeline efficiency</li>
      </ul>
      
      <h2>Results That Speak for Themselves</h2>
      <p>The campaign delivered exceptional results across all metrics:</p>
      <ul>
        <li><strong>20-25% growth</strong> in Instagram followers</li>
        <li><strong>42% increase</strong> in agency-based applications</li>
        <li><strong>25% lower cost</strong> per application through optimized ads</li>
        <li><strong>2x more leads</strong> generated compared to previous year</li>
        <li><strong>High awareness</strong> with crores of impressions across campaigns</li>
        <li><strong>Increased brand trust</strong> in the new DAU identity</li>
      </ul>
      
      <h2>Why This Campaign Worked</h2>
      <p>Our success came from a holistic, data-driven approach that balanced performance marketing, branding, content creation, and lead nurturing. We iterated campaigns in real-time based on user behavior data, showcased DAU's culture and achievements through extensive content, and ensured every lead was properly nurtured through the conversion funnel.</p>
      
      <p>This case study demonstrates how strategic marketing can transform a brand and drive significant business results, even under tight deadlines and complex challenges.</p>
    `,
    date: 'December 20, 2024',
    readTime: '8 min read',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop&auto=format&q=75',
    author: 'Truly Grit Team',
    authorRole: 'Marketing Strategists',
  }

  return (
    <>
      {/* Professional Hero Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <Breadcrumb items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]} />
          
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-600">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TG</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-500">{post.authorRole}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <article className="prose prose-lg prose-gray max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </section>

      {/* Professional CTA Section */}
      <CTASection
        title="Ready to Transform Your Marketing?"
        description="Let's discuss how our proven strategies can help your business achieve similar results. Get a free consultation and see how we can accelerate your success."
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
