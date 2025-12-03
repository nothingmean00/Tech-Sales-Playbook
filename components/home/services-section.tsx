import Link from "next/link"
import { ArrowRight, FileText, PenTool, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "resume-review": FileText,
  "resume-rewrite": PenTool,
}

export function ServicesSection() {
  return (
    <section className="bg-off-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-electric">Resume Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-midnight sm:text-4xl">
            Get Your Resume Right
          </h2>
          <p className="mt-4 text-lg text-slate">
            Your resume is your first impression. Get it optimized for tech sales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {services.map((service) => {
            const Icon = iconMap[service.id] || FileText
            const isFeatured = service.id === "resume-rewrite"
            return (
              <div
                key={service.id}
                className={`relative overflow-hidden rounded-2xl p-8 ${
                  isFeatured 
                    ? "bg-gradient-to-br from-midnight to-charcoal text-white" 
                    : "bg-white shadow-sm ring-1 ring-black/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    isFeatured ? "bg-electric/20 text-electric" : "bg-electric/10 text-electric"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isFeatured ? "text-white" : "text-midnight"}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate">
                      {service.turnaround}
                    </p>
                  </div>
                </div>

                <p className={`mt-4 text-3xl font-bold ${isFeatured ? "text-white" : "text-midnight"}`}>
                  ${service.price}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate">
                      <Check className="h-4 w-4 shrink-0 text-neon" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button 
                    variant={isFeatured ? "electric" : "outline"} 
                    className="w-full" 
                    asChild
                  >
                    <Link href="/offerings" className="gap-2">
                      {isFeatured ? "Get Rewrite" : "Get Review"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

