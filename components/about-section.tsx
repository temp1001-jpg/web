"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useParallax } from "@/hooks/use-parallax"

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2)
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1)
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2)
  const parallaxOffset = useParallax(0.3)

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "1,200+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Clock, label: "Response Time", value: "< 2hrs" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built on a foundation of craftsmanship and innovation, we’ve been transforming homes for over a decade with our bespoke designs, superior construction, and unwavering commitment to quality.
            </p>
          </div>

          {/* Content Grid */}
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div
              className={`relative transition-all duration-1000 ${
                contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src="/diverse-business-meeting.png"
                alt="Our team in action"
                className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg hover:scale-110 transition-all duration-300 hover:rotate-3">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-3xl font-bold text-foreground mb-4">Delivering Excellence in Home Transformation Since 2009</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What began as a small team with a passion for exceptional design and craftsmanship has grown into a trusted partner for homeowners seeking luxury renovations and bespoke construction. Our journey has been defined by innovation, meticulous attention to detail, and an unwavering commitment to creating spaces that inspire.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every home deserves exceptional design, superior quality, and lasting value. That’s why we offer services built on precision, reliability, and results that elevate your living experience.
              </p>

              {/* Key Points */}
              <div className="space-y-3 pt-4">
                {[
                  "Industry-leading expertise in luxury renovation and construction",
                  "Personalized solutions tailored to every home and client",
                  "Commitment to sustainable and enduring craftsmanship",
                ].map((point, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-500 hover:translate-x-2 ${
                      contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`text-center p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                  statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
