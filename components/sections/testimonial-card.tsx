'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    company: string
    image: string
  }
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 group-hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < testimonial.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          
          <blockquote className="text-lg leading-7 text-foreground mb-6">
            "{testimonial.content}"
          </blockquote>
          
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={testimonial.author.image}
                alt={`Portrait of ${testimonial.author.name}, ${testimonial.author.role} at ${testimonial.author.company}`}
                fill
                className="object-cover"
                sizes="40px"
                loading="lazy"
              />
            </div>
            <div>
              <div className="font-medium text-foreground">
                {testimonial.author.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {testimonial.author.role} at {testimonial.author.company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface TestimonialsProps {
  title: string
  description: string
  testimonials: Testimonial[]
}

export function Testimonials({ title, description, testimonials }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [touchStart, setTouchStart] = React.useState<number | null>(null)
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {description}
          </p>
        </motion.div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:block mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden mx-auto mt-16 sm:mt-20">
          <div 
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-background border border-border hover:bg-accent transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                    index === currentSlide ? 'bg-primary' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-background border border-border hover:bg-accent transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
