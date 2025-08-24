"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import HCaptcha from "@hcaptcha/react-hcaptcha"

export function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2)
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.1)
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation(0.1)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!captchaToken) {
      alert("Please complete the captcha verification")
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would typically send the form data and captcha token to your backend
      // For now, we'll simulate the submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", { ...formData, captchaToken })

      // Reset form and captcha
      setFormData({ name: "", email: "", company: "", message: "" })
      setCaptchaToken(null)
      captchaRef.current?.resetCaptcha()

      alert("Message sent successfully!")
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token)
  }

  const handleCaptchaExpire = () => {
    setCaptchaToken(null)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Business Avenue", "Suite 100, City, State 12345"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@probusiness.com", "support@probusiness.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your home into the space of your dreams? We’d love to hear from you. Let’s discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card
              ref={formRef}
              className={`shadow-lg hover:shadow-xl transition-all duration-1000 ${
                formVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full focus:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full focus:scale-105 transition-transform duration-200"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full focus:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or how we can help..."
                      rows={6}
                      className="w-full focus:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="flex justify-center">
                    <HCaptcha
                      ref={captchaRef}
                      sitekey="45a47732-24d4-49ae-abf8-23869a583a4a"
                      onVerify={handleCaptchaVerify}
                      onExpire={handleCaptchaExpire}
                      theme="light"
                      size="normal"
                      tabindex={0}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !captchaToken}
                    className={`w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all duration-300 ${
                      isSubmitting ? "animate-pulse" : ""
                    } ${!captchaToken ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div
              ref={infoRef}
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                infoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={`p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-105 ${
                      infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors duration-300 hover:scale-110">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: "url(/modern-office-building.png)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center bg-background/90 backdrop-blur-sm rounded-lg p-6 border border-border">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-foreground font-semibold">Our Office Location</p>
                      <p className="text-sm text-muted-foreground">123 Business Avenue, Suite 100</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
