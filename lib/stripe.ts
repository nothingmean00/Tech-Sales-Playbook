import Stripe from "stripe"

// Create Stripe instance only if key exists
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-11-17.clover",
      typescript: true,
    })
  : null

// Product price IDs - you'll create these in Stripe Dashboard
export const STRIPE_PRICES = {
  // Playbooks
  "breaking-into-tech-sales": process.env.STRIPE_PRICE_BREAKING_IN || "",
  "cold-calling": process.env.STRIPE_PRICE_COLD_CALLING || "",
  "outbound-prospecting": process.env.STRIPE_PRICE_OUTBOUND || "",
  "discovery-calls": process.env.STRIPE_PRICE_DISCOVERY || "",
  "sdr-to-ae": process.env.STRIPE_PRICE_SDR_TO_AE || "",
  "enterprise-sales": process.env.STRIPE_PRICE_ENTERPRISE || "",
  "closing": process.env.STRIPE_PRICE_CLOSING || "",
  "comp-negotiation": process.env.STRIPE_PRICE_COMP || "",
  // Services
  "resume-review": process.env.STRIPE_PRICE_RESUME_REVIEW || "",
  "resume-rewrite": process.env.STRIPE_PRICE_RESUME_REWRITE || "",
} as const

export type ProductSlug = keyof typeof STRIPE_PRICES
