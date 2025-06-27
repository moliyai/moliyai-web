"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n"
import useEmblaCarousel from "embla-carousel-react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState, type RefObject } from "react"

export interface Achievement {
  image: string
  title: string
  description: string
}

export interface AchievementsProps {
  className?: string
}

export function Achievements({ className = "" }: AchievementsProps) {
  const { t } = useTranslation()

  // Define Embla options type 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    loop: false,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false)
  const [canScrollNext, setCanScrollNext] = useState<boolean>(true)
  const [autoplay, setAutoplay] = useState<boolean>(true)
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  const achievements: Achievement[] = [
    {
      image: "/achievement1.png",
      title: t("achievements.aiStartup.title"),
      description: t("achievements.aiStartup.description"),
    },
    {
      image: "/achievement2.png",
      title: t("achievements.fintech.title"),
      description: t("achievements.fintech.description"),
    },
    {
      image: "/achievement3.png",
      title: t("achievements.topAI.title"),
      description: t("achievements.topAI.description"),
    },
  ]

  // Initialize embla events
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = (): void => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    // Call once initially
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi])

  // Handle autoplay
  useEffect(() => {
    if (autoplay && emblaApi && isInView) {
      // Clear any existing interval
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }

      // Set new interval
      autoplayIntervalRef.current = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollTo(0) // Loop back to start
        }
      }, 3000)
    } else if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [autoplay, emblaApi, isInView])

  // Pause autoplay on hover
  const handleMouseEnter = (): void => setAutoplay(false)
  const handleMouseLeave = (): void => setAutoplay(true)

  // Navigation handlers
  const scrollPrev = (): void => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const scrollNext = (): void => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const scrollTo = (index: number): void => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <section
      className={`border-b border-border/40 py-12 sm:py-16 ${className}`}
      ref={containerRef as RefObject<HTMLElement>}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-center sm:text-left">
            {t("achievements.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {achievements.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="h-full">
                    <Card className="h-full">
                      <CardContent className="flex aspect-video flex-col items-center justify-center p-4 sm:p-6">
                        <div className="relative h-32 sm:h-40 w-full mb-4">
                          <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-md">
                            <p className="text-center text-muted-foreground">{item.title}</p>
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg font-medium">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground text-center">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="rounded-full hover:bg-primary/10 active:scale-95 transition-transform"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <div className="flex gap-1 items-center">
              {achievements.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 p-0 rounded-full transition-colors ${currentIndex === index ? "bg-primary" : "bg-muted hover:bg-primary/30"
                    }`}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="rounded-full hover:bg-primary/10 active:scale-95 transition-transform"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
