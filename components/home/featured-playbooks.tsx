import Link from "next/link"
import { ArrowRight, Briefcase, Phone, Mail, Search, TrendingUp, Building, Target, DollarSign, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { featuredPlaybooks } from "@/lib/data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  phone: Phone,
  mail: Mail,
  search: Search,
  "trending-up": TrendingUp,
  building: Building,
  target: Target,
  "dollar-sign": DollarSign,
}

export function FeaturedPlaybooks() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-electric">Premium Resources</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-midnight sm:text-4xl">
              The Playbooks
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate">
              Comprehensive guides for every stage of your tech sales career.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/playbooks" className="gap-2">
              View All Playbooks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Playbook Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPlaybooks.map((playbook, index) => {
            const Icon = iconMap[playbook.icon] || BookOpen
            return (
              <Link
                key={playbook.slug}
                href={`/playbooks/${playbook.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-midnight to-charcoal p-8 transition-all hover:shadow-2xl hover:shadow-electric/10"
              >
                {index === 0 && (
                  <Badge className="absolute top-4 right-4 bg-neon text-midnight">
                    Most Popular
                  </Badge>
                )}
                
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-electric/20 text-electric">
                  <Icon className="h-7 w-7" />
                </div>
                
                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-electric transition-colors">
                  {playbook.title}
                </h3>
                
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate">
                  {playbook.description}
                </p>
                
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-2xl font-bold text-white">${playbook.price}</span>
                  <span className="flex items-center gap-1 text-sm font-medium text-electric group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

