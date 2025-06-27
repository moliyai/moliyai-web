"use client"

import { ArrowUpRight, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAnchorTag } from "@/hooks/useAnchorTag"
import { useTranslation } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import logo from '@/public/images/logo.png'
import Image from "next/image"

interface NavItem {
  href: string
  label: string
}

export function MainNav() {
  const pathname = usePathname()
  const { t } = useTranslation();
  const { handleAnchorClick, navRef, isBurgerMenuOpened, setBurgerMenuOpened } = useAnchorTag()

  const navItems: NavItem[] = [
    { href: "#hero", label: t("common.home") },
    { href: "#about-us", label: t("common.about") },
    { href: "#ready-to-start", label: t("common.contact") },
  ]

  return (
    <>
      <nav ref={navRef} className="hidden lg:flex gap-4 xl:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm whitespace-nowrap font-medium transition-colors hover:text-primary",
              pathname === item.href ? "text-foreground" : "text-muted-foreground",
            )}
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
      <Sheet open={isBurgerMenuOpened} onOpenChange={setBurgerMenuOpened}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="px-2 py-6">
            <Link href="/" className="flex items-center mb-8" onClick={() => setBurgerMenuOpened(false)}>
              <Image src={logo.src} alt="MoliyAI" width={120} height={30} className="h-8 w-auto" />
            </Link>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      handleAnchorClick(e, item.href)
                    } else {
                      setBurgerMenuOpened(false)
                    }
                  }}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="tel:+998900472400"
                className="flex items-center text-sm font-medium"
                target="_blank"
              >
                +998900472400
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="mailto:info@moliy.ai"
                className="flex items-center text-sm font-medium"
                target="_blank"
              >
                info@moliy.ai
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
