"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, ArrowRight } from "lucide-react"

interface CheckoutButtonProps {
  productSlug: string
  productType: "playbook" | "service"
  children: React.ReactNode
  className?: string
  variant?: "electric" | "default" | "outline"
  size?: "default" | "sm" | "lg" | "xl"
}

export function CheckoutButton({
  productSlug,
  productType,
  children,
  className,
  variant = "electric",
  size = "lg",
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleCheckout = async () => {
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug, productType }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else if (data.setup) {
        // Stripe not configured - show helpful message
        setError("Payment system is being set up. Please try again later or contact support.")
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Checkout error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <Button
        onClick={handleCheckout}
        disabled={isLoading}
        variant={variant}
        size={size}
        className={className}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            {children}
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
      {error && (
        <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
      )}
    </div>
  )
}
