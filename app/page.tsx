import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import HowMoliyWorks from "@/components/how-moliy-works"
import { MainNav } from "@/components/main-nav"
import { ScheduledDevelopmentSection } from "@/components/scheduled-development-section"
import { Stats } from "@/components/stats"
import { TeamMembers } from "@/components/team-members"
import { UseCases } from "@/components/use-cases"
import logo from '@/public/images/logo.png'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex lg:hidden">
            <MainNav />
          </div>
          <div className="hidden lg:flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo.src} alt="MoliyAI" width={150} height={40} className="h-10 w-auto" />
            </Link>
            <MainNav />
          </div>
          <div className="flex lg:hidden items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image src={logo.src} alt="MoliyAI" width={150} height={40} className="h-8 sm:h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="tel:+998900472400"
                className="flex items-center text-sm font-medium whitespace-nowrap"
                target="_blank"
              >
                +998900472400
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="mailto:info@moliy.ai"
                className="hidden lg:flex items-center text-sm font-medium whitespace-nowrap"
                target="_blank"
              >
                info@moliy.ai
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            {/* <LanguageSelector /> */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        <HowMoliyWorks />

        {/* Lucid Section */}
        {/* <LucidSection /> */}

        {/* Use Cases Section */}
        <UseCases />

        {/* E-gpt Section */}
        <ScheduledDevelopmentSection />

        {/* Stats Section */}
        <Stats />

        {/* Achievements Section */}
        {/* <Achievements /> */}

        {/* Team Section */}
        <TeamMembers />

        {/* Second Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
