"use client"

import { useTranslation } from "@/lib/i18n"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface CounterProps {
  value: string | number
  duration?: number
  className?: string
}

// Standalone counter component that works independently
function Counter({ value, duration = 2 }: CounterProps) {
  const [count, setCount] = useState<number>(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  // Parse the numeric value from strings like "$300M+" or ">5M"
  const parseValue = (): number => {
    if (typeof value === "number") return value
    const numericPart = value.replace(/[^0-9]/g, "")
    return Number.parseInt(numericPart, 10) || 0
  }

  // Format the count to match the original format
  const formatValue = (num: number): string | number => {
    if (typeof value === "number") return num
    if (typeof value === "string") {
      if (value.startsWith("$")) return `$${num}${value.includes("M") ? "M" : ""}${value.includes("+") ? "+" : ""}`
      if (value.includes("M")) return `${num}M${value.includes("+") ? "+" : ""}`
      if (value.includes("K")) return `${num}K${value.includes("+") ? "+" : ""}`
      if (value.startsWith(">")) return `>${num}${value.includes("M") ? "M" : ""}`
      return `${num}${value.includes("+") ? "+" : ""}`
    }
    return num
  }

  useEffect(() => {
    let startTime = 0
    let animationFrame: number | null = null
    const targetValue = parseValue()

    if (isInView) {
      // Reset counter when coming into view
      setCount(0)

      const step = (timestamp: number): void => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * targetValue))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        } else {
          setCount(targetValue)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{formatValue(count)}</span>
}

export interface StatItem {
  value: string
  label: string
}

export interface StatsProps {
  className?: string
}

export function Stats({ className = "" }: StatsProps) {
  const { t } = useTranslation()

  const stats: StatItem[] = [
    {
      value: t("stats.mfo.value"),
      label: t("stats.mfo.label"),
    },
    {
      value: t("stats.records.value"),
      label: t("stats.records.label"),
    },
    {
      value: t("stats.creditPortfel.value"),
      label: t("stats.creditPortfel.label"),
    },
  ]

  return (
    <section className={`border-b border-border/40 py-12 sm:py-16 ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold">{t("stats.title")}</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm  h-full">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  <Counter value={stat.value} duration={2} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
