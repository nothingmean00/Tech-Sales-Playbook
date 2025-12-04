import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Purchase Successful",
  description: "Thank you for your purchase. Check your email for next steps.",
}

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-off-white">
        <div className="mx-auto max-w-lg px-6 py-24 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neon/10 mb-8">
            <CheckCircle className="h-10 w-10 text-neon" />
          </div>
          
          <h1 className="text-3xl font-bold text-midnight sm:text-4xl">
            Purchase Successful
          </h1>
          
          <p className="mt-4 text-lg text-slate">
            Thank you for your order. We've sent confirmation and next steps to your email.
          </p>
          
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-3 text-left">
              <Mail className="h-6 w-6 text-electric shrink-0" />
              <div>
                <p className="font-semibold text-midnight">Check your inbox</p>
                <p className="text-sm text-slate">
                  Your download link and instructions are on the way.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="electric" size="lg" asChild>
              <Link href="/playbooks" className="gap-2">
                Browse More Playbooks
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">Read Free Guides</Link>
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-slate">
            Questions? Email us at{" "}
            <a href="mailto:support@techsalesplaybook.com" className="text-electric hover:underline">
              support@techsalesplaybook.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

