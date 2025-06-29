import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-[62px] w-full items-center justify-between px-4 max-w-screen-2xl mx-auto"> {/* Full width, justify-between, horizontal padding */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.svg" 
              alt="Pulsed Logo" 
              width={48} 
              height={48} 
              className="h-10 w-12"
            />
            <span className="font-bold text-purple-400">Pulsed Inc.</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium ml-4">
            <Link href="/about" className="transition-colors hover:text-purple-400">
              About Us
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <Link href="https://github.com/Pulsedinc" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
