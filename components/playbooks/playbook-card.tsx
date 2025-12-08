import Link from "next/link"
import { ArrowRight, Briefcase, Phone, Mail, Search, TrendingUp, Building, Target, DollarSign, BookOpen } from "lucide-react"
import type { Playbook } from "@/lib/data"

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

interface PlaybookCardProps {
  playbook: Playbook
  isBestseller?: boolean
}

export function PlaybookCard({ playbook, isBestseller }: PlaybookCardProps) {
  const Icon = iconMap[playbook.icon] || BookOpen
  
  return (
    <Link
      href={`/playbooks/${playbook.slug}`}
      className="group relative flex flex-col card-premium p-8"
    >
      {isBestseller && (
        <span className="absolute top-4 right-4 trust-badge text-[9px]">
          Bestseller
        </span>
      )}
      
      <div className="w-14 h-14 bg-gradient-to-br from-midnight to-midnight-light flex items-center justify-center group-hover:from-brass group-hover:to-brass-light transition-all duration-300">
        <Icon className="h-7 w-7 text-brass group-hover:text-midnight transition-colors duration-300" />
      </div>
      
      <h3 className="mt-6 text-xl font-semibold text-midnight group-hover:text-brass transition-colors">
        {playbook.title}
      </h3>
      
      <p className="mt-3 flex-grow text-sm leading-relaxed text-stone">
        {playbook.description}
      </p>
      
      <ul className="mt-6 space-y-2">
        {playbook.contents.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-stone">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brass" />
            <span className="line-clamp-1">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 flex items-center justify-between border-t border-midnight/10 pt-6">
        <span className="text-2xl font-serif font-semibold text-midnight">${playbook.price}</span>
        <span className="flex items-center gap-2 text-sm font-medium text-brass-dark group-hover:text-brass group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
