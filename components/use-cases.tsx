"use client"

import { useTranslation } from "@/lib/i18n"
import { motion } from "framer-motion"

export interface UseCase {
  title: string
  description: string
}

export interface UseCasesProps {
  className?: string
}

export function UseCases({ className = "" }: UseCasesProps) {
  const { t } = useTranslation()

  const firstCases: UseCase[] = [
    {
      title: t("useCases.collectionScoring.title"),
      description: t("useCases.collectionScoring.description"),
    },
    {
      title: t("useCases.fraudDetection.title"),
      description: t("useCases.fraudDetection.description"),
    },
    {
      title: t("useCases.monitoring.title"),
      description: t("useCases.monitoring.description"),
    },
    {
      title: t("useCases.creditScoring.title"),
      description: t("useCases.creditScoring.description"),
    },
  ]

  const secondCases: UseCase[] = [
    {
      title: t("useCases.operationalEfficiency.title"),
      description: t("useCases.operationalEfficiency.description"),
    },
    {
      title: t("useCases.riskManagement.title"),
      description: t("useCases.riskManagement.description"),
    },
    {
      title: t("useCases.secureLending.title"),
      description: t("useCases.secureLending.description"),
    },
    {
      title: t("useCases.personalizedOffers.title"),
      description: t("useCases.personalizedOffers.description"),
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
          <h2 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-bold">{t("useCases.title")}</h2>
          <h3 className="mb-6 sm:mb-8 text-lg sm:text-xl font-medium text-muted-foreground">
            {t("useCases.bnplSubtitle")}
          </h3>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm h-full">
                <h3 className="mb-2 font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-6 mt-6 sm:mt-8 sm:mb-8 text-lg sm:text-xl font-medium text-muted-foreground">
            {t("useCases.subtitle")}
          </h3>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {firstCases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-lg border bg-card p-4 sm:p-6 shadow-sm h-full">
                <h3 className="mb-2 font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
