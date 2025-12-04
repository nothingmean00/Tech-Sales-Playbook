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
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-charcoal to-midnight py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-electric/10 border border-electric/20 mb-8">
            <FileText className="h-8 w-8 text-electric" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Free: Cold Email Starter Kit
          </h2>
          
          <p className="mt-4 text-lg text-slate">
            Get 5 proven cold email templates that book meetings. Plus weekly tips on breaking into tech sales.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-3 max-w-md mx-auto">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-slate focus:border-electric focus:ring-electric"
                />
              </div>
              <Button 
                type="submit" 
                variant="electric" 
                size="lg" 
                className="h-14 px-8 group"
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
            <div className="mt-10 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-neon">
                <CheckCircle className="h-8 w-8" />
                <span className="text-xl font-semibold">Check your inbox!</span>
              </div>
              <p className="text-slate">We've sent the Cold Email Starter Kit to your email.</p>
            </div>
          )}

          {error && (
            <p className="mt-4 text-sm text-red-400">{error}</p>
          )}

          <p className="mt-6 text-xs text-slate/60">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
