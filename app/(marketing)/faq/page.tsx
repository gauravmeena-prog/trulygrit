import { Metadata } from 'next'

import { Breadcrumb } from '@/components/breadcrumb'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'FAQ | Truly Grit - Frequently Asked Questions',
  description: 'Find answers to common questions about our marketing services, pricing, and process. Get the information you need to make informed decisions.',
  openGraph: {
    title: 'FAQ | Truly Grit - Frequently Asked Questions',
    description: 'Find answers to common questions about our marketing services, pricing, and process. Get the information you need to make informed decisions.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What services does Truly Grit offer?',
    answer: 'We offer comprehensive marketing services including brand strategy, digital marketing, web development, content creation, SEO, paid advertising, and social media management. We also provide custom marketing solutions tailored to your specific business needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A typical website design project takes 4-8 weeks, while a comprehensive digital marketing campaign could be ongoing. We provide detailed timelines after our initial discovery phase and always keep you informed of progress.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing packages starting from $5,000 for our Starter Package. Our Growth Accelerator package is $12,000, and our Enterprise Solution starts at $25,000+. We also offer custom pricing for specific needs. Contact us for a personalized quote.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our Starter Package is specifically designed for small businesses and startups looking to establish a strong online presence.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We define success based on your specific business objectives. We track key performance indicators (KPIs) such as website traffic, lead generation, conversion rates, ROI, and brand engagement. We provide transparent monthly reports so you can see the impact of our work.',
  },
  {
    question: 'What makes Truly Grit different from other agencies?',
    answer: 'We combine strategic thinking with creative execution and focus on delivering measurable results. Our team has 10+ years of experience, we offer a 90-day guarantee, and we\'re committed to your long-term success. We don\'t just create campaigns—we build growth engines.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! We believe in long-term partnerships. Our services include ongoing optimization, monthly reporting, and continuous campaign improvements. We\'re here to support your growth journey every step of the way.',
  },
  {
    question: 'Can you help with existing marketing efforts?',
    answer: 'Absolutely! We can audit your current marketing efforts, identify areas for improvement, and either enhance your existing campaigns or create new strategies that complement what you already have in place.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience across various industries including technology, e-commerce, healthcare, professional services, and B2B SaaS. Our strategic approach adapts to any industry, and we bring fresh perspectives to help you stand out in your market.',
  },
  {
    question: 'How do I get started?',
    answer: 'Getting started is easy! Simply contact us through our contact form or schedule a free strategy call. We\'ll discuss your goals, challenges, and how we can help. From there, we\'ll create a customized proposal tailored to your needs and budget.',
  },
]

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
              Find answers to common questions about our services, process, and how we can help grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-7">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
