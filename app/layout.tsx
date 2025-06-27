import "@/app/globals.css"
import { I18nProvider } from "@/components/i18n-provider"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MoliyAI - AI powered credit scoring solution for underbanked segments in Asia.",
  description: "Our mission is to unlock fair and responsible credit access for everyone—by empowering BNPLs and MFIs with intelligent, inclusive, and secure AI-driven credit scoring.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
