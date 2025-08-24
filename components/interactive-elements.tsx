"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MousePointer, Zap, Sparkles, Heart, TrendingUp, Users, Award, Target } from "lucide-react"
import { useHoverAnimation, useFloatingAnimation, useStaggeredAnimation } from "@/hooks/use-advanced-animations"

export function InteractiveElements() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [likeCount, setLikeCount] = useState(1247)
  const [isLiked, setIsLiked] = useState(false)
  const floatingAnimation = useFloatingAnimation()
  const { visibleItems, triggerAnimation } = useStaggeredAnimation(4, 200)

  useEffect(() => {
    const timer = setTimeout(triggerAnimation, 500)
    return () => clearTimeout(timer)
  }, [triggerAnimation])

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "text-blue-500" },
    { icon: Award, label: "Awards Won", value: "25+", color: "text-yellow-500" },
    { icon: Target, label: "Projects Done", value: "1000+", color: "text-green-500" },
    { icon: TrendingUp, label: "Growth Rate", value: "150%", color: "text-purple-500" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div
            className="absolute top-10 right-10 text-primary/20"
            style={{
              transform: `translate(${floatingAnimation.floatX}px, ${floatingAnimation.floatY}px)`,
            }}
          >
            <Sparkles className="w-8 h-8 animate-pulse" />
          </div>
          <div
            className="absolute bottom-20 left-10 text-accent/20"
            style={{
              transform: `translate(${-floatingAnimation.floatX}px, ${-floatingAnimation.floatY}px)`,
            }}
          >
            <Zap className="w-6 h-6 animate-bounce" />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Interactive Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our engaging features and interactive elements designed to captivate and inform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <InteractiveStatCard
              key={index}
              stat={stat}
              index={index}
              isVisible={visibleItems[index]}
              onHover={() => setActiveCard(index)}
              onLeave={() => setActiveCard(null)}
              isActive={activeCard === index}
            />
          ))}
        </div>

        <div className="text-center mb-16">
          <Card className="inline-block p-8 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setIsLiked(!isLiked)
                  setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
                }}
                className={`transition-all duration-300 hover:scale-110 ${
                  isLiked ? "bg-red-50 border-red-200 text-red-600 hover:bg-red-100" : "hover:bg-muted"
                }`}
              >
                <Heart
                  className={`w-5 h-5 mr-2 transition-all duration-300 ${
                    isLiked ? "fill-red-500 text-red-500 scale-125" : ""
                  }`}
                />
                {isLiked ? "Liked!" : "Like Us"}
              </Button>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold transition-all duration-300 ${
                    isLiked ? "text-red-500 scale-110" : "text-foreground"
                  }`}
                >
                  {likeCount.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Likes</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <CursorFollowerDemo />
        </div>
      </div>
    </section>
  )
}

function InteractiveStatCard({
  stat,
  index,
  isVisible,
  onHover,
  onLeave,
  isActive,
}: {
  stat: any
  index: number
  isVisible: boolean
  onHover: () => void
  onLeave: () => void
  isActive: boolean
}) {
  const hoverAnimation = useHoverAnimation()

  return (
    <Card
      className={`p-6 text-center transition-all duration-500 hover:shadow-xl cursor-pointer group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isActive ? "scale-105 shadow-2xl" : ""}`}
      {...hoverAnimation.hoverProps}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative">
        <stat.icon
          className={`w-8 h-8 mx-auto mb-4 transition-all duration-300 ${stat.color} ${
            hoverAnimation.isHovered ? "scale-125 rotate-12" : ""
          }`}
        />
        {hoverAnimation.isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-current rounded-full animate-ping opacity-30"></div>
          </div>
        )}
      </div>
      <div
        className={`text-3xl font-bold mb-2 transition-all duration-300 ${hoverAnimation.isHovered ? "scale-110" : ""}`}
      >
        {stat.value}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
      {hoverAnimation.isHovered && (
        <Badge className="mt-2 animate-in fade-in slide-in-from-bottom-2">Hover Effect Active</Badge>
      )}
    </Card>
  )
}

function CursorFollowerDemo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Card
      className="inline-block p-12 relative overflow-hidden cursor-none hover:shadow-2xl transition-all duration-500"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="text-center">
        <MousePointer className="w-8 h-8 mx-auto mb-4 text-primary" />
        <h3 className="text-xl font-bold mb-2">Cursor Interaction Demo</h3>
        <p className="text-muted-foreground">Move your cursor around this area</p>
      </div>

      {isHovering && (
        <div
          className="absolute pointer-events-none z-10 transition-all duration-100"
          style={{
            left: mousePos.x - 10,
            top: mousePos.y - 10,
          }}
        >
          <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute inset-0 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full animate-ping opacity-30"></div>
        </div>
      )}

      <div
        className="absolute inset-0 opacity-10 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.1), transparent)`,
        }}
      />
    </Card>
  )
}
