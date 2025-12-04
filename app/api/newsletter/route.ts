import { NextRequest, NextResponse } from "next/server"
import { resend, FROM_EMAIL } from "@/lib/resend"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 })
    }

    // Check if Resend is configured
    if (!resend) {
      console.log("Newsletter signup (Resend not configured):", email)
      // Still return success so the UI works during development
      return NextResponse.json({ success: true, demo: true })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Your Cold Email Starter Kit",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #0f172a; margin-bottom: 8px;">Your Cold Email Starter Kit</h1>
            <p style="color: #64748b;">5 proven templates to book more meetings</p>
          </div>
          
          <p>Welcome to Tech Sales Playbook!</p>
          
          <p>You just took the first step toward crushing it in tech sales. Below are 5 cold email templates that have booked thousands of meetings for SDRs and BDRs at top SaaS companies.</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
          
          <h2 style="color: #0f172a;">Template #1: The Direct Value Prop</h2>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0; font-size: 14px;">
            <p style="margin: 0;"><strong>Subject:</strong> Quick question about [their company]</p>
            <br>
            <p style="margin: 0;">Hi [First Name],</p>
            <br>
            <p style="margin: 0;">I noticed [specific observation about their company/role]. Companies like [similar company] are using [your solution] to [specific result with number].</p>
            <br>
            <p style="margin: 0;">Worth a 15-minute call to see if this could help [their company]?</p>
            <br>
            <p style="margin: 0;">[Your name]</p>
          </div>
          
          <h2 style="color: #0f172a;">Template #2: The Mutual Connection</h2>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0; font-size: 14px;">
            <p style="margin: 0;"><strong>Subject:</strong> [Mutual connection] suggested I reach out</p>
            <br>
            <p style="margin: 0;">Hi [First Name],</p>
            <br>
            <p style="margin: 0;">[Mutual connection] mentioned you're dealing with [problem]. We helped their team [specific result] and they thought it'd be worth connecting.</p>
            <br>
            <p style="margin: 0;">Open to a quick chat this week?</p>
            <br>
            <p style="margin: 0;">[Your name]</p>
          </div>
          
          <h2 style="color: #0f172a;">Template #3: The Trigger Event</h2>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0; font-size: 14px;">
            <p style="margin: 0;"><strong>Subject:</strong> Congrats on [recent news/funding/hire]</p>
            <br>
            <p style="margin: 0;">Hi [First Name],</p>
            <br>
            <p style="margin: 0;">Saw the news about [trigger event]. When [similar companies] hit this stage, they usually run into [common problem].</p>
            <br>
            <p style="margin: 0;">We help companies like [reference] solve this by [brief value prop]. Worth exploring?</p>
            <br>
            <p style="margin: 0;">[Your name]</p>
          </div>
          
          <h2 style="color: #0f172a;">Template #4: The Problem-Focused</h2>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0; font-size: 14px;">
            <p style="margin: 0;"><strong>Subject:</strong> [Problem they likely have]?</p>
            <br>
            <p style="margin: 0;">Hi [First Name],</p>
            <br>
            <p style="margin: 0;">Quick question: Is [specific problem] something your team struggles with?</p>
            <br>
            <p style="margin: 0;">I ask because most [their role]s at [company type] tell me it's eating up [X hours/dollars] per [timeframe].</p>
            <br>
            <p style="margin: 0;">If so, happy to share how [reference company] fixed it in [timeframe].</p>
            <br>
            <p style="margin: 0;">[Your name]</p>
          </div>
          
          <h2 style="color: #0f172a;">Template #5: The Breakup</h2>
          <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin: 16px 0; font-size: 14px;">
            <p style="margin: 0;"><strong>Subject:</strong> Closing the loop</p>
            <br>
            <p style="margin: 0;">Hi [First Name],</p>
            <br>
            <p style="margin: 0;">I've reached out a few times about helping [their company] with [problem]. Since I haven't heard back, I'll assume the timing isn't right.</p>
            <br>
            <p style="margin: 0;">If things change, feel free to reach out. I'll keep an eye on [their company]'s growth—you're doing impressive work.</p>
            <br>
            <p style="margin: 0;">[Your name]</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
          
          <h2 style="color: #0f172a;">Pro Tips for Cold Emails</h2>
          <ul>
            <li><strong>Keep it under 100 words.</strong> Respect their time.</li>
            <li><strong>One CTA only.</strong> Don't give them choices.</li>
            <li><strong>Personalize the first line.</strong> Show you did your homework.</li>
            <li><strong>Send between 8-10am</strong> in their timezone.</li>
            <li><strong>Follow up 3-4 times.</strong> Most replies come after the 2nd touch.</li>
          </ul>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
          
          <div style="text-align: center; margin: 32px 0;">
            <p style="margin-bottom: 16px;">Ready to go deeper?</p>
            <a href="${baseUrl}/playbooks" 
               style="display: inline-block; background: #3b82f6; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600;">
              Explore Our Playbooks
            </a>
          </div>
          
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            You're receiving this because you signed up at Tech Sales Playbook.<br>
            <a href="${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}" style="color: #64748b;">Unsubscribe</a>
          </p>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter signup error:", error)
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    )
  }
}
