import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Tech Sales Playbook. Learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://techsalesplaybook.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-midnight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-slate">Last updated: December 2024</p>
          
          <div className="mt-12 space-y-8 text-slate">
            <section>
              <h2 className="text-xl font-bold text-midnight">1. Information We Collect</h2>
              <p className="mt-4 leading-relaxed">
                We collect information you provide directly to us, including your name, email address, 
                and payment information when you purchase our products or services. We also collect 
                information about your usage of our website through cookies and analytics tools.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">2. How We Use Your Information</h2>
              <p className="mt-4 leading-relaxed">
                We use the information we collect to process your purchases, send you updates about 
                our products, improve our services, and communicate with you about your account or 
                transactions.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">3. Information Sharing</h2>
              <p className="mt-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may 
                share your information with service providers who assist us in operating our website 
                and conducting our business.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">4. Data Security</h2>
              <p className="mt-4 leading-relaxed">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">5. Your Rights</h2>
              <p className="mt-4 leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may 
                also opt out of marketing communications at any time by clicking the unsubscribe link 
                in our emails.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-midnight">6. Contact Us</h2>
              <p className="mt-4 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@techsalesplaybook.com" className="text-electric hover:underline">
                  privacy@techsalesplaybook.com
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

