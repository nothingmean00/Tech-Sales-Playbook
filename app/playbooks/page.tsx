import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PlaybookCard } from "@/components/playbooks/playbook-card"
import { playbooks } from "@/lib/data"
import { ArrowRight, BookOpen, Shield, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Playbooks",
  description:
    "Comprehensive guides for breaking into tech sales, mastering cold outreach, discovery calls, closing, and advancing your career. Tactical frameworks that actually work.",
  keywords: [
    "tech sales playbook",
    "SDR training guide",
    "cold calling scripts",
    "outbound prospecting",
    "sales development",
    "discovery call framework",
    "closing techniques",
  ],
  openGraph: {
    title: "The Playbooks | Premium Tech Sales Guides",
    description:
      "Comprehensive guides for breaking into tech sales, mastering outreach, and crushing your quota.",
    url: "https://techsalesplaybook.com/playbooks",
  },
  alternates: {
    canonical: "https://techsalesplaybook.com/playbooks",
  },
}

export default function PlaybooksPage() {
  const totalValue = playbooks.reduce((sum, p) => sum + p.price, 0)
  const bundlePrice = Math.round(totalValue * 0.65)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="gradient-midnight py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-brass">Premium Resources</span>
              <h1 className="mt-4 text-white">The Playbooks</h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-light">
                Tactical guides for every stage of your tech sales career. Each playbook is packed with 
                proven scripts, frameworks, and strategies—no fluff, just what works.
              </p>

              {/* Value props */}
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-stone-light">
                  <BookOpen className="h-5 w-5 text-brass" />
                  <span className="text-sm">Instant PDF Download</span>
                </div>
                <div className="flex items-center gap-2 text-stone-light">
                  <RefreshCw className="h-5 w-5 text-brass" />
                  <span className="text-sm">Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-2 text-stone-light">
                  <Shield className="h-5 w-5 text-brass" />
                  <span className="text-sm">30-Day Money Back</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="bg-brass py-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-midnight">Complete Bundle: All 8 Playbooks</p>
                <p className="text-sm text-midnight/70">
                  <span className="line-through">${totalValue}</span> <span className="font-bold">${bundlePrice}</span>{" "}
                  — Save 35%
                </p>
              </div>
              <Button variant="midnight" size="sm">
                Get the Bundle
              </Button>
            </div>
          </div>
        </section>

        {/* Playbooks Grid */}
        <section className="bg-ivory-warm py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {playbooks.map((playbook, index) => (
                <PlaybookCard key={playbook.slug} playbook={playbook} isBestseller={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="gradient-midnight py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-white">Not Sure Where to Start?</h2>
            <p className="mt-4 text-stone-light">
              New to tech sales? Start with The Breaking In Playbook. It covers everything you need 
              to land your first SDR role.
            </p>
            <div className="bold-divider-brass mx-auto mt-8 mb-10" />
            <Button variant="brass" size="lg" asChild>
              <Link href="/playbooks/breaking-into-tech-sales" className="gap-2">
                Start with Breaking In
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
