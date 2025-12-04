import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tech Sales Playbook and our mission to help people break into tech sales and crush their quotas.",
  alternates: {
    canonical: "https://techsalesplaybook.com/about",
  },
}

const values = [
  {
    icon: Target,
    title: "Tactical Over Theoretical",
    description: "Every guide is built from real-world experience. We share what actually works, not what sounds good in a textbook.",
  },
  {
    icon: Lightbulb,
    title: "Action-Oriented",
    description: "Our content is designed to be implemented immediately. Scripts you can use today, frameworks you can apply tomorrow.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Built by practitioners for practitioners. We're in the trenches with you, constantly updating based on what's working.",
  },
  {
    icon: Award,
    title: "Results-Focused",
    description: "We measure success by your success. Roles landed, quotas crushed, promotions earned.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-midnight py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-electric">About Us</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                The Definitive Resource for Tech Sales Careers
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                We're on a mission to democratize access to tech sales knowledge. No gatekeeping, 
                no fluff—just the proven frameworks and scripts that actually work.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-midnight">Our Story</h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate">
              <p>
                Tech Sales Playbook started from a simple observation: the best sales tactics aren't taught in 
                any course. They're passed down informally—from top performers to their mentees, in team 
                Slack channels, over coffee with managers who've been in the trenches.
              </p>
              <p>
                We wanted to change that. To take the frameworks, scripts, and strategies that actually 
                work and make them accessible to everyone—whether you're trying to break into tech sales 
                from a completely different career, or you're an SDR gunning for that AE promotion.
              </p>
              <p>
                Every guide in our library is built from real experience. Cold call scripts tested across 
                thousands of dials. Discovery frameworks refined over hundreds of deals. Career strategies 
                that have helped people land roles at companies like Salesforce, HubSpot, Gong, and fast-growing 
                startups across the tech landscape.
              </p>
              <p>
                This isn't theory. This is what works.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-midnight">What We Believe</h2>
              <p className="mt-4 text-lg text-slate">
                The principles that guide everything we create.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-midnight">{value.title}</h3>
                  <p className="mt-3 text-slate leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-midnight py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Get Started?</h2>
            <p className="mt-4 text-slate">
              Explore our guides and start accelerating your tech sales career today.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button variant="electric" size="lg" asChild>
                <Link href="/playbooks" className="gap-2">
                  Explore the Playbooks
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/blog">Read Free Guides</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

