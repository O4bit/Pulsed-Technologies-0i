import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { Github } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="container max-w-4xl py-16 md:py-24">
          <div className="mb-16 text-center">
            <div className="mx-auto mb-6 flex justify-center">
              <Image
                src="/logo.svg"
                alt="Pulsed Logo"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full"
              />
            </div>
            <h1 className="bg-gradient-to-br from-purple-300 from-30% via-purple-400 to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              About Us
            </h1>
          </div>
          
          <div className="space-y-12">
            <section className="rounded-lg border border-purple-900/30 bg-card p-8">
              <h2 className="mb-4 text-2xl font-bold text-purple-400">What is Pulsed?</h2>
              <p className="text-lg text-muted-foreground">
                PULSED stands for Pretty Useful and Logical Software Engineering and Development.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">We just publish and develop software. That's it.</p>
            </section>

            <section className="rounded-lg border border-purple-900/30 bg-card p-8">
              <h2 className="mb-4 text-2xl font-bold text-purple-400">Who are we?</h2>
              <p className="text-lg text-muted-foreground">
                Just some folks who like to code and make cool stuff. Nothing fancy.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-purple-400">The Team</h2>

              <div className="grid gap-8 md:grid-cols-2">
                </div>
                <div className="rounded-lg border border-purple-900/30 bg-card p-6 transition-all hover:border-purple-500/50 hover:shadow-md">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-purple-500">
                      <Image
                        src="/public/o4bit.gif"
                        alt="O4bit"
                        width={128}
                        height={128}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-purple-400">O4bit</h3>
                    <p className="mb-3 text-sm text-muted-foreground">Founder & Lead Developer</p>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Floatin n' Codin
                    </p>
                    <div className="flex space-x-3">
                      <Link href="https://github.com/O4bit" className="text-muted-foreground hover:text-purple-400">
                        <Github size={20} />
                      </Link>
                      <Link href="https://bsky.app/o4bit.me" className="text-muted-foreground hover:text-purple-400">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L1 8.4l11 6.4 11-6.4L12 2zm0 12.8L1 21.2l11-6.4 11 6.4L12 14.8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
