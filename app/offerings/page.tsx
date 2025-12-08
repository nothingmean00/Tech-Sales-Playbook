import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CheckoutButton } from "@/components/checkout-button"
import { Button } from "@/components/ui/button"
import { services, playbooks } from "@/lib/data"
import { Check, FileText, PenTool, Clock, Star, BookOpen, Briefcase, Phone, Mail, Search, TrendingUp, Building, Target, DollarSign, ArrowRight } from "lucide-react"

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "resume-review": FileText,
  "resume-rewrite": PenTool,
}

const playbookIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  phone: Phone,
  mail: Mail,
  search: Search,
  "trending-up": TrendingUp,
  building: Building,
  target: Target,
  "dollar-sign": DollarSign,
}

export const metadata: Metadata = {
  title: "Offerings",
  description:
    "Premium playbooks and resume services to accelerate your tech sales career. PDFs, resume reviews, and complete rewrites.",
  openGraph: {
    title: "Offerings | Tech Sales Playbook",
    description:
      "Premium playbooks and resume services for tech sales professionals.",
    url: "https://techsalesplaybook.com/offerings",
  },
  alternates: {
    canonical: "https://techsalesplaybook.com/offerings",
  },
}

export default function OfferingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="gradient-midnight py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-white">Our Offerings</h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-light">
                Everything you need to break into tech sales and crush your quota.
              </p>
              <div className="bold-divider-brass mx-auto mt-10" />
            </div>
          </div>
        </section>

        {/* Playbooks Section */}
        <section className="bg-ivory-warm py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="eyebrow">Digital Products</span>
              <h2 className="mt-4 text-midnight">The Playbooks</h2>
              <p className="mt-4 text-stone">Tactical PDF guides for every stage of your career.</p>
              <div className="bold-divider-brass mt-8" />
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {playbooks.map((playbook, index) => {
                const Icon = playbookIconMap[playbook.icon] || BookOpen
                return (
                  <Link
                    key={playbook.slug}
                    href={`/playbooks/${playbook.slug}`}
                    className="group card-premium p-6 animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {index === 0 && (
                      <span className="absolute top-3 right-3 trust-badge text-[9px]">
                        Popular
                      </span>
                    )}
                    
                    <div className="w-12 h-12 bg-gradient-to-br from-midnight to-midnight-light flex items-center justify-center group-hover:from-brass group-hover:to-brass-light transition-all duration-300">
                      <Icon className="h-6 w-6 text-brass group-hover:text-midnight transition-colors duration-300" />
                    </div>
                    
                    <h3 className="mt-4 text-lg font-semibold text-midnight group-hover:text-brass transition-colors line-clamp-1">
                      {playbook.title}
                    </h3>
                    
                    <p className="mt-2 flex-grow text-sm text-stone line-clamp-2">
                      {playbook.description}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-midnight/10">
                      <span className="text-xl font-serif font-semibold text-midnight">${playbook.price}</span>
                      <span className="text-sm font-medium text-brass-dark group-hover:text-brass transition-colors">View →</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Resume Services Section */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Done-For-You</span>
              <h2 className="mt-4 text-midnight">Resume Services</h2>
              <p className="mt-4 text-stone">Get your resume optimized by professionals.</p>
              <div className="bold-divider-brass mx-auto mt-8" />
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service, index) => {
                const Icon = serviceIconMap[service.id] || FileText
                const isFeatured = service.id === "resume-rewrite"
                return (
                  <div
                    key={service.id}
                    className={`relative p-8 transition-all duration-400 animate-fade-up ${
                      isFeatured 
                        ? "card-midnight" 
                        : "card-premium"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {isFeatured && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-brass text-midnight px-3 py-1 text-xs font-semibold">
                        <Star className="h-3 w-3" />
                        Best Value
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center ${
                        isFeatured ? "bg-brass/20 text-brass" : "bg-midnight text-brass"
                      }`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex-grow">
                        <h3 className={`text-2xl font-serif font-semibold ${isFeatured ? "text-white" : "text-midnight"}`}>
                          {service.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-stone-light">
                          <Clock className="h-4 w-4" />
                          {service.turnaround}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <span className={`text-4xl font-serif font-semibold ${isFeatured ? "text-brass" : "text-midnight"}`}>
                        ${service.price}
                      </span>
                    </div>

                    <p className={`mt-4 text-sm leading-relaxed ${isFeatured ? "text-stone-light" : "text-stone"}`}>
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {service.includes.slice(0, 5).map((item) => (
                        <li key={item} className={`flex items-start gap-2 text-sm ${isFeatured ? "text-stone-light" : "text-stone"}`}>
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <CheckoutButton 
                      productSlug={service.id}
                      productType="service"
                      className="mt-8 w-full"
                      size="lg"
                    >
                      Get Started
                    </CheckoutButton>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brass py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-midnight">Not Sure Where to Start?</h2>
            <p className="mt-4 text-midnight/80">
              New to tech sales? Grab <strong>The Breaking In Playbook</strong>. Already in the field? 
              Pick the playbook for your current challenge or get your resume polished.
            </p>
            <Button variant="midnight" size="lg" className="mt-8" asChild>
              <Link href="mailto:support@techsalesplaybook.com" className="gap-2">
                Ask Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
