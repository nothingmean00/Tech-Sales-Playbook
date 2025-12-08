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
    <section className="relative bg-ivory-warm py-24 sm:py-32 overflow-hidden">
      {/* Subtle texture */}
      <div className="texture-overlay absolute inset-0" />
      
      {/* Decorative gold line */}
      <div className="absolute left-0 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-brass/40 to-transparent hidden lg:block" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">What&apos;s Inside</span>
          <h2 className="mt-4 text-midnight">
            Everything You Need to
            <br />
            <span className="marker-highlight">Succeed in Tech Sales</span>
          </h2>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Practical frameworks, proven scripts, and tactical guides. No fluff, no theory—just what works.
          </p>
          <div className="bold-divider-brass mt-8" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-premium p-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-midnight to-midnight-light flex items-center justify-center mb-6 group-hover:from-brass group-hover:to-brass-light transition-all duration-300">
                <feature.icon className="h-6 w-6 text-brass group-hover:text-midnight transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-midnight mb-3">{feature.title}</h3>
              <p className="text-stone leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
