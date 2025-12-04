import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { resend, FROM_EMAIL, SUPPORT_EMAIL } from "@/lib/resend"
import { playbooks, services } from "@/lib/data"
import Stripe from "stripe"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session

      const { productSlug, productType } = session.metadata || {}
      const customerEmail = session.customer_email || session.customer_details?.email

      if (!customerEmail) {
        console.error("No customer email found")
        return NextResponse.json({ error: "No email" }, { status: 400 })
      }

      // Get product details
      const product =
        productType === "playbook"
          ? playbooks.find((p) => p.slug === productSlug)
          : services.find((s) => s.id === productSlug)

      if (!product) {
        console.error("Product not found:", productSlug)
        return NextResponse.json({ error: "Product not found" }, { status: 400 })
      }

      // Send purchase confirmation email
      if (productType === "playbook") {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: customerEmail,
          subject: `Your Tech Sales Playbook: ${product.title}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="text-align: center; margin-bottom: 32px;">
                <h1 style="color: #0f172a; margin-bottom: 8px;">Thank You for Your Purchase! 🎉</h1>
              </div>
              
              <p>Hey there,</p>
              
              <p>You just made a great investment in your tech sales career. Here's your download link for <strong>${product.title}</strong>:</p>
              
              <div style="text-align: center; margin: 32px 0;">
                <a href="${process.env.NEXT_PUBLIC_BASE_URL}/downloads/${productSlug}?token=${session.id}" 
                   style="display: inline-block; background: #3b82f6; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600;">
                  Download Your Playbook
                </a>
              </div>
              
              <p><strong>What's inside:</strong></p>
              <ul>
                ${(product as any).contents?.map((item: string) => `<li>${item}</li>`).join("") || ""}
              </ul>
              
              <p>This link is tied to your purchase and won't expire. You'll also receive lifetime updates to the playbook—we'll email you when new versions are available.</p>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;">
              
              <p style="color: #64748b; font-size: 14px;">
                Questions? Just reply to this email or reach out at ${SUPPORT_EMAIL}. We're here to help you crush it.
              </p>
              
              <p>To your success,<br><strong>The Tech Sales Playbook Team</strong></p>
            </body>
            </html>
          `,
        })
      } else {
        // Service purchase confirmation
        await resend.emails.send({
          from: FROM_EMAIL,
          to: customerEmail,
          subject: `Your ${product.title} Order is Confirmed`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="text-align: center; margin-bottom: 32px;">
                <h1 style="color: #0f172a; margin-bottom: 8px;">Order Confirmed! 🎉</h1>
              </div>
              
              <p>Hey there,</p>
              
              <p>Thank you for ordering <strong>${product.title}</strong>. We're excited to help you level up your tech sales career.</p>
              
              <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin: 24px 0;">
                <h3 style="margin-top: 0;">What's Next?</h3>
                <p>Our team will reach out within 24 hours to get started. Expected turnaround: <strong>${(product as any).turnaround}</strong></p>
                
                <p><strong>What's included:</strong></p>
                <ul style="margin-bottom: 0;">
                  ${(product as any).includes?.map((item: string) => `<li>${item}</li>`).join("") || ""}
                </ul>
              </div>
              
              <p>In the meantime, please reply to this email with:</p>
              <ol>
                <li>Your current resume (PDF or Word)</li>
                <li>Target roles/companies you're interested in</li>
                <li>Any specific concerns you'd like us to address</li>
              </ol>
              
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;">
              
              <p style="color: #64748b; font-size: 14px;">
                Questions? Reply to this email or reach out at ${SUPPORT_EMAIL}.
              </p>
              
              <p>To your success,<br><strong>The Tech Sales Playbook Team</strong></p>
            </body>
            </html>
          `,
        })

        // Notify team about new service order
        await resend.emails.send({
          from: FROM_EMAIL,
          to: SUPPORT_EMAIL,
          subject: `New Order: ${product.title} from ${customerEmail}`,
          html: `
            <h2>New Service Order</h2>
            <p><strong>Product:</strong> ${product.title}</p>
            <p><strong>Customer:</strong> ${customerEmail}</p>
            <p><strong>Amount:</strong> $${product.price}</p>
            <p><strong>Session ID:</strong> ${session.id}</p>
          `,
        })
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 })
  }
}

