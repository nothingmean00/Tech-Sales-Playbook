import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { guides } from "@/lib/data"
import { ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tactical insights and frameworks for tech sales careers. Cold calling, outbound prospecting, discovery calls, interviews, and career strategy.",
  openGraph: {
    title: "Blog | Free Tech Sales Guides",
    description:
      "Tactical insights and frameworks for tech sales careers.",
    url: "https://techsalesplaybook.com/blog",
  },
  alternates: {
    canonical: "https://techsalesplaybook.com/blog",
  },
}

export default function BlogPage() {
  const categories = [...new Set(guides.map((g) => g.category))]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="gradient-midnight py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-brass">Free Resources</span>
              <h1 className="mt-4 text-white">The Blog</h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-light">
                Tactical insights, proven frameworks, and career advice to accelerate your tech sales journey. 
                No email required.
              </p>
              <div className="bold-divider-brass mx-auto mt-10" />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-midnight/10 bg-white py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge variant="signal" className="cursor-pointer">All</Badge>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-brass/10">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-ivory-warm py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide, index) => (
                <Link
                  key={guide.slug}
                  href={`/blog/${guide.slug}`}
                  className="group card-premium p-8 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="signal">{guide.category}</Badge>
                    {guide.readTime && (
                      <span className="flex items-center gap-1 text-xs text-stone">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-lg font-semibold text-midnight group-hover:text-brass transition-colors line-clamp-2">
                    {guide.title}
                  </h2>
                  
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-stone line-clamp-3">
                    {guide.summary}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brass-dark group-hover:text-brass group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
