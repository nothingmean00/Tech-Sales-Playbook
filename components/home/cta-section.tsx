import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative gradient-midnight py-24 sm:py-32 overflow-hidden">
      {/* Decorative gold accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brass via-brass-light to-brass" />
      <div className="absolute top-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-brass/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-brass/30 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="inline-block eyebrow text-brass-light mb-6 animate-fade-up">
            Ready to Start?
          </span>
          
          <h2 className="text-white animate-fade-up delay-100">
            Start Your Journey
            <br />
            <span className="text-brass">in Tech Sales</span>
          </h2>
          
          <p className="mt-6 text-lg text-stone-light leading-relaxed max-w-xl mx-auto animate-fade-up delay-200">
            Get the frameworks, scripts, and strategies you need to break into tech sales and build a successful career.
          </p>

          <div className="bold-divider-brass mx-auto mt-10 mb-10 animate-fade-up delay-300" />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
            <Button 
              size="xl" 
              variant="brass"
              asChild 
              className="group"
            >
              <Link href="/playbooks" className="gap-3">
                Explore Playbooks
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Guarantee badge */}
          <div className="mt-12 inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 animate-fade-up delay-500">
            <div className="w-10 h-10 bg-brass/20 flex items-center justify-center">
              <Shield className="h-5 w-5 text-brass" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-white">30-Day Money-Back Guarantee</p>
              <p className="text-xs text-stone-light">Not satisfied? Full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
