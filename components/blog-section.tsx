"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { useAdvancedParallax } from "@/hooks/use-parallax"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Transformation in Business",
    excerpt:
      "Discover how emerging technologies are reshaping the business landscape and what it means for your organization's growth strategy.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    image: "/futuristic-digital-business.png",
    featured: true,
  },
  {
    id: 2,
    title: "Building Resilient Teams in Remote Work Era",
    excerpt:
      "Learn effective strategies for maintaining team cohesion and productivity in distributed work environments.",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Leadership",
    image: "/remote-team-collaboration.png",
    featured: false,
  },
  {
    id: 3,
    title: "Sustainable Business Practices That Drive Growth",
    excerpt: "Explore how environmental consciousness and business success go hand in hand in today's market.",
    author: "Emma Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/sustainable-green-office.png",
    featured: false,
  },
  {
    id: 4,
    title: "AI Integration: A Practical Guide for SMBs",
    excerpt: "Step-by-step approach to implementing artificial intelligence solutions in small to medium businesses.",
    author: "David Park",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "AI & Innovation",
    image: "/ai-business-integration.png",
    featured: false,
  },
]

export function BlogSection() {
  const { getParallaxValue } = useAdvancedParallax()

  return (
    <section className="py-20 mb-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" style={{ transform: `translateY(${getParallaxValue(0.2, 1600)}px)` }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with our expert insights on business trends, technology, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <Card
            className="lg:col-span-2 overflow-hidden group hover:shadow-2xl transition-all duration-500"
            style={{ transform: `translateY(${getParallaxValue(0.15, 1800)}px)` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="relative overflow-hidden">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">Featured</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="outline">{blogPosts[0].category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{blogPosts[0].author}</span>
                  </div>
                  <Button className="group/btn hover:scale-105 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Regular Posts */}
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={post.id}
              className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                transform: `translateY(${getParallaxValue(0.1 * (index + 1), 2000)}px)`,
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group/btn hover:scale-105 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
