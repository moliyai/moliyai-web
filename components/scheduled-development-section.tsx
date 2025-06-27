"use client"

import { useTranslation } from "@/lib/i18n"
import { motion } from "framer-motion"
import parse from 'html-react-parser'
import { Building2, Database, Store, UserRound } from "lucide-react"

export function ScheduledDevelopmentSection() {
  const { t } = useTranslation()

  const scheduledDevelopmentItems = [
    {
      id: "data-integration",
      title: t("scheduledDevelopment.dataIntegration.title"),
      content: parse(t("scheduledDevelopment.dataIntegration.content")),
      icon: <Database className="h-10 w-10 text-primary" />
    },
    {
      id: "client-monitoring",
      title: t("scheduledDevelopment.clientMonitoring.title"),
      content: parse(t("scheduledDevelopment.clientMonitoring.content")),
      icon: <UserRound className="h-10 w-10 text-primary" />,
    },
    {
      id: "loan-marketplace",
      title: t("scheduledDevelopment.loanMarketplace.title"),
      content: parse(t("scheduledDevelopment.loanMarketplace.content")),
      icon: <Store className="h-10 w-10 text-primary" />,
    },
    {
      id: "business-lending",
      title: t("scheduledDevelopment.businessLending.title"),
      content: parse(t("scheduledDevelopment.businessLending.content")),
      icon: <Building2 className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section className={`border-b border-border/40 py-12 sm:py-16`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Scheduled Development</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scheduledDevelopmentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative border rounded-lg bg-card p-6 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <div className="text-muted-foreground">{item.content}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
