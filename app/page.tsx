import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WhatYouGet } from "@/components/home/what-you-get"
import { FeaturedPlaybooks } from "@/components/home/featured-playbooks"
import { ServicesSection } from "@/components/home/services-section"
import { WhyItWorks } from "@/components/home/why-it-works"
import { LeadCapture } from "@/components/home/lead-capture"
import { BlogPreview } from "@/components/home/blog-preview"
import { CTASection } from "@/components/home/cta-section"
import { SchemaMarkup } from "@/components/schema-markup"
import {
  organizationSchema,
  websiteSchema,
  generateFAQSchema,
  homePageFAQs,
} from "@/lib/schema"

export const metadata: Metadata = {
  title: "Tech Sales Playbook | Break Into Tech Sales & Crush Your Quota",
  description:
    "The definitive playbook for breaking into tech sales, mastering cold outreach, and accelerating your SaaS sales career. Premium guides and coaching for SDRs, BDRs, and AEs.",
  alternates: {
    canonical: "https://techsalesplaybook.com",
  },
}

export default function HomePage() {
  const faqSchema = generateFAQSchema(homePageFAQs)

  return (
    <div className="flex min-h-screen flex-col">
      <SchemaMarkup schema={[organizationSchema, websiteSchema, faqSchema]} />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <WhatYouGet />
        <FeaturedPlaybooks />
        <ServicesSection />
        <WhyItWorks />
        <LeadCapture />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
