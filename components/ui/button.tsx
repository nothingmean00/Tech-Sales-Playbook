import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
  {
    variants: {
      variant: {
        default: 'bg-midnight text-white hover:bg-midnight-light',
        destructive: 'bg-burgundy text-white hover:bg-burgundy/90',
        outline: 'border border-midnight/20 bg-transparent hover:bg-midnight/5 text-midnight',
        secondary: 'bg-ivory-warm text-midnight hover:bg-ivory-deep',
        ghost: 'hover:bg-midnight/5',
        link: 'text-midnight underline-offset-4 hover:underline',
        // Premium brass/gold variant
        brass: 'bg-gradient-to-r from-brass to-brass-light text-midnight font-semibold shadow-lg shadow-brass/20 hover:shadow-xl hover:shadow-brass/30 hover:-translate-y-0.5',
        // Midnight premium
        midnight: 'bg-gradient-to-b from-midnight to-midnight-deep text-white shadow-lg shadow-midnight/30 hover:shadow-xl hover:shadow-midnight/40 hover:-translate-y-0.5',
        // Sage/success variant
        sage: 'bg-sage text-white hover:bg-sage-light shadow-lg shadow-sage/20',
        // Legacy aliases for compatibility
        signal: 'bg-gradient-to-r from-brass to-brass-light text-midnight font-semibold shadow-lg shadow-brass/20 hover:shadow-xl hover:shadow-brass/30 hover:-translate-y-0.5',
        ink: 'bg-gradient-to-b from-midnight to-midnight-deep text-white shadow-lg shadow-midnight/30 hover:shadow-xl hover:shadow-midnight/40 hover:-translate-y-0.5',
        electric: 'bg-azure text-white hover:bg-azure-light shadow-lg shadow-azure/20',
        emerald: 'bg-sage text-white hover:bg-sage-light',
        gold: 'bg-gradient-to-r from-brass to-brass-light text-midnight',
        navy: 'bg-midnight text-white hover:bg-midnight-light',
        neon: 'bg-sage text-white hover:bg-sage-light',
        success: 'bg-sage text-white hover:bg-sage-light',
        teal: 'bg-sage text-white hover:bg-sage-light',
        'outline-ink': 'border border-midnight/20 bg-transparent hover:bg-midnight hover:text-white text-midnight',
        'outline-signal': 'border border-brass/30 bg-transparent hover:bg-brass/10 text-brass-dark',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8',
        xl: 'h-14 px-10 text-base',
        icon: 'size-10',
        'icon-sm': 'size-9',
        'icon-lg': 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
