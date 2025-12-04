import { NextRequest, NextResponse } from "next/server"
import { stripe, STRIPE_PRICES, ProductSlug } from "@/lib/stripe"
import { playbooks, services } from "@/lib/data"

export async function POST(request: NextRequest) {
  try {
    // Check if Stripe is configured
    if (!stripe) {
      return NextResponse.json(
        { 
          error: "Payment system not configured. Please add STRIPE_SECRET_KEY to your environment variables.",
          setup: true 
        },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { productSlug, productType } = body as {
      productSlug: ProductSlug
      productType: "playbook" | "service"
    }

    // Validate product exists
    const product =
      productType === "playbook"
        ? playbooks.find((p) => p.slug === productSlug)
        : services.find((s) => s.id === productSlug)

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    const priceId = STRIPE_PRICES[productSlug]

    if (!priceId) {
      // Fallback: create a price on the fly (for development)
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: product.title,
                description: product.description,
              },
              unit_amount: product.price * 100, // Stripe uses cents
            },
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/${productType === "playbook" ? "playbooks" : "offerings"}/${productSlug}`,
        metadata: {
          productSlug,
          productType,
        },
        customer_email: body.email || undefined,
      })

      return NextResponse.json({ url: session.url })
    }

    // Use pre-created price from Stripe
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/${productType === "playbook" ? "playbooks" : "offerings"}/${productSlug}`,
      metadata: {
        productSlug,
        productType,
      },
      customer_email: body.email || undefined,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
