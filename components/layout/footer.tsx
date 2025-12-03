import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"

const navigation = {
  resources: [
    { name: "All Playbooks", href: "/playbooks" },
    { name: "Free Guides", href: "/blog" },
    { name: "Offerings", href: "/offerings" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Email", href: "mailto:hello@techsalesplaybook.com", icon: Mail },
  ],
}

// Custom Logo Component
function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#footerLogoGradient)" />
      <path d="M16 12L28 20L16 28V12Z" fill="white" fillOpacity="0.9" />
      <path d="M12 30L18 24L24 27L30 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 18H30V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo className="h-10 w-10" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-medium uppercase tracking-widest text-slate">
                  Tech Sales
                </span>
                <span className="text-lg font-bold text-white -mt-0.5">
                  Playbook
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate leading-relaxed">
              The definitive playbook for breaking into tech sales and crushing your quota.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate hover:text-electric transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate hover:text-electric transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate hover:text-electric transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate hover:text-electric transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-slate">
            &copy; {new Date().getFullYear()} Tech Sales Playbook. All rights reserved.
          </p>
          <p className="mt-2 text-center text-xs text-slate/60">
            A{" "}
            <a 
              href="https://wallstreetplaybook.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-electric/70 hover:text-electric transition-colors"
            >
              Wall Street Playbook
            </a>
            {" "}company
          </p>
        </div>
      </div>
    </footer>
  )
}

