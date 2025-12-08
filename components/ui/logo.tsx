import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "light" | "dark"
  showText?: boolean
}

export function Logo({ className, variant = "default", showText = true }: LogoProps) {
  const colors = {
    default: {
      primary: "hsl(222 47% 11%)", // midnight
      accent: "hsl(38 70% 50%)", // brass
      text: "hsl(222 47% 11%)",
      subtext: "hsl(30 8% 45%)",
    },
    light: {
      primary: "hsl(38 70% 50%)", // brass
      accent: "hsl(48 45% 97%)", // ivory
      text: "hsl(48 45% 97%)",
      subtext: "hsl(30 8% 65%)",
    },
    dark: {
      primary: "hsl(222 47% 11%)",
      accent: "hsl(38 70% 50%)",
      text: "hsl(222 47% 11%)",
      subtext: "hsl(30 8% 45%)",
    },
  }

  const c = colors[variant]

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Mark */}
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
      >
        {/* Background shape */}
        <rect 
          width="48" 
          height="48" 
          fill={c.primary}
        />
        
        {/* Ascending bars - representing growth/sales chart */}
        <rect x="10" y="32" width="6" height="8" fill={c.accent} opacity="0.4" />
        <rect x="18" y="26" width="6" height="14" fill={c.accent} opacity="0.6" />
        <rect x="26" y="18" width="6" height="22" fill={c.accent} opacity="0.8" />
        <rect x="34" y="10" width="6" height="30" fill={c.accent} />
        
        {/* Upward arrow overlay */}
        <path
          d="M38 8L42 14H40V16H36V14H34L38 8Z"
          fill={variant === "light" ? c.primary : "white"}
        />
        
        {/* Corner accent */}
        <rect x="0" y="0" width="4" height="48" fill={c.accent} />
      </svg>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span 
            className="text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: c.subtext }}
          >
            Tech Sales
          </span>
          <span 
            className="text-lg font-serif font-semibold tracking-tight -mt-0.5"
            style={{ color: c.text }}
          >
            Playbook
          </span>
        </div>
      )}
    </div>
  )
}

// Alternative minimal logo for small spaces
export function LogoMark({ className, variant = "default" }: Omit<LogoProps, "showText">) {
  const colors = {
    default: {
      primary: "hsl(222 47% 11%)",
      accent: "hsl(38 70% 50%)",
    },
    light: {
      primary: "hsl(38 70% 50%)",
      accent: "hsl(48 45% 97%)",
    },
    dark: {
      primary: "hsl(222 47% 11%)",
      accent: "hsl(38 70% 50%)",
    },
  }

  const c = colors[variant]

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10", className)}
    >
      <rect width="48" height="48" fill={c.primary} />
      <rect x="10" y="32" width="6" height="8" fill={c.accent} opacity="0.4" />
      <rect x="18" y="26" width="6" height="14" fill={c.accent} opacity="0.6" />
      <rect x="26" y="18" width="6" height="22" fill={c.accent} opacity="0.8" />
      <rect x="34" y="10" width="6" height="30" fill={c.accent} />
      <path
        d="M38 8L42 14H40V16H36V14H34L38 8Z"
        fill={variant === "light" ? c.primary : "white"}
      />
      <rect x="0" y="0" width="4" height="48" fill={c.accent} />
    </svg>
  )
}

