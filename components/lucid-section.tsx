"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export interface LucidSectionProps {
  className?: string
}

export function LucidSection({ className = "" }: LucidSectionProps) {
  const { t } = useTranslation()

  return (
    <section className={`border-b border-border/40 py-12 sm:py-16 bg-card ${className}`}>
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold">{t("lucid.title")}</h2>
            <p className="mb-6 text-muted-foreground">{t("lucid.subtitle")}</p>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-2 w-16 rounded-full bg-primary"></div>
              <div className="h-2 w-16 rounded-full bg-orange-500"></div>
            </div>
            <p className="mb-8 text-muted-foreground">{t("lucid.description")}</p>
            <Button className="bg-primary hover:bg-primary/90">{t("lucid.learnMore")}</Button>
          </div>
          <div className="relative h-[250px] sm:h-[300px] w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-36 sm:h-48 w-36 sm:w-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 sm:h-32 w-24 sm:w-32 rotate-45 bg-primary/20 backdrop-blur-md"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-18 sm:h-24 w-18 sm:w-24 rotate-45 bg-primary/30 backdrop-blur-md"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 sm:h-16 w-12 sm:w-16 rotate-45 bg-primary/40 backdrop-blur-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
