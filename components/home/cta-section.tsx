import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-electric to-electric-light py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Break Into Tech Sales?
          </h2>
          
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Practical frameworks and proven scripts to help you land roles at top SaaS companies 
            and crush your quota.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="xl" className="bg-white text-electric hover:bg-white/90 shadow-lg group" asChild>
              <Link href="/offerings" className="gap-2">
                Browse Offerings
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Money-back guarantee badge */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-6 py-3">
            <Shield className="h-6 w-6 text-white" />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">30-Day Money-Back Guarantee</p>
              <p className="text-xs text-white/70">Not satisfied? Full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

