"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Cog, BarChart3, Shield, Zap, Headphones } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2)
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1)

  const handleLearnMore = (serviceName: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const services = [
    {
      icon: Briefcase,
      title: "Full Home Renovations",
      description: "From concept to completion with end‑to‑end project management.",
      features: ["Design‑Build", "Permits & Inspections", "Premium Finishes"],
      image: "/business-consulting-meeting.png",
    },
    {
      icon: Cog,
      title: "Kitchen Transformations",
      description: "Chef‑grade cabinetry, stone, and lighting for daily luxury.",
      features: ["Custom Millwork", "Smart Lighting", "Quartz & Stone"],
      image: "/technical-solutions-workspace.png",
    },
    {
      icon: BarChart3,
      title: "Bathrooms & Spas",
      description: "Timeless materials and modern wellness technology.",
      features: ["Heated Floors", "Large‑format Tile", " Steam & Rain"],
      image: "/analytics-dashboard.png",
    },
    {
      icon: Shield,
      title: "Additions & Exteriors",
      description: "Thoughtful extensions, facade refresh, and outdoor living.",
      features: [" Structural", "Decks & Patios", "Envelope Upgrades"],
      image: "/cybersecurity-protection.png",
    },
    {
      icon: Zap,
      title: "Luxury service",
      description: "End-to-end luxury renovation and construction services that elevate your home with timeless design, superior craftsmanship, and enduring value.",
      features: ["Custom Design", "Quality Construction", "Interior Renovation"],
      image: "/digital-transformation.png",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock support ensuring your home renovation and construction needs are seamlessly managed with care and precision.",
      features: ["Live Chat Support", "On-Demand Consultation", "Emergency Repairs"],
      image: "/customer-support-team.png",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to transform every aspect of your home, from concept and design to construction and ongoing care.
            </p>
          </div>

          {/* Services Grid */}
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border hover:border-primary/20 overflow-hidden relative ${
                  gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90 group-hover:from-background/90 group-hover:to-background/85 transition-all duration-500" />

                <CardHeader className="pb-4 relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm hover:translate-x-1 transition-transform duration-200"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent hover:scale-105"
                    onClick={() => handleLearnMore(service.title)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
