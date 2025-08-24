"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Sparkles } from "lucide-react"
import { useHoverAnimation } from "@/hooks/use-advanced-animations"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const logoHover = useHoverAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToContact = () => {
    scrollToSection("contact")
  }

  return (
    <header
      className={`backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 shadow-lg py-2" : "bg-background/80 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            {...logoHover.hoverProps}
            onClick={scrollToHero}
          >
            <div
				className={`w-10 h-10 flex items-center justify-center transition-all duration-500 ${
					logoHover.isHovered ? "scale-110 rotate-12 shadow-xl" : "shadow-lg"
				}`}
			>
				<img
					src="https://customer-assets.emergentagent.com/job_centered-captcha/artifacts/cnbvpohy_image.png"  // replace with your image path
					alt="Logo"
					className="w-10 h-10 object-contain rounded-xl"
				/>
				{logoHover.isHovered && (
					<Sparkles className="absolute w-4 h-4 text-secondary animate-ping" />
				)}
			</div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold text-foreground transition-all duration-300 ${
                  logoHover.isHovered ? "text-primary scale-105" : ""
                }`}
              >
                BuildStar
              </span>
              <span className="text-xs text-muted-foreground font-medium">Building trust, one renovation at a time</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Services", "About", "Testimonials", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-foreground hover:text-primary transition-all duration-300 group py-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 bg-transparent hover:scale-105 hover:shadow-lg transition-all duration-300 group"
              onClick={scrollToContact}
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span>Call Now</span>
            </Button>
            <Button
			className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:from-secondary/90 hover:to-secondary hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
			onClick={scrollToContact}
			>
			<span className="relative z-10">Get Quote</span>
			<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
			</Button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
              />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {["Services", "About", "Testimonials", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 hover:scale-105 ${
                    isMenuOpen ? "animate-in slide-in-from-left-4 fade-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div
                className={`flex flex-col space-y-2 pt-4 ${
                  isMenuOpen ? "animate-in slide-in-from-bottom-4 fade-in" : ""
                }`}
                style={{ animationDelay: "400ms" }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center justify-center space-x-2 bg-transparent hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    scrollToContact()
                    setIsMenuOpen(false)
                  }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </Button>
                <Button
                  className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    scrollToContact()
                    setIsMenuOpen(false)
                  }}
                >
                  <span className="relative z-10">Get Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
