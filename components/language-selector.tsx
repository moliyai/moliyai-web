"use client"

import { ChevronDown } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { type Locale, LocaleContext, locales } from "@/lib/i18n"

export interface LanguageSelectorProps {
  className?: string
}

export function LanguageSelector({ className }: LanguageSelectorProps = {}) {
  const { locale, setLocale } = React.useContext(LocaleContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`gap-1 ${className}`}>
          {locale.toUpperCase()}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(locales).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLocale(code as Locale)}
            className={locale === code ? "bg-primary/10" : ""}
          >
            <span className="mr-2">{code === "en" ? "🇬🇧" : "🇷🇺"}</span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
