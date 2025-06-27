"use client"

import { sendEmail, type EmailData } from "@/app/actions/send-email"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/lib/i18n"
import { motion } from "framer-motion"
import { useState, type ChangeEvent, type FormEvent } from "react"
import type { JSX } from "react/jsx-runtime"

export interface FormData {
  fullName: string
  email: string
  phone: string
  message: string
  company: string
}

export interface ContactFormProps {
  className?: string
}

export function ContactForm({ className = "" }: ContactFormProps): JSX.Element {
  const { t } = useTranslation()

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const result = await sendEmail(formData as EmailData)
      setFormStatus(result)

      if (result.success) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          company: "",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({ success: false, message: "An unexpected error occurred" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='ready-to-start' className={`border-b border-border/40 py-12 sm:py-16 bg-primary/5 ${className}`}>
      <div className="container">
        <div className="mx-auto max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold">{t("common.readyToStart")}</h2>
            <p className="mb-6 sm:mb-8 text-muted-foreground">{t("common.scheduleDemo")}</p>
          </motion.div>

          {formStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-md ${formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
            >
              {formStatus.message}
            </motion.div>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Input
                name="fullName"
                placeholder={t("common.fullName")}
                value={formData.fullName}
                onChange={handleChange}
                required
                className="bg-background border-input"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Input
                name="email"
                type="email"
                placeholder={t("common.email")}
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background border-input"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Input
                name="phone"
                placeholder={t("common.phone")}
                value={formData.phone}
                onChange={handleChange}
                className="bg-background border-input"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Input
                name="company"
                placeholder={t("common.company")}
                value={formData.company}
                onChange={handleChange}
                className="bg-background border-input"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Textarea
                name="message"
                placeholder={t("common.message")}
                value={formData.message}
                onChange={handleChange}
                className="bg-background border-input resize-none"
                rows={4}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t("common.sending")}
                  </span>
                ) : (
                  t("common.submit")
                )}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
