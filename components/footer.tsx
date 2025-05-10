import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/30">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.svg" 
                alt="Pulsed Logo" 
                width={24} 
                height={24} 
                className="h-6 w-6"
              />
              <span className="font-bold text-purple-400">Pulsed, Inc.</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">Software development and publishing.</p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-purple-400">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-purple-400">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-purple-400">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/O4bit/Pulsed-Technologies-0i"
                className="text-muted-foreground transition-colors hover:text-purple-400"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://bsky.app" className="text-muted-foreground transition-colors hover:text-purple-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 8.4l11 6.4 11-6.4L12 2zm0 12.8L1 21.2l11-6.4 11 6.4L12 14.8z" />
                </svg>
                <span className="sr-only">Bluesky</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-purple-900/30 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pulsed, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
