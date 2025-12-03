import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Tech Sales Playbook. Review our terms and conditions for using our products and services.",
  alternates: {
    canonical: "https://techsalesplaybook.com/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-midnight sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-slate">Last updated: December 2024</p>
          
          <div className="mt-12 space-y-8 text-slate">
            <section>
              <h2 className="text-xl font-bold text-midnight">1. Acceptance of Terms</h2>
              <p className="mt-4 leading-relaxed">
                By accessing or using Tech Sales Playbook, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">2. Products and Services</h2>
              <p className="mt-4 leading-relaxed">
                Tech Sales Playbook offers digital products (guides, playbooks) and services (coaching, resume reviews). 
                All digital products are delivered electronically upon purchase. Services are delivered according 
                to the specific terms outlined at the time of purchase.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">3. Refund Policy</h2>
              <p className="mt-4 leading-relaxed">
                We offer a 30-day money-back guarantee on all digital products. If you are not satisfied 
                with your purchase, contact us within 30 days for a full refund. Services are non-refundable 
                once delivered.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">4. Intellectual Property</h2>
              <p className="mt-4 leading-relaxed">
                All content on Tech Sales Playbook, including guides, articles, and graphics, is owned by 
                Tech Sales Playbook and protected by copyright law. You may not reproduce, distribute, or 
                create derivative works without our written permission.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">5. User Conduct</h2>
              <p className="mt-4 leading-relaxed">
                You agree not to share, resell, or distribute purchased products to third parties. 
                Violation of this term may result in termination of access and legal action.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">6. Disclaimer</h2>
              <p className="mt-4 leading-relaxed">
                Our products and services are for educational purposes only. We do not guarantee 
                specific results, job placements, or income levels. Your success depends on your 
                individual effort and circumstances.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">7. Contact</h2>
              <p className="mt-4 leading-relaxed">
                For questions about these Terms of Service, contact us at{" "}
                <a href="mailto:legal@techsalesplaybook.com" className="text-electric hover:underline">
                  legal@techsalesplaybook.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

