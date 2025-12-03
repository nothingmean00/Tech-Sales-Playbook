import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { guides } from "@/lib/data"
import { ArrowLeft, Clock, ArrowRight } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)
  
  if (!guide) {
    return {
      title: "Guide Not Found",
    }
  }

  return {
    title: guide.title,
    description: guide.summary,
    openGraph: {
      title: `${guide.title} | Tech Sales Playbook`,
      description: guide.summary,
      url: `https://techsalesplaybook.com/blog/${slug}`,
      type: "article",
    },
    alternates: {
      canonical: `https://techsalesplaybook.com/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const guide = guides.find((g) => g.slug === slug)

  if (!guide) {
    notFound()
  }

  // Find related guides
  const relatedGuides = guides.filter(
    (g) => g.slug !== slug && g.category === guide.category
  ).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Article Header */}
        <section className="bg-midnight py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate hover:text-electric transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="mt-8 flex items-center gap-3">
              <Badge variant="electric">{guide.category}</Badge>
              {guide.readTime && (
                <span className="flex items-center gap-1 text-sm text-slate">
                  <Clock className="h-4 w-4" />
                  {guide.readTime}
                </span>
              )}
            </div>
            
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {guide.title}
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-slate">
              {guide.summary}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-white py-16 lg:py-24">
          <article className="mx-auto max-w-3xl px-6 lg:px-8">
            <div 
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-midnight
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:leading-relaxed prose-p:text-slate
                prose-strong:text-midnight prose-strong:font-semibold
                prose-ul:my-4 prose-li:text-slate
                prose-a:text-electric prose-a:no-underline hover:prose-a:underline"
            >
              {guide.content?.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index}>{paragraph.replace('## ', '')}</h2>
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index}><strong>{paragraph.replace(/\*\*/g, '')}</strong></p>
                }
                if (paragraph.trim().startsWith('- ')) {
                  return null // Handle lists separately
                }
                if (paragraph.trim()) {
                  return <p key={index}>{paragraph}</p>
                }
                return null
              })}
            </div>
          </article>
        </section>

        {/* CTA Section */}
        <section className="bg-electric py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Want the Complete Playbook?
            </h2>
            <p className="mt-4 text-white/80">
              This guide is just a taste. Get the full playbook with detailed scripts, frameworks, 
              and templates to accelerate your career.
            </p>
            <Button size="lg" className="mt-8 bg-white text-electric hover:bg-white/90" asChild>
              <Link href="/playbooks">
                Explore the Playbooks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Articles */}
        {relatedGuides.length > 0 && (
          <section className="bg-off-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-midnight">Related Articles</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedGuides.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg"
                  >
                    <Badge variant="electric" className="text-xs">{related.category}</Badge>
                    <h3 className="mt-3 font-semibold text-midnight group-hover:text-electric transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate line-clamp-2">{related.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

