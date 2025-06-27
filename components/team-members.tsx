"use client"

import { useTranslation } from "@/lib/i18n"
import { motion } from "framer-motion"
import { Globe, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export interface SocialLinks {
  linkedin?: string
  twitter?: string
  website?: string
}

export interface TeamMember {
  name: string
  position: string
  image: string
  bio?: string
  social?: SocialLinks
}

export interface TeamMembersProps {
  className?: string
}

export function TeamMembers({ className = "" }: TeamMembersProps) {
  const { t } = useTranslation()

  const team: TeamMember[] = [
    {
      name: "Bekhzod Aliev",
      position: "Founder & CEO",
      image: '/images/team-members/Bekhzod-Aliev.jpeg',
      bio: "3+ years experience in Microfinance sector Uzbekistan",
      social: {
        linkedin: "https://www.linkedin.com/in/bekhzod-aliev/"
      },
    },
    {
      name: "Otabek Davronbekov",
      position: "Co-Founder & CTO",
      image: '/images/team-members/Otabek-Davronbekov.jpeg',
      bio: "8+ years of experience in Software Development",
      social: {
        linkedin: "https://www.linkedin.com/in/davronbekov/",
      },
    },
    {
      name: "Sevara Alieva",
      position: "Data analyst & EDA Engineer",
      image: '/images/team-members/Sevara-Alieva.jpeg',
      bio: "3+ years of experience in Data Science and Data Analytics",
      social: {
        linkedin: "https://www.linkedin.com/in/sevara-abdullaeva/",
      },
    },
    {
      name: "Jasurkhon Bakhramov",
      position: "ML Engineer",
      image: '/images/team-members/Jasurkhon.jpg',
      bio: "3+ years of experience in ML and Data Science",
      social: {
        linkedin: "https://www.linkedin.com/in/bakhramov/",
      },
    },
  ]

  return (
    <section id='about-us' className={`border-b border-border/40 py-12 sm:py-16 ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center sm:text-left">{t("team.title")}</h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4 h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium">{member.name}</h3>
              <p className="text-primary">{member.position}</p>
              <p className="mt-2 text-center text-xs sm:text-sm text-muted-foreground">{member.bio}</p>
              <div className="mt-4 flex gap-4">
                {member.social?.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                )}
                {member.social?.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                )}
                {member.social?.website && (
                  <a href={member.social.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                    <Globe className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
