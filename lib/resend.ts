import { Resend } from "resend"

// Create Resend instance only if key exists
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export const FROM_EMAIL = "Tech Sales Playbook <support@techsalesplaybook.com>"
export const SUPPORT_EMAIL = "support@techsalesplaybook.com"
