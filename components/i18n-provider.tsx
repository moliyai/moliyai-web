"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { LocaleContext, type Locale, defaultLocale } from "@/lib/i18n"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  // Initialize from localStorage if available (client-side only)
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && (savedLocale === "en" || savedLocale === "ru")) {
      setLocale(savedLocale)
      document.documentElement.lang = savedLocale
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.lang = newLocale
  }

  return <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>{children}</LocaleContext.Provider>
}
