"use client"

import { Button } from "@/components/ui/button"
import { useAnchorTag } from "@/hooks/useAnchorTag"
import { useTranslation } from "@/lib/i18n"
import { motion } from "framer-motion"
import Image from "next/image"

export interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className = "" }: HeroSectionProps) {
  const { t } = useTranslation();
  const { handleAnchorClick } = useAnchorTag()

  return (
    <section id='hero' className={`relative border-b border-border/40 ${className}`}>
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-4 items-center sm:grid-cols-1 lg:grid-cols-3"
        >
          <div className="flex w-full flex-col lg:col-span-2   items-start gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold tracking-tight md:text-4xl lg:text-5xl leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={(e) => handleAnchorClick(e, '#ready-to-start')}
              >
                {t("common.talkToUs")}
              </Button>
            </motion.div>
          </div>



          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[350px] xl:h-[400px] col-span-1"
          >
            <Image src="/images/soc.png" alt="scorring" fill className="object-contain" priority />
          </motion.div>
        </motion.div>

        {/* <ParallaxScroll speed={-0.2}>
          <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full"
            >
              <Image src="/images/soc.png" alt="scorring" fill className="object-contain" priority />
            </motion.div>
          </div>
        </ParallaxScroll> */}
      </div>
    </section>
  )
}
