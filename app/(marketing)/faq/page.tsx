import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CTASection } from '@/components/sections/cta-section'

const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What services does Truly Grit offer?',
        answer: 'We offer comprehensive marketing services including brand strategy, digital marketing, web development, creative services, SEO & content marketing, and paid advertising. Our team provides end-to-end solutions to help your business grow and achieve its marketing goals.'
      },
      {
        question: 'How do you measure marketing success?',
        answer: 'We use a data-driven approach with key performance indicators (KPIs) tailored to your business goals. This includes metrics like lead generation, conversion rates, customer acquisition cost, return on ad spend, brand awareness, and revenue growth. We provide regular reports and insights to track progress.'
      },
      {
        question: 'What makes Truly Grit different from other marketing agencies?',
        answer: 'We combine strategic thinking with creative execution, focusing on authentic storytelling and data-driven results. Our team brings deep industry expertise, and we prioritize long-term relationships over quick wins. We also offer transparent reporting and work as an extension of your team.'
      },
      {
        question: 'Do you work with businesses of all sizes?',
        answer: 'Yes, we work with businesses of all sizes, from startups to enterprise companies. Our approach is scalable and we tailor our strategies to fit your specific needs, budget, and growth stage.'
      }
    ]
  },
  {
    category: 'Process & Timeline',
    questions: [
      {
        question: 'How long does a typical marketing project take?',
        answer: 'Project timelines vary depending on scope and complexity. A brand strategy project typically takes 4-6 weeks, while digital marketing campaigns can start showing results in 2-4 weeks. Web development projects range from 6-12 weeks. We provide detailed timelines during the initial consultation.'
      },
      {
        question: 'What is your typical process for new clients?',
        answer: 'Our process starts with a discovery call to understand your business, goals, and challenges. We then develop a customized strategy, present our recommendations, and begin implementation. Throughout the project, we maintain regular communication and provide progress updates.'
      },
      {
        question: 'Do you require long-term contracts?',
        answer: 'While we prefer longer-term relationships for better results, we offer flexible contract terms. We have minimum engagement periods for certain services, but we also offer project-based work for specific needs.'
      },
      {
        question: 'How do you handle communication during projects?',
        answer: 'We maintain regular communication through scheduled check-ins, progress reports, and direct access to your account team. We use project management tools to keep everyone informed and ensure transparency throughout the process.'
      }
    ]
  },
  {
    category: 'Pricing & Investment',
    questions: [
      {
        question: 'How do you structure your pricing?',
        answer: 'Our pricing is customized based on your specific needs, scope of work, and timeline. We offer both retainer-based and project-based pricing models. During our initial consultation, we provide detailed pricing information tailored to your requirements.'
      },
      {
        question: 'Do you offer payment plans or flexible payment options?',
        answer: 'Yes, we offer flexible payment options including monthly retainers, project milestones, and customized payment plans. We work with you to find a payment structure that fits your budget and cash flow.'
      },
      {
        question: 'What is included in your marketing retainer?',
        answer: 'Our retainer packages typically include strategy development, campaign management, content creation, performance monitoring, regular reporting, and ongoing optimization. Specific inclusions depend on your chosen package and requirements.'
      },
      {
        question: 'Are there any setup fees or hidden costs?',
        answer: 'We believe in transparent pricing. Any setup fees or additional costs are clearly communicated upfront. We provide detailed proposals with all costs included, so there are no surprises.'
      }
    ]
  },
  {
    category: 'Results & Performance',
    questions: [
      {
        question: 'What kind of results can I expect?',
        answer: 'Results vary by industry and goals, but our clients typically see improved brand awareness, increased qualified leads, higher conversion rates, and measurable ROI. We set realistic expectations and work toward achieving your specific business objectives.'
      },
      {
        question: 'How quickly will I see results from marketing campaigns?',
        answer: 'Digital marketing campaigns can start showing initial results within 2-4 weeks, while SEO and content marketing typically take 3-6 months to show significant impact. Brand awareness campaigns may take longer but provide long-term value.'
      },
      {
        question: 'Do you provide regular performance reports?',
        answer: 'Yes, we provide detailed monthly reports with key metrics, insights, and recommendations. We also offer real-time dashboards for ongoing campaign monitoring and can schedule regular review calls to discuss performance.'
      },
      {
        question: 'What if I\'m not satisfied with the results?',
        answer: 'We work closely with clients to ensure satisfaction. If results aren\'t meeting expectations, we analyze the situation, adjust strategies, and implement improvements. We\'re committed to your success and will make necessary changes to achieve your goals.'
      }
    ]
  }
]

export const metadata: Metadata = {
  title: 'FAQ | Truly Grit - Frequently Asked Questions',
  description: 'Find answers to common questions about our marketing services, process, pricing, and more.',
  openGraph: {
    title: 'FAQ | Truly Grit - Frequently Asked Questions',
    description: 'Find answers to common questions about our marketing services, process, pricing, and more.',
    type: 'website',
  },
}

export default function FAQPage() {
  return (
    <>
      {/* Header Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find answers to common questions about our marketing services, process, and approach. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold text-foreground">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection
        title="Still Have Questions?"
        description="Can't find the answer you're looking for? Our team is here to help. Get in touch and we'll get back to you within 24 hours."
        primaryCta={{
          text: 'Contact Us',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Schedule a Call',
          href: '/contact',
        }}
        variant="default"
      />
    </>
  )
}
