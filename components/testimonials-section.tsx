"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function TestimonialsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2)
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollAnimation(0.1)
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2)

  const testimonials = [
    {
      name: "Mike Martin",
      role: "Customer",
      image: "/professional-woman-ceo.png",
      content:
        "I'm thrilled with the job BuildStar did on my basement finishing! Their team was very professional and patient. They answered all my questions and made sure to get the exact material and design I had in mind.",
      rating: 5,
    },
    {
      name: "Navid Rezaie",
      role: "Customer",
      image: "/placeholder-aalf4.png",
      content:
        "I cannot put into words the knowledge that their team has and how professional they are in handling the projects. Their job was very high quality and I hired them subsequently to do my patio and deck as well.",
      rating: 5,
    },
    {
      name: "Noah Lee",
      role: "Customer",
      image: "/professional-woman-founder-headshot.png",
      content:
        "Equally impressive was the kitchen remodeling. They turned my kitchen into a chef's dream with state-of-the-art appliances, elegant countertops, and custom cabinetry. The functionality and aesthetics of the kitchen have been greatly enhanced.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Customer",
      image: "/professional-cto-headshot.png",
      content:
        "Their service expertise is amazing. The design is great and I would recommend it to everyone else.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what business leaders are saying about their experience working
              with ProBusiness.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div
            ref={carouselRef}
            className={`relative transition-all duration-1000 ${
              carouselVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="max-w-4xl mx-auto p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-center">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-20 hover:opacity-40 transition-opacity duration-300" />

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 text-secondary fill-current hover:scale-110 transition-transform duration-200 ${
                          isAnimating ? "animate-pulse" : ""
                        }`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote
                    className={`text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic transition-all duration-500 ${
                      isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
                  >
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div
                    className={`flex items-center justify-center space-x-4 transition-all duration-500 ${
                      isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
                  >
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-left">
                      <div className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-transparent hover:scale-110 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-transparent hover:scale-110 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                disabled={isAnimating}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { value: "100%", label: "Client Satisfaction" },
              { value: "500+", label: "Happy Clients" },
              { value: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 hover:scale-105 ${
                  statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2 hover:text-secondary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
