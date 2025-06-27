"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState, type ReactNode } from "react"
import type { JSX } from "react/jsx-runtime"

export interface MotionProps {
  children: ReactNode
  className?: string
  initial?: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
  }
  animate?: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
  }
  transition?: {
    duration?: number
    delay?: number
    ease?: string
  }
  viewport?: {
    once?: boolean
    margin?: string
  }
}

// Motion animation component for scroll animations
export function Motion({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  viewport = { once: true, margin: "-100px 0px" },
}: MotionProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        rootMargin: viewport.margin,
        threshold: 0.1,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [viewport.margin])

  // Calculate styles based on animation state
  const style = {
    opacity: isInView ? animate.opacity : initial.opacity,
    transform: `translateY(${isInView ? animate.y : initial.y}px)`,
    transition: `opacity ${transition.duration}s, transform ${transition.duration}s`,
    transitionDelay: transition.delay ? `${transition.delay}s` : "0s",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

export interface CountUpProps {
  end: string | number
  duration?: number
  className?: string
}

// Number counter animation
export function CountUp({ end, duration = 2, className = "" }: CountUpProps): JSX.Element {
  const [count, setCount] = useState<number | string>(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        rootMargin: "-100px 0px",
        threshold: 0.1,
      },
    )

    const currentRef = countRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number | null = null

    // Handle different formats
    let targetValue: number = typeof end === "number" ? end : 0
    if (typeof end === "string") {
      // Handle strings like "$300M+" or ">5M"
      if (end.includes("M")) {
        targetValue = Number.parseInt(end.replace(/[^0-9]/g, ""))
      } else if (end.includes("+")) {
        targetValue = Number.parseInt(end.replace(/[^0-9]/g, ""))
      } else if (end.includes(">")) {
        targetValue = Number.parseInt(end.replace(/[^0-9]/g, ""))
      } else {
        targetValue = Number.parseInt(end)
      }
    }

    // If we couldn't parse a number, just display the original string
    if (isNaN(targetValue)) {
      setCount(end)
      return
    }

    const startValue = 0

    const step = (timestamp: number): void => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = Math.floor(progress * (targetValue - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(targetValue)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  // Format the count to match the original format
  const formattedCount = (): string | number => {
    if (typeof end === "string") {
      if (end.startsWith("$")) return `$${count}${end.includes("M") ? "M" : ""}${end.includes("+") ? "+" : ""}`
      if (end.includes("M")) return `${count}M${end.includes("+") ? "+" : ""}`
      if (end.startsWith(">")) return `>${count}${end.includes("M") ? "M" : ""}`
      return `${count}${end.includes("+") ? "+" : ""}`
    }
    return count
  }

  return (
    <span ref={countRef} className={className}>
      {formattedCount()}
    </span>
  )
}

export interface AnimatedAccordionProps {
  isOpen: boolean
  children: ReactNode
  className?: string
}

// Accordion animation
export function AnimatedAccordion({ isOpen, children, className = "" }: AnimatedAccordionProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen, children])

  return (
    <div
      className={cn("overflow-hidden transition-all duration-300", className)}
      style={{ height: isOpen ? `${height}px` : "0px" }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
