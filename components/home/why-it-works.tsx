import { Target, Repeat, Award, Users } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Tactical, Not Theoretical",
    description:
      "Every guide is built from real-world experience. Practical scripts and frameworks tested in actual sales cycles. No MBA fluff.",
  },
  {
    icon: Repeat,
    title: "Repeatable Systems",
    description:
      "Success in sales isn't about talent—it's about systems. We break down the exact processes top performers use, step by step.",
  },
  {
    icon: Award,
    title: "Actionable Frameworks",
    description:
      "Our guides give you concrete playbooks to help you land your first tech sales role and hit your quota consistently.",
  },
  {
    icon: Users,
    title: "Built by Practitioners",
    description:
      "Created by people who've been in the trenches—from SDR to AE, with real experience building sales careers.",
  },
]

export function WhyItWorks() {
  return (
    <section className="relative bg-ivory-deep py-24 sm:py-32 overflow-hidden">
      {/* Subtle texture */}
      <div className="texture-overlay absolute inset-0" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/30 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">Why It Works</span>
          <h2 className="mt-4 text-midnight">
            No Fluff.
            <br />
            <span className="marker-highlight">Just What Works.</span>
          </h2>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            We cut through the noise to give you exactly what you need to succeed.
          </p>
          <div className="bold-divider mt-8" />
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group flex gap-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-midnight to-midnight-light flex items-center justify-center group-hover:from-brass group-hover:to-brass-light transition-all duration-300">
                <reason.icon className="h-6 w-6 text-brass group-hover:text-midnight transition-colors duration-300" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-midnight mb-2">{reason.title}</h3>
                <p className="text-stone leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
