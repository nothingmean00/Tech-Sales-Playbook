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
    <section className="bg-midnight py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric">Why It Works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            No Fluff. Just What Works.
          </h2>
          <p className="mt-4 text-lg text-slate">
            We cut through the noise to give you exactly what you need to succeed.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric text-white">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

