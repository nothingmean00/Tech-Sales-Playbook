import Link from "next/link"
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"
import { Logo } from "@/components/ui/logo"

const navigation = {
  resources: [
    { name: "All Playbooks", href: "/playbooks" },
    { name: "Job Board", href: "/jobs" },
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
    { name: "Email", href: "mailto:support@techsalesplaybook.com", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="bg-midnight text-white relative overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-brass via-brass-light to-brass" />
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <Logo variant="light" />
            </Link>
            
            <p className="mt-6 text-sm text-stone-light leading-relaxed max-w-xs">
              Premium guides and frameworks for building a successful tech sales career.
            </p>
            
            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-9 h-9 bg-white/5 flex items-center justify-center text-stone-light hover:bg-brass/20 hover:text-brass transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brass mb-6">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-stone-light hover:text-white transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brass mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-stone-light hover:text-white transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brass mb-6">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-stone-light hover:text-white transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-light">
            &copy; {new Date().getFullYear()} Tech Sales Playbook. All rights reserved.
          </p>
          <p className="text-xs text-stone">
            A{" "}
            <a 
              href="https://wallstreetplaybook.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brass hover:text-brass-light transition-colors"
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
