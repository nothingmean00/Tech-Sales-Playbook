import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center border-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none transition-colors overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-ink bg-ink text-white [a&]:hover:bg-ink-light',
        secondary:
          'border-ink bg-transparent text-ink [a&]:hover:bg-ink/5',
        destructive:
          'border-editorial-red bg-editorial-red text-white [a&]:hover:bg-editorial-red/90',
        outline:
          'border-ink text-ink [a&]:hover:bg-ink [a&]:hover:text-white',
        signal:
          'border-signal bg-signal text-white [a&]:hover:bg-signal-light',
        'signal-outline':
          'border-signal bg-transparent text-signal [a&]:hover:bg-signal/10',
        teal:
          'border-accent-teal bg-accent-teal text-white [a&]:hover:bg-accent-teal-light',
        success:
          'border-success bg-success text-white [a&]:hover:bg-success-light',
        // Legacy aliases
        electric:
          'border-signal bg-signal/10 text-signal [a&]:hover:bg-signal/20',
        emerald:
          'border-success bg-success/10 text-success [a&]:hover:bg-success/20',
        gold:
          'border-signal bg-signal/10 text-signal [a&]:hover:bg-signal/20',
        neon:
          'border-success bg-success/10 text-success [a&]:hover:bg-success/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
