import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://techsalesplaybook.com"),
  title: {
    default: "Tech Sales Playbook | Break Into Tech Sales & Crush Your Quota",
    template: "%s | Tech Sales Playbook",
  },
  description:
    "The definitive playbook for breaking into tech sales, mastering cold outreach, and accelerating your SaaS sales career. Premium guides and coaching for SDRs, BDRs, and AEs.",
  keywords: [
    "tech sales",
    "SDR training",
    "BDR playbook",
    "cold calling scripts",
    "SaaS sales",
    "sales development",
    "break into tech sales",
    "SDR to AE",
    "outbound prospecting",
    "sales career",
  ],
  authors: [{ name: "Tech Sales Playbook" }],
  creator: "Tech Sales Playbook",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techsalesplaybook.com",
    siteName: "Tech Sales Playbook",
    title: "Tech Sales Playbook | Break Into Tech Sales & Crush Your Quota",
    description:
      "The definitive playbook for breaking into tech sales, mastering cold outreach, and accelerating your SaaS sales career.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Sales Playbook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Sales Playbook | Break Into Tech Sales & Crush Your Quota",
    description:
      "The definitive playbook for breaking into tech sales, mastering cold outreach, and accelerating your SaaS sales career.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

