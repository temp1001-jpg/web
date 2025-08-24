"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function useHoverAnimation() {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return {
    isHovered,
    mousePosition,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove,
    },
  }
}

export function useStaggeredAnimation(itemCount: number, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))
  const [isTriggered, setIsTriggered] = useState(false)

  const triggerAnimation = () => {
    if (isTriggered) return
    setIsTriggered(true)

    for (let i = 0; i < itemCount; i++) {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newState = [...prev]
          newState[i] = true
          return newState
        })
      }, i * delay)
    }
  }

  return { visibleItems, triggerAnimation, isTriggered }
}

export function useFloatingAnimation() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const floatY = Math.sin(offset * 0.05) * 10
  const floatX = Math.cos(offset * 0.03) * 5

  return { floatX, floatY }
}
