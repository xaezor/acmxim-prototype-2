"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Dr. Jennifer Martinez",
      role: "Computer Science Professor",
      organization: "University Faculty",
      content:
        "The ACM chapter has consistently demonstrated exceptional leadership in fostering innovation and academic excellence. Their events and initiatives have significantly enriched our computer science program.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Robert Chen",
      role: "Software Engineer",
      organization: "Google (Alumni '22)",
      content:
        "Being part of ACM University was transformative. The networking opportunities, technical workshops, and collaborative projects prepared me exceptionally well for my career in tech.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sarah Williams",
      role: "Data Scientist",
      organization: "Microsoft (Alumni '21)",
      content:
        "The mentorship and hands-on experience I gained through ACM projects were invaluable. The chapter truly bridges the gap between academic learning and industry practice.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Alex Thompson",
      role: "Current Member",
      organization: "Computer Science Senior",
      content:
        "ACM has been my home away from home. The supportive community, amazing events, and opportunities to lead projects have made my university experience incredible.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Michael Park",
      role: "Industry Partner",
      organization: "Tech Innovations Inc.",
      content:
        "We've been partnering with ACM University for three years. The quality of students and projects that come out of this chapter is consistently impressive.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Lisa Rodriguez",
      role: "UX Designer",
      organization: "Adobe (Alumni '20)",
      content:
        "The diverse range of projects and collaborative environment at ACM helped me discover my passion for UX design. The chapter supports exploration across all areas of tech.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What People{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from faculty, alumni, and current members about their experience with our ACM chapter.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 text-blue-500 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  <div className="text-sm text-blue-600">{testimonials[currentTestimonial].organization}</div>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content.substring(0, 120)}..."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to share your experience with ACM University?</p>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
            Submit Your Testimonial
          </Button>
        </div>
      </div>
    </section>
  )
}
