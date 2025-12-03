import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { featuredGuides } from "@/lib/data"

export function BlogPreview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-electric">Free Resources</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-midnight sm:text-4xl">
              Latest Guides
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate">
              Tactical insights and frameworks to accelerate your tech sales career.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog" className="gap-2">
              View All Guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/blog/${guide.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-off-white transition-all hover:shadow-lg"
            >
              <div className="flex flex-grow flex-col p-8">
                <div className="flex items-center gap-3">
                  <Badge variant="electric">{guide.category}</Badge>
                  {guide.readTime && (
                    <span className="flex items-center gap-1 text-xs text-slate">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </span>
                  )}
                </div>
                
                <h3 className="mt-4 text-lg font-bold text-midnight group-hover:text-electric transition-colors line-clamp-2">
                  {guide.title}
                </h3>
                
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate line-clamp-3">
                  {guide.summary}
                </p>
                
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-electric group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

