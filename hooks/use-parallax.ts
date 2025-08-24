"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"

export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return offset
}

export function useAdvancedParallax() {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let ticking = false
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.pageYOffset)
          setIsScrolling(true)
          ticking = false
        })
        ticking = true
      }

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    handleResize()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      clearTimeout(scrollTimeout)
    }
  }, [])

  const getParallaxValue = useCallback(
    (speed: number, elementTop = 0, maxOffset = 50) => {
      const elementPosition = elementTop - scrollY
      const parallaxValue = elementPosition * speed

      // Clamp the value to prevent extreme movements
      return Math.max(-maxOffset, Math.min(maxOffset, parallaxValue))
    },
    [scrollY, windowHeight],
  )

  const getOpacity = useCallback(
    (elementTop: number, fadeDistance = 300) => {
      const elementPosition = elementTop - scrollY
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = Math.abs(elementPosition - viewportCenter)

      const normalizedDistance = Math.min(1, distanceFromCenter / fadeDistance)
      const opacity = Math.max(0, Math.min(1, 1 - normalizedDistance))

      const smoothed = opacity * opacity * opacity * (opacity * (opacity * 6 - 15) + 10)
      return Math.max(0.1, smoothed) // Maintain minimum visibility
    },
    [scrollY, windowHeight],
  )

  const getScale = useCallback(
    (elementTop: number, scaleRange = 0.1) => {
      const elementPosition = elementTop - scrollY
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = Math.abs(elementPosition - viewportCenter)
      const normalizedDistance = Math.min(1, distanceFromCenter / (windowHeight / 2))

      const easedDistance = normalizedDistance * normalizedDistance * (3 - 2 * normalizedDistance)
      return 1 + scaleRange * 0.7 * (1 - easedDistance)
    },
    [scrollY, windowHeight],
  )

  const getRotation = useCallback(
    (elementTop: number, maxRotation = 2) => {
      const elementPosition = elementTop - scrollY
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = elementPosition - viewportCenter
      const normalizedDistance = distanceFromCenter / (windowHeight / 2)

      return Math.max(-maxRotation, Math.min(maxRotation, normalizedDistance * maxRotation * 0.5))
    },
    [scrollY, windowHeight],
  )

  return {
    scrollY,
    windowHeight,
    isScrolling,
    getParallaxValue,
    getOpacity,
    getScale,
    getRotation,
  }
}

export function useSectionParallax(sectionRef: React.RefObject<HTMLElement>) {
  const [isInView, setIsInView] = useState(false)
  const [sectionProgress, setSectionProgress] = useState(0)
  const { scrollY, windowHeight } = useAdvancedParallax()

  useEffect(() => {
    if (!sectionRef.current) return

    const element = sectionRef.current
    const rect = element.getBoundingClientRect()
    const elementTop = rect.top + scrollY
    const elementHeight = rect.height

    // Check if section is in viewport
    const inView = scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight

    setIsInView(inView)

    if (inView) {
      // Calculate progress through the section (0 to 1)
      const progress = Math.max(0, Math.min(1, (scrollY + windowHeight - elementTop) / (elementHeight + windowHeight)))
      setSectionProgress(progress)
    }
  }, [scrollY, windowHeight, sectionRef])

  return { isInView, sectionProgress }
}
