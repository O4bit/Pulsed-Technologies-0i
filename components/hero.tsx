import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-purple-300 from-30% via-purple-400 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Pulsed Inc.
          <br />
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We develop and publish software.
        </p>
      </div>
      <div>
        <Link href="/about">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            About Us
          </Button>
        </Link>
      </div>
    </section>
  )
}
