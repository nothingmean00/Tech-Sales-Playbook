import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { featuredGuides } from "@/lib/data"

export function BlogPreview() {
  return (
    <section className="relative bg-ivory-warm py-24 sm:py-32 overflow-hidden">
      {/* Subtle texture */}
      <div className="texture-overlay absolute inset-0" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="eyebrow">Free Resources</span>
            <h2 className="mt-4 text-midnight">Latest Guides</h2>
            <p className="mt-4 text-lg text-stone leading-relaxed">
              Tactical insights and frameworks to accelerate your tech sales career.
            </p>
            <div className="bold-divider mt-8" />
          </div>
          <Button variant="outline" size="lg" asChild className="shrink-0">
            <Link href="/blog" className="gap-2">
              View All Guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGuides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/blog/${guide.slug}`}
              className="group card-premium p-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category & Time */}
              <div className="flex items-center gap-3 mb-6">
                <span className="trust-badge text-[9px]">
                  {guide.category}
                </span>
                {guide.readTime && (
                  <span className="flex items-center gap-1 text-xs text-stone">
                    <Clock className="h-3 w-3" />
                    {guide.readTime}
                  </span>
                )}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-midnight group-hover:text-brass transition-colors mb-3 line-clamp-2">
                {guide.title}
              </h3>
              <p className="text-stone leading-relaxed line-clamp-3 mb-6">
                {guide.summary}
              </p>
              
              {/* Read more */}
              <span className="flex items-center gap-2 text-sm font-medium text-brass-dark group-hover:text-brass group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
