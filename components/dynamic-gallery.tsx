"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useAdvancedParallax } from "@/hooks/use-parallax"

const galleryItems = [
  {
    id: 1,
    title: "Full Home Renovations",
    description: "From concept to completion with end‑to‑end project management.",
    image: "/innovation-lab.png",
    category: "Full Home",
  },
  {
    id: 2,
    title: "Kitchen Transformations",
    description: "Chef‑grade cabinetry, stone, and lighting for daily luxury.",
    image: "/modern-glass-office.png",
    category: "Kitchen",
  },
  {
    id: 3,
    title: "Bathrooms & Spas",
    description: "Timeless materials and modern wellness technology.",
    image: "/placeholder-pl6bz.png",
    category: "Bathrooms",
  },
  {
    id: 4,
    title: "Garage",
    description: "Upgrade your garage into a functional, eco-friendly space with sustainable design and smart storage solutions.",
    image: "/business-meeting-strategy.png",
    category: "Additions",
  },
  {
    id: 5,
    title: "Basement Renovation",
    description: "Transform your basement into a functional and stylish space.",
    image: "/basement-renovations-2.jpg",
    category: "Basement",
  },
  {
    id: 6,
    title: "Additions & Exteriors",
    description: "Thoughtful extensions, facade refresh, and outdoor living.",
    image: "/team-training-session.png",
    category: "Additions",
  },
]

export function DynamicGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { getParallaxValue } = useAdvancedParallax()

  const categories = ["All", "Full Home", "Kitchen", "Bathrooms", "Basement", "Additions"]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, filteredItems.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const parallaxOffset = getParallaxValue(0.1, 0, 20)

  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-yellow-500 bg-clip-text text-transparent">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                  : "border-cyan-200 hover:border-cyan-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:rotate-1 h-full flex flex-col"
                style={{
                  transform: `translateY(${getParallaxValue(0.02 * (index + 1), 0, 10)}px)`,
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <div className="relative overflow-hidden h-64 flex-shrink-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="px-4 py-2 bg-cyan-500/90 text-white text-sm font-medium rounded-full backdrop-blur-sm shadow-lg">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-200 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-background to-muted/20 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-cyan-600 font-medium uppercase tracking-wide">{item.category}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-yellow-500 text-white hover:from-cyan-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
