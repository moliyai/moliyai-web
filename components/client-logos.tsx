import Image from "next/image"

export interface ClientLogosProps {
  className?: string
}
interface Logo {
  name: string
  src: string
}

export function ClientLogos({ className = "" }: ClientLogosProps) {
  const logos: Logo[] = [
    { name: "Client 1", src: "/placeholder.svg?height=40&width=120" },
    { name: "Client 2", src: "/placeholder.svg?height=40&width=120" },
    { name: "Client 3", src: "/placeholder.svg?height=40&width=120" },
    { name: "Client 4", src: "/placeholder.svg?height=40&width=120" },
    { name: "Client 5", src: "/placeholder.svg?height=40&width=120" },
    { name: "Client 6", src: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div className={`flex flex-wrap items-center justify-center gap-8 md:justify-between ${className}`}>
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-12 items-center justify-center opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
        >
          <Image src={logo.src || "/placeholder.svg"} alt={logo.name} width={120} height={40} />
        </div>
      ))}
    </div>
  )
}
