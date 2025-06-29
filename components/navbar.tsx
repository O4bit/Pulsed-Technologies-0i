import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image 
            src="/logo.svg" 
            alt="Pulsed Logo" 
            width={35} 
            height={35} 
            className="h-6 w-8"
          />
          <span className="font-bold text-purple-400">Pulsed Inc.</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/about" className="transition-colors hover:text-purple-400">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/Pulsedinc" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
      </div>
    </div>
    </header>
  )
}
