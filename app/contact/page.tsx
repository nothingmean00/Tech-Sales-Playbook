"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Clock, Loader2, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-midnight py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-electric">Get In Touch</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                Have a question about our guides? Want to learn more about our services? 
                We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-off-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Form */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 lg:p-12">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon/10 mb-6">
                      <CheckCircle className="h-8 w-8 text-neon" />
                    </div>
                    <h2 className="text-2xl font-bold text-midnight">Message Sent!</h2>
                    <p className="mt-2 text-slate">
                      We'll get back to you within 24-48 hours. Check your email for a confirmation.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" })
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-midnight">Send Us a Message</h2>
                    <p className="mt-2 text-slate">Fill out the form below and we'll get back to you within 24-48 hours.</p>
                    
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-midnight">
                            First Name
                          </label>
                          <Input 
                            id="firstName" 
                            name="firstName" 
                            className="mt-2" 
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-midnight">
                            Last Name
                          </label>
                          <Input 
                            id="lastName" 
                            name="lastName" 
                            className="mt-2" 
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-midnight">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          className="mt-2" 
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-midnight">
                          Subject
                        </label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          className="mt-2" 
                          placeholder="Question about..."
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-midnight">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          className="mt-2 min-h-32" 
                          placeholder="Tell us how we can help..."
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-500">{error}</p>
                      )}
                      
                      <Button 
                        type="submit"
                        variant="electric" 
                        size="lg" 
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-midnight">Other Ways to Reach Us</h2>
                <p className="mt-2 text-slate">
                  Prefer a different method? Here's how else you can get in touch.
                </p>
                
                <div className="mt-12 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-midnight">Email</h3>
                      <p className="mt-1 text-slate">For general inquiries</p>
                      <a href="mailto:support@techsalesplaybook.com" className="mt-2 block text-electric hover:underline">
                        support@techsalesplaybook.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-midnight">Support</h3>
                      <p className="mt-1 text-slate">For product and service questions</p>
                      <a href="mailto:support@techsalesplaybook.com" className="mt-2 block text-electric hover:underline">
                        support@techsalesplaybook.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-midnight">Response Time</h3>
                      <p className="mt-1 text-slate">We typically respond within 24-48 hours during business days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
