import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { JobBoard } from "@/components/jobs/job-board"
import { Button } from "@/components/ui/button"
import { Briefcase, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tech Sales Jobs | SDR, BDR & AE Positions",
  description:
    "Find the best SDR, BDR, and Account Executive jobs at top SaaS companies. Updated daily with remote and hybrid tech sales positions.",
  keywords: [
    "SDR jobs",
    "BDR jobs",
    "tech sales jobs",
    "SaaS sales jobs",
    "account executive jobs",
    "sales development representative",
    "remote sales jobs",
  ],
  openGraph: {
    title: "Tech Sales Jobs | SDR, BDR & AE Positions",
    description: "Find the best SDR, BDR, and Account Executive jobs at top SaaS companies.",
    url: "https://techsalesplaybook.com/jobs",
  },
  alternates: {
    canonical: "https://techsalesplaybook.com/jobs",
  },
}

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="gradient-midnight py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="trust-badge-dark mb-6 inline-flex">
                <Briefcase className="h-4 w-4" />
                <span>Updated Daily</span>
              </div>
              <h1 className="text-white">Tech Sales Jobs</h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-light">
                SDR, BDR, and Account Executive positions at top SaaS companies. 
                Find your next role and crush your quota.
              </p>
              <div className="bold-divider-brass mx-auto mt-10" />
            </div>
          </div>
        </section>

        {/* Upsell Banner */}
        <section className="bg-brass py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-midnight text-center sm:text-left">
                <strong>New to tech sales?</strong> Get our Breaking In Playbook to land your first SDR role.
              </p>
              <Button size="sm" variant="midnight" asChild>
                <Link href="/playbooks/breaking-into-tech-sales" className="gap-2">
                  Get the Playbook
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Job Board */}
        <section className="bg-ivory-warm py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <JobBoard />
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-midnight py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-white">Prepare for Your Interviews</h2>
            <p className="mt-4 text-stone-light">
              Found a role you like? Make sure you're ready to crush the interview with our playbooks.
            </p>
            <div className="bold-divider-brass mx-auto mt-8 mb-10" />
            <Button variant="brass" size="lg" asChild>
              <Link href="/playbooks" className="gap-2">
                View All Playbooks
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
