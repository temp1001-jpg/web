import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">BS</span>
                </div>
                <span className="text-xl font-bold text-foreground">BuildStar</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Transforming homes with expert craftsmanship, innovative design, and reliable construction solutions for lasting comfort, style, and value.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-foreground">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Full Home Renovations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Kitchen Transformations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Bathrooms & Spas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Additions & Exteriors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    24/7 Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-muted">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-muted">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-muted">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-muted">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>

              {/* Copyright */}
              <div className="text-muted-foreground text-sm">© {currentYear} BuildStar. All rights reserved.</div>

              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
