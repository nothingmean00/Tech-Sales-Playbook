import Link from "next/link"
import { ArrowRight, BookOpen, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-ivory overflow-hidden">
      {/* Subtle texture */}
      <div className="texture-overlay absolute inset-0" />
      
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brass via-brass-light to-brass" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          {/* Trust badge */}
          <div className="animate-fade-up mb-8">
            <span className="trust-badge">
              <Shield className="h-3.5 w-3.5" />
              Premium Sales Training
            </span>
          </div>

          {/* Elegant headline */}
          <h1 className="animate-fade-up delay-100 text-midnight">
            Master the Art of
            <br />
            <span className="relative inline-block">
              <span className="marker-highlight">Tech Sales</span>
            </span>
          </h1>

          {/* Refined subhead */}
          <p className="animate-fade-up delay-200 mt-8 text-xl sm:text-2xl text-stone max-w-2xl leading-relaxed">
            Comprehensive playbooks and proven frameworks for breaking into tech sales, 
            mastering cold outreach, and building a successful SaaS sales career.
          </p>

          {/* Premium divider */}
          <div className="animate-fade-up delay-300 bold-divider-brass mt-10" />

          {/* CTAs */}
          <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 mt-10">
            <Button variant="brass" size="xl" asChild className="group">
              <Link href="/playbooks" className="gap-3">
                Explore Playbooks
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="group border-midnight/20 hover:border-midnight hover:bg-midnight hover:text-white">
              <Link href="/blog" className="gap-3">
                <BookOpen className="h-5 w-5" />
                Free Guides
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up delay-500 mt-16 pt-10 border-t border-midnight/10">
            <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-stone">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-brass rounded-full" />
                <span>Instant PDF Download</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-brass rounded-full" />
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-brass rounded-full" />
                <span>Real Scripts & Templates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-sage rounded-full" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="hidden lg:block absolute right-0 top-1/4 w-px h-48 bg-gradient-to-b from-transparent via-brass/30 to-transparent" />
    </section>
  )
}
