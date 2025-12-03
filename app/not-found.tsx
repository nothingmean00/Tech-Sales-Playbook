import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-grow items-center justify-center bg-midnight px-6 py-24">
        <div className="text-center">
          <p className="text-6xl font-bold text-electric">404</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
          <p className="mt-4 text-lg text-slate">
            Looks like this page went off-script. Let's get you back on track.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="electric" asChild>
              <Link href="/" className="gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/playbooks" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Browse Playbooks
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

