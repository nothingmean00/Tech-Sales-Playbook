import Link from "next/link"
import { ArrowRight, Briefcase, Phone, Mail, Search, TrendingUp, Building, Target, DollarSign, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/30 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="eyebrow">Premium Resources</span>
            <h2 className="mt-4 text-midnight">The Playbooks</h2>
            <p className="mt-4 text-lg text-stone leading-relaxed">
              Comprehensive guides for every stage of your tech sales career.
            </p>
            <div className="bold-divider-brass mt-8" />
          </div>
          <Button variant="outline" size="lg" asChild className="shrink-0">
            <Link href="/playbooks" className="gap-2">
              View All Playbooks
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Playbook Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPlaybooks.map((playbook, index) => {
            const Icon = iconMap[playbook.icon] || BookOpen
            const isFirst = index === 0
            
            return (
              <Link
                key={playbook.slug}
                href={`/playbooks/${playbook.slug}`}
                className={`group relative flex flex-col p-8 transition-all duration-400 animate-fade-up ${
                  isFirst 
                    ? "card-midnight text-white" 
                    : "card-premium"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Featured badge */}
                {isFirst && (
                  <div className="absolute top-6 right-6 trust-badge-dark">
                    Featured
                  </div>
                )}
                
                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center mb-6 ${
                  isFirst 
                    ? "bg-brass/20 text-brass" 
                    : "bg-midnight text-brass"
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${
                  isFirst ? "text-white" : "text-midnight"
                } group-hover:text-brass transition-colors`}>
                  {playbook.title}
                </h3>
                
                <p className={`flex-grow text-sm leading-relaxed mb-8 ${
                  isFirst ? "text-stone-light" : "text-stone"
                }`}>
                  {playbook.description}
                </p>
                
                <div className={`pt-6 flex items-center justify-between border-t ${
                  isFirst ? "border-white/10" : "border-midnight/10"
                }`}>
                  <span className={`text-2xl font-serif font-semibold ${
                    isFirst ? "text-brass" : "text-midnight"
                  }`}>
                    ${playbook.price}
                  </span>
                  <span className={`flex items-center gap-2 text-sm font-medium ${
                    isFirst ? "text-brass" : "text-brass-dark"
                  } group-hover:gap-3 transition-all`}>
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
