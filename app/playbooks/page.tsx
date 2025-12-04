import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { PlaybookCard } from "@/components/playbooks/playbook-card"
import { playbooks } from "@/lib/data"
import { ArrowRight, BookOpen, Shield, RefreshCw } from "lucide-react"
import Link from "next/link"

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
        <section className="bg-midnight py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-electric">Premium Resources</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">The Playbooks</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Tactical guides for every stage of your tech sales career. Each playbook is packed with 
                proven scripts, frameworks, and strategies—no fluff, just what works.
              </p>

              {/* Value props */}
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 text-slate">
                  <BookOpen className="h-5 w-5 text-electric" />
                  <span className="text-sm">Instant PDF Download</span>
                </div>
                <div className="flex items-center gap-2 text-slate">
                  <RefreshCw className="h-5 w-5 text-electric" />
                  <span className="text-sm">Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-2 text-slate">
                  <Shield className="h-5 w-5 text-electric" />
                  <span className="text-sm">30-Day Money Back</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="bg-neon py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold text-midnight">Complete Bundle: All 8 Playbooks</p>
                <p className="text-sm text-midnight/70">
                  <span className="line-through">${totalValue}</span> <span className="font-bold">${bundlePrice}</span>{" "}
                  — Save 35%
                </p>
              </div>
              <button className="rounded-lg bg-midnight px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-charcoal">
                Get the Bundle
              </button>
            </div>
          </div>
        </section>

        {/* Playbooks Grid */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {playbooks.map((playbook, index) => (
                <PlaybookCard key={playbook.slug} playbook={playbook} isBestseller={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-midnight py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Not Sure Where to Start?</h2>
            <p className="mt-4 text-base text-slate">
              New to tech sales? Start with The Breaking In Playbook. It covers everything you need 
              to land your first SDR role.
            </p>
            <Link
              href="/playbooks/breaking-into-tech-sales"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-electric px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-light"
            >
              Start with Breaking In
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
