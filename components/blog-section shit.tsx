"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { useAdvancedParallax } from "@/hooks/use-parallax"
import { useState } from "react"

const galleryProjects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    beforeImage: "/kitchen-before.jpg",
    afterImage: "/kitchen-after.jpg",
    category: "Kitchen",
    date: "2024-02-10",
    description: "Complete transformation with modern fixtures, open shelving, and smart lighting.",
  },
  {
    id: 2,
    title: "Cozy Living Room Upgrade",
    beforeImage: "/living-before.jpg",
    afterImage: "/living-after.jpg",
    category: "Living Room",
    date: "2024-01-20",
    description: "A dark, cramped living room turned into a bright, welcoming space.",
  },
  {
    id: 3,
    title: "Exterior Facade Refresh",
    beforeImage: "/exterior-before.jpg",
    afterImage: "/exterior-after.jpg",
    category: "Exterior",
    date: "2023-12-15",
    description: "Fresh paint, new siding, and a welcoming entrance redesigned for curb appeal.",
  },
]

export default function BeforeAfterPage() {
  const { getParallaxValue } = useAdvancedParallax()
  const [sliderValue, setSliderValue] = useState(50) // controls before/after reveal

  return (
    <section className="py-20 mb-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
          style={{ transform: `translateY(${getParallaxValue(0.2, 1600)}px)` }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Before & After Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our stunning home renovation transformations — from outdated to outstanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                transform: `translateY(${getParallaxValue(0.1 * (index + 1), 2000)}px)`,
              }}
            >
              <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
                <img
                  src={project.beforeImage}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderValue}%` }}
                >
                  <img
                    src={project.afterImage}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 opacity-70 hover:opacity-100 transition"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <Badge variant="outline">{project.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(project.date).toLocaleDateString()}
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn hover:scale-105 transition-all duration-300"
                >
                  View Project
                  <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
