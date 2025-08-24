"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, CheckCircle } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export function HeroSection() {
  const parallaxOffset = useParallax(0.2)

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}>
        <img
          src="/modern-office-team.png"
          alt="Professional business environment"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            BuildStar
            <span className="block text-secondary animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Professional Renovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            We create exceptional living spaces with expert services tailored to your home. Your comfort and satisfaction are our commitment
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            {[
              { icon: CheckCircle, text: "Expert Team" },
              { icon: CheckCircle, text: "Proven Results" },
              { icon: CheckCircle, text: "24/7 Support" },
            ].map((benefit, index) => (
              <div
                key={benefit.text}
                className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <benefit.icon className="w-5 h-5 text-secondary animate-pulse" />
                <span className="text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={scrollToServices}
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-transparent hover:scale-105 transition-all duration-300"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform cursor-pointer">
          
        </div>
      </div>
    </section>
  )
}
