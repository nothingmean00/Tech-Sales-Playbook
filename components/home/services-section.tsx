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
    <section className="relative gradient-midnight py-24 sm:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brass/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brass/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="eyebrow text-brass-light">Resume Services</span>
          <h2 className="mt-4 text-white">Get Your Resume Right</h2>
          <p className="mt-4 text-lg text-stone-light leading-relaxed">
            Your resume is your first impression. Get it optimized for tech sales.
          </p>
          <div className="bold-divider-brass mt-8" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl">
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || FileText
            const isFeatured = service.id === "resume-rewrite"
            
            return (
              <div
                key={service.id}
                className={`relative p-8 transition-all duration-400 animate-fade-up ${
                  isFeatured 
                    ? "bg-gradient-to-br from-brass to-brass-light text-midnight" 
                    : "bg-white/5 backdrop-blur-sm border border-white/10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute top-4 right-4 bg-midnight text-brass text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center ${
                    isFeatured ? "bg-midnight/20 text-midnight" : "bg-brass/20 text-brass"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${isFeatured ? "text-midnight" : "text-white"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm ${isFeatured ? "text-midnight/70" : "text-stone-light"}`}>
                      {service.turnaround}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-4xl font-serif font-semibold ${
                    isFeatured ? "text-midnight" : "text-white"
                  }`}>
                    ${service.price}
                  </span>
                  <span className={`text-sm ${isFeatured ? "text-midnight/70" : "text-stone-light"}`}>
                    one-time
                  </span>
                </div>

                {/* Features list */}
                <ul className="mt-8 space-y-3">
                  {service.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className={`mt-1 w-4 h-4 flex items-center justify-center ${
                        isFeatured ? "bg-midnight/20" : "bg-sage/30"
                      }`}>
                        <Check className={`h-3 w-3 ${isFeatured ? "text-midnight" : "text-sage-light"}`} />
                      </div>
                      <span className={`text-sm ${isFeatured ? "text-midnight/80" : "text-stone-light"}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button 
                    variant={isFeatured ? "midnight" : "brass"} 
                    className="w-full" 
                    size="lg"
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
