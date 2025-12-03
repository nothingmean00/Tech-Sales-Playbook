import { Phone, Mail, Search, TrendingUp, Trophy, DollarSign } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Cold Calling Scripts",
    description: "Word-for-word scripts tested across thousands of dials. Openers, objection handlers, and closes that book meetings.",
  },
  {
    icon: Mail,
    title: "Outbound Sequences",
    description: "Multi-channel cadences for email, LinkedIn, and phone that cut through inbox noise and get responses.",
  },
  {
    icon: Search,
    title: "Discovery Frameworks",
    description: "MEDDIC, SPIN, and modern qualification methods to uncover pain, build urgency, and advance deals.",
  },
  {
    icon: TrendingUp,
    title: "Career Roadmaps",
    description: "Step-by-step guides from breaking in, to SDR promotion, to enterprise AE and beyond.",
  },
  {
    icon: Trophy,
    title: "Interview Prep",
    description: "Mock call frameworks, behavioral question banks, and the exact answers that land offers.",
  },
  {
    icon: DollarSign,
    title: "Comp Negotiation",
    description: "Understand OTE structures, equity, accelerators—and how to negotiate like a top closer.",
  },
]

export function WhatYouGet() {
  return (
    <section className="bg-off-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric">What's Inside</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-midnight sm:text-4xl">
            Everything You Need to Succeed in Tech Sales
          </h2>
          <p className="mt-4 text-lg text-slate">
            Practical frameworks, proven scripts, and tactical guides—no fluff, no theory, just what works.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg hover:ring-electric/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric group-hover:bg-electric group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-midnight">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

