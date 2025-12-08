"use client"

import { useState } from "react"
import { ArrowRight, Mail, CheckCircle, FileText, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LeadCapture() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!email) return

    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json()
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/30 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-midnight to-midnight-light flex items-center justify-center mb-8 animate-fade-up">
            <FileText className="h-8 w-8 text-brass" />
          </div>

          <span className="eyebrow animate-fade-up delay-100">Free Download</span>
          
          <h2 className="mt-4 text-midnight animate-fade-up delay-200">
            Cold Email Starter Kit
          </h2>
          
          <p className="mt-4 text-lg text-stone leading-relaxed animate-fade-up delay-300">
            Get 5 proven cold email templates that book meetings. Plus weekly insights on building your sales career.
          </p>

          <div className="bold-divider-brass mx-auto mt-8 mb-10 animate-fade-up delay-400" />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-up delay-500">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="pl-12 h-14 bg-ivory border-midnight/20 text-midnight placeholder:text-stone focus:border-brass focus:ring-brass"
                />
              </div>
              <Button 
                type="submit" 
                variant="brass" 
                size="xl" 
                className="group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Kit
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-8 animate-fade-up">
              <div className="w-16 h-16 bg-sage text-white flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-midnight">Check your inbox!</h3>
              <p className="mt-2 text-stone">
                We&apos;ve sent the Cold Email Starter Kit to your email.
              </p>
            </div>
          )}

          {error && (
            <p className="mt-4 text-sm text-burgundy font-medium">{error}</p>
          )}

          <p className="mt-6 text-xs text-stone">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
