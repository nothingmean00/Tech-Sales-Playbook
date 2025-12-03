import Link from "next/link"
import { ArrowRight, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-midnight min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl animate-float delay-3" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Trust Badge */}
          <div className="animate-fade-up flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/10 border border-neon/20 px-4 py-2 text-sm text-neon">
              <Shield className="h-4 w-4" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-1 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Break Into Tech Sales.{" "}
            <span className="bg-gradient-to-r from-electric to-neon bg-clip-text text-transparent">
              Crush Your Quota.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-2 mt-6 text-lg leading-relaxed text-slate sm:text-xl max-w-2xl mx-auto">
            The complete playbook for landing your first SDR role, mastering cold outreach, 
            and accelerating to Account Executive.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="electric" size="xl" asChild className="group">
              <Link href="/offerings" className="gap-2">
                Browse Offerings
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white">
              <Link href="/blog" className="gap-2">
                <Zap className="h-5 w-5" />
                Free Guides
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up delay-4 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-neon" />
              <span>Instant PDF Download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-neon" />
              <span>Lifetime Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-neon" />
              <span>Real Scripts & Templates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
