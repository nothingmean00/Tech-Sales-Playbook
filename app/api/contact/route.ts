import { NextRequest, NextResponse } from "next/server"
import { resend, FROM_EMAIL, SUPPORT_EMAIL } from "@/lib/resend"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    // Validation
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      )
    }

    const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Someone"
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    // Check if Resend is configured
    if (!resend) {
      console.log("Contact form submission (Resend not configured):", { fullName, email, subject, message })
      // Still return success so the UI works during development
      return NextResponse.json({ success: true, demo: true })
    }

    // Send notification to support team
    await resend.emails.send({
      from: FROM_EMAIL,
      to: SUPPORT_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject || "New Message"} from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; padding: 20px;">
          <h2 style="color: #0f172a;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; width: 120px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${subject || "No subject"}</td>
            </tr>
          </table>
          
          <h3 style="color: #0f172a;">Message:</h3>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${message}</div>
          
          <p style="margin-top: 24px; color: #64748b; font-size: 14px;">
            Reply directly to this email to respond to ${firstName || "the sender"}.
          </p>
        </body>
        </html>
      `,
    })

    // Send auto-reply to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We got your message!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #0f172a; margin-bottom: 24px;">Thanks for reaching out</h1>
          
          <p>Hey${firstName ? ` ${firstName}` : ""},</p>
          
          <p>We received your message and will get back to you within 24-48 hours during business days.</p>
          
          <p>In the meantime, you might find these helpful:</p>
          
          <ul>
            <li><a href="${baseUrl}/blog" style="color: #3b82f6;">Free guides on breaking into tech sales</a></li>
            <li><a href="${baseUrl}/playbooks" style="color: #3b82f6;">Our complete playbook collection</a></li>
          </ul>
          
          <p style="color: #64748b; margin-top: 32px;">
            Best,<br>
            <strong>The Tech Sales Playbook Team</strong>
          </p>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
