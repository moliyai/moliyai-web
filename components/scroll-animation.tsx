"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState, type ReactNode } from "react"
import type { JSX } from "react/jsx-runtime"

export type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in" | "stagger"

export interface ScrollAnimationProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  className?: string
  threshold?: number
  duration?: number
}

export function ScrollAnimation({
  children,
  type = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.1,
  duration = 0.6,
}: ScrollAnimationProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
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
  }, [threshold])

  const getAnimationClasses = (): string => {
    const baseClasses = "transition-all will-change-transform"
    const durationClass = `duration-${Math.round(duration * 1000)}`
    const delayClass = delay > 0 ? `delay-${delay}` : ""

    if (!isVisible) {
      switch (type) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-left":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "slide-right":
          return `${baseClasses} opacity-0 translate-x-8`
        case "zoom-in":
          return `${baseClasses} opacity-0 scale-95`
        case "stagger":
          return `${baseClasses} opacity-0 translate-y-4`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 ${durationClass} ${delayClass}`
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}

export interface StaggeredAnimationProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredAnimation({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggeredAnimationProps): JSX.Element {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
          <ScrollAnimation key={index} type="stagger" delay={index * staggerDelay}>
            {child}
          </ScrollAnimation>
        ))
        : children}
    </div>
  )
}
