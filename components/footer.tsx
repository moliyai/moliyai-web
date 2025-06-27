"use client"

import { useAnchorTag } from "@/hooks/useAnchorTag"
import { useTranslation } from "@/lib/i18n"
import logo from '@/public/images/logo.png'
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface FooterProps {
  className?: string
}

interface NavItem {
  href: string
  label: string
}

export function Footer({ className = "" }: FooterProps) {
  const { t } = useTranslation();
  const { handleAnchorClick } = useAnchorTag()

  const navItems: NavItem[] = [
    { href: "#hero", label: t("common.home") },
    { href: "#about-us", label: t("common.about") },
    { href: "#ready-to-start", label: t("common.contact") },
  ]


  return (
    <footer className={`border-t border-border/40 py-6 sm:py-8 ${className}`}>
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo.src} alt="MoliyAI" width={120} height={30} className="h-8 w-auto" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap"
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    handleAnchorClick(e, item.href)
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/company/moliyai/"
              className="text-sm text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://www.instagram.com/moliy.ai/"
              className="text-sm text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61575582759349"
              className="text-sm text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
