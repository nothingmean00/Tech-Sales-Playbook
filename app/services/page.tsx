import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"
import { Check, FileText, PenTool, ArrowRight, Clock, Star } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "resume-review": FileText,
  "resume-rewrite": PenTool,
}

export const metadata: Metadata = {
  title: "Resume Services | Tech Sales Playbook",
  description:
    "Get your resume optimized for tech sales roles. Professional resume reviews and complete rewrites to help you land SDR, BDR, and AE positions.",
  openGraph: {
    title: "Resume Services | Tech Sales Playbook",
    description:
      "Professional resume reviews and rewrites for tech sales roles.",
    url: "https://techsalesplaybook.com/services",
  },
  alternates: {
    canonical: "https://techsalesplaybook.com/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-midnight py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-electric">Resume Services</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Land More Interviews
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Your resume is your first impression. Get it optimized by professionals who know 
                what tech sales hiring managers are looking for.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service, index) => {
                const Icon = iconMap[service.id] || FileText
                const isFeatured = service.id === "resume-rewrite"
                return (
                  <div
                    key={service.id}
                    className={`relative overflow-hidden rounded-2xl p-8 ${
                      isFeatured 
                        ? "bg-gradient-to-br from-electric to-electric-light text-white ring-4 ring-electric/20" 
                        : "bg-white shadow-sm ring-1 ring-black/5"
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                        <Star className="h-3 w-3" />
                        Best Value
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                        isFeatured ? "bg-white/20 text-white" : "bg-electric/10 text-electric"
                      }`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex-grow">
                        <h3 className={`text-2xl font-bold ${isFeatured ? "text-white" : "text-midnight"}`}>
                          {service.title}
                        </h3>
                        <div className={`mt-1 flex items-center gap-2 text-sm ${isFeatured ? "text-white/80" : "text-slate"}`}>
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

                    <p className={`mt-4 text-sm leading-relaxed ${isFeatured ? "text-white/80" : "text-slate"}`}>
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className={`flex items-start gap-2 text-sm ${isFeatured ? "text-white/90" : "text-slate"}`}>
                          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${isFeatured ? "text-white" : "text-neon"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`mt-8 w-full ${
                        isFeatured 
                          ? "bg-white text-electric hover:bg-white/90" 
                          : ""
                      }`}
                      variant={isFeatured ? "default" : "electric"}
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ or Trust Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-midnight">Not Sure Which to Choose?</h2>
            <p className="mt-4 text-slate">
              <strong>Resume Review</strong> is great if you have a solid foundation and just need expert feedback. 
              <strong> Resume Rewrite</strong> is for you if you want us to transform it completely—ideal for career changers.
            </p>
            <Button variant="outline" className="mt-6" asChild>
              <a href="mailto:hello@techsalesplaybook.com">Ask Us</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

