import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CheckoutButton } from "@/components/checkout-button"
import { playbooks } from "@/lib/data"
import { ArrowLeft, Check, Download, Shield, Zap, BookOpen, Rocket, Phone, Mail, Search, TrendingUp, Building, Trophy, DollarSign } from "lucide-react"

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

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return playbooks.map((playbook) => ({
    slug: playbook.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const playbook = playbooks.find((p) => p.slug === slug)
  
  if (!playbook) {
    return {
      title: "Playbook Not Found",
    }
  }

  return {
    title: playbook.title,
    description: playbook.longDescription,
    openGraph: {
      title: `${playbook.title} | Tech Sales Playbook`,
      description: playbook.description,
      url: `https://techsalesplaybook.com/playbooks/${slug}`,
    },
    alternates: {
      canonical: `https://techsalesplaybook.com/playbooks/${slug}`,
    },
  }
}

export default async function PlaybookPage({ params }: Props) {
  const { slug } = await params
  const playbook = playbooks.find((p) => p.slug === slug)

  if (!playbook) {
    notFound()
  }

  const Icon = iconMap[playbook.icon] || BookOpen

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-midnight py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/playbooks"
              className="inline-flex items-center gap-2 text-sm text-slate hover:text-electric transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Playbooks
            </Link>
            
            <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
              {/* Left Column - Info */}
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-electric/20 text-electric">
                  <Icon className="h-8 w-8" />
                </div>
                
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {playbook.title}
                </h1>
                
                <p className="mt-4 text-lg leading-relaxed text-slate">
                  {playbook.longDescription}
                </p>

                {/* Excerpt Preview */}
                <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-medium text-electric">Preview</p>
                  <p className="mt-2 text-sm italic text-slate leading-relaxed">
                    "{playbook.excerpt}"
                  </p>
                </div>
              </div>

              {/* Right Column - Purchase Card */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl bg-white p-8 shadow-2xl">
                  <div className="flex items-baseline justify-between">
                    <span className="text-4xl font-bold text-midnight">${playbook.price}</span>
                    <span className="text-sm text-slate">one-time purchase</span>
                  </div>

                  <CheckoutButton 
                    productSlug={playbook.slug} 
                    productType="playbook"
                    className="mt-6 w-full"
                    size="xl"
                  >
                    <Download className="h-5 w-5" />
                    Buy Now — Instant Download
                  </CheckoutButton>

                  {/* Trust Signals */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate">
                      <Shield className="h-5 w-5 text-neon" />
                      30-day money-back guarantee
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate">
                      <Zap className="h-5 w-5 text-neon" />
                      Lifetime updates included
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate">
                      <BookOpen className="h-5 w-5 text-neon" />
                      Instant PDF download
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-8 border-t pt-6">
                    <p className="font-semibold text-midnight">What's Inside:</p>
                    <ul className="mt-4 space-y-3">
                      {playbook.contents.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-neon" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Playbooks */}
        <section className="bg-off-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-midnight">You Might Also Like</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {playbooks
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((relatedPlaybook) => {
                  const RelatedIcon = iconMap[relatedPlaybook.icon] || BookOpen
                  return (
                    <Link
                      key={relatedPlaybook.slug}
                      href={`/playbooks/${relatedPlaybook.slug}`}
                      className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                        <RelatedIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-midnight group-hover:text-electric transition-colors">
                          {relatedPlaybook.title}
                        </h3>
                        <p className="text-sm text-slate">${relatedPlaybook.price}</p>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
