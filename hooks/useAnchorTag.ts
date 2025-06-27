import { useRef, useState } from "react"

export const useAnchorTag = () => {
  const navRef = useRef<HTMLDivElement>(null)
  const [isBurgerMenuOpened, setBurgerMenuOpened] = useState(false)

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    // Only handle anchor links
    if (!href.startsWith("#")) return

    e.preventDefault()

    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)


    if (targetElement) {
      // Get navbar height for offset
      const navbarHeight = navRef.current?.offsetHeight || 50
      // Add a buffer of 16px to ensure the section is comfortably below the navbar
      const offset = navbarHeight + 16
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset

      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      if (isBurgerMenuOpened) {
        setBurgerMenuOpened(false)
      }
    }
  }

  return { handleAnchorClick, navRef, isBurgerMenuOpened, setBurgerMenuOpened }
}
