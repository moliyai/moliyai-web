"use client"

import { motion, useInView, useScroll, useSpring, useTransform, type MotionProps } from "framer-motion"
import type { JSX } from "react"
import { useRef, type ReactNode } from "react"

export interface FadeInViewProps extends MotionProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

// Fade animation that triggers on every scroll in/out
export function FadeInView({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  ...props
}: FadeInViewProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerContainerProps extends MotionProps {
  children: ReactNode
  staggerAmount?: number
  className?: string
}

// Staggered children animation
export function StaggerContainer({
  children,
  staggerAmount = 0.1,
  className = "",
  ...props
}: StaggerContainerProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerItemProps extends MotionProps {
  children: ReactNode
  className?: string
}

// Staggered item animation
export function StaggerItem({ children, className = "", ...props }: StaggerItemProps): JSX.Element {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div variants={item} className={className} {...props}>
      {children}
    </motion.div>
  )
}

export interface MotionAccordionProps extends MotionProps {
  isOpen: boolean
  children: ReactNode
  className?: string
}

// Animated accordion using Framer Motion
export function MotionAccordion({ isOpen, children, className = "", ...props }: MotionAccordionProps): JSX.Element {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface CountAnimationProps {
  value: string | number
  duration?: number
  className?: string
}

// // Number counter animation
// export function CountAnimation({ value, duration = 2, className = "" }: CountAnimationProps): JSX.Element {
//   const controls = useAnimation()
//   const ref = useRef<HTMLSpanElement>(null)
//   const isInView = useInView(ref, { once: false, amount: 0.5 })

//   // Parse the value to get the number part
//   const parseValue = (): number => {
//     if (typeof value === "number") return value

//     // Handle strings like "$300M+" or ">5M"
//     const numericPart = value.replace(/[^0-9]/g, "")
//     return Number.parseInt(numericPart, 10)
//   }

//   // Format the final value to match the original format
//   const formatValue = (num: number): string | number => {
//     if (typeof value === "number") return num

//     if (typeof value === "string") {
//       if (value.startsWith("$")) return `$${num}${value.includes("M") ? "M" : ""}${value.includes("+") ? "+" : ""}`
//       if (value.includes("M")) return `${num}M${value.includes("+") ? "+" : ""}`
//       if (value.startsWith(">")) return `>${num}${value.includes("M") ? "+" : ""}`
//       return `${num}${value.includes("+") ? "+" : ""}`
//     }

//     return num
//   }

//   const targetNumber = parseValue()

//   // Start or reset animation when in view changes
//   if (isInView) {
//     controls.start({
//       count: targetNumber,
//       transition: { duration, ease: "easeOut" },
//     })
//   } else {
//     controls.start({ count: 0 })
//   }

//   return (
//     <motion.span ref={ref} initial={{ count: 0 }} animate={controls} className={className}>
//       {({ count }: { count: number }) => formatValue(Math.floor(count))}
//     </motion.span>
//   )
// }

export interface ParallaxScrollProps {
  children: ReactNode
  speed?: number
  className?: string
}

// Parallax scroll effect
export function ParallaxScroll({ children, speed = 0.5, className = "" }: ParallaxScrollProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  )
}
