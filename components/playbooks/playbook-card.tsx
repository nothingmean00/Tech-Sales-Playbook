import Link from "next/link"
import { ArrowRight, Rocket, Phone, Mail, Search, TrendingUp, Building, Trophy, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Playbook } from "@/lib/data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  phone: Phone,
  mail: Mail,
  search: Search,
  "trending-up": TrendingUp,
  building: Building,
  trophy: Trophy,
  "dollar-sign": DollarSign,
}

interface PlaybookCardProps {
  playbook: Playbook
  isBestseller?: boolean
}

export function PlaybookCard({ playbook, isBestseller }: PlaybookCardProps) {
  const Icon = iconMap[playbook.icon] || Rocket
  
  return (
    <Link
      href={`/playbooks/${playbook.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-xl hover:ring-electric/20"
    >
      {isBestseller && (
        <Badge className="absolute top-4 right-4 bg-neon text-midnight">
          Bestseller
        </Badge>
      )}
      
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10 text-electric group-hover:bg-electric group-hover:text-white transition-colors">
        <Icon className="h-7 w-7" />
      </div>
      
      <h3 className="mt-6 text-xl font-bold text-midnight group-hover:text-electric transition-colors">
        {playbook.title}
      </h3>
      
      <p className="mt-3 flex-grow text-sm leading-relaxed text-slate">
        {playbook.description}
      </p>
      
      <ul className="mt-6 space-y-2">
        {playbook.contents.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
            <span className="line-clamp-1">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-6">
        <span className="text-2xl font-bold text-midnight">${playbook.price}</span>
        <span className="flex items-center gap-1 text-sm font-medium text-electric group-hover:gap-2 transition-all">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}

