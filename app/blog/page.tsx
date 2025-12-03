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
  // Group guides by category
  const categories = [...new Set(guides.map((g) => g.category))]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-midnight py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-electric">Free Resources</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">The Blog</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Tactical insights, proven frameworks, and career advice to accelerate your tech sales journey. 
                No email required.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b bg-white py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge variant="electric" className="cursor-pointer">All</Badge>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-electric/10">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/blog/${guide.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:shadow-xl hover:ring-electric/20"
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
                    
                    <h2 className="mt-4 text-lg font-bold text-midnight group-hover:text-electric transition-colors line-clamp-2">
                      {guide.title}
                    </h2>
                    
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-slate line-clamp-3">
                      {guide.summary}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-1 text-sm font-medium text-electric group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </div>
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

