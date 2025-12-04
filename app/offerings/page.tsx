import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CheckoutButton } from "@/components/checkout-button"
import { services, playbooks } from "@/lib/data"
import { Check, FileText, PenTool, Clock, Star, BookOpen, Rocket, Phone, Mail, Search, TrendingUp, Building, Trophy, DollarSign } from "lucide-react"

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "resume-review": FileText,
  "resume-rewrite": PenTool,
}

const playbookIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  phone: Phone,
  mail: Mail,
  search: Search,
  "trending-up": TrendingUp,
  building: Building,
  trophy: Trophy,
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
        <section className="bg-midnight py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Our Offerings
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Everything you need to break into tech sales and crush your quota.
              </p>
            </div>
          </div>
        </section>

        {/* Playbooks Section */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-electric">Digital Products</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-midnight">
                  The Playbooks
                </h2>
                <p className="mt-2 text-slate">Tactical PDF guides for every stage of your career.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {playbooks.map((playbook, index) => {
                const Icon = playbookIconMap[playbook.icon] || BookOpen
                return (
                  <Link
                    key={playbook.slug}
                    href={`/playbooks/${playbook.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-xl hover:ring-electric/20"
                  >
                    {index === 0 && (
                      <span className="absolute top-3 right-3 rounded-full bg-neon px-2 py-0.5 text-xs font-medium text-midnight">
                        Popular
                      </span>
                    )}
                    
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric group-hover:bg-electric group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="mt-4 text-lg font-bold text-midnight group-hover:text-electric transition-colors line-clamp-1">
                      {playbook.title}
                    </h3>
                    
                    <p className="mt-2 flex-grow text-sm text-slate line-clamp-2">
                      {playbook.description}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-black/5">
                      <span className="text-xl font-bold text-midnight">${playbook.price}</span>
                      <span className="text-sm font-medium text-electric">View →</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Resume Services Section */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-electric">Done-For-You</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-midnight">
                Resume Services
              </h2>
              <p className="mt-2 text-slate">Get your resume optimized by professionals.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = serviceIconMap[service.id] || FileText
                const isFeatured = service.id === "resume-rewrite"
                return (
                  <div
                    key={service.id}
                    className={`relative overflow-hidden rounded-2xl p-8 ${
                      isFeatured 
                        ? "bg-gradient-to-br from-midnight to-charcoal text-white" 
                        : "bg-off-white ring-1 ring-black/5"
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-electric px-3 py-1 text-xs font-medium text-white">
                        <Star className="h-3 w-3" />
                        Best Value
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                        isFeatured ? "bg-electric/20 text-electric" : "bg-electric/10 text-electric"
                      }`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex-grow">
                        <h3 className={`text-2xl font-bold ${isFeatured ? "text-white" : "text-midnight"}`}>
                          {service.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-sm text-slate">
                          <Clock className="h-4 w-4" />
                          {service.turnaround}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <span className={`text-4xl font-bold ${isFeatured ? "text-white" : "text-midnight"}`}>
                        ${service.price}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {service.includes.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
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
        <section className="bg-electric py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Not Sure Where to Start?</h2>
            <p className="mt-4 text-white/80">
              New to tech sales? Grab <strong>The Breaking In Playbook</strong>. Already in the field? 
              Pick the playbook for your current challenge or get your resume polished.
            </p>
            <Link
              href="mailto:support@techsalesplaybook.com"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-electric hover:bg-white/90 transition-colors"
            >
              Ask Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
