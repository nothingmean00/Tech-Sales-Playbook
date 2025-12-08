import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-warm-gray selection:bg-signal/30 selection:text-ink border-2 border-ink h-11 w-full min-w-0 bg-white px-4 py-2 text-base transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus:border-signal focus:ring-0',
        'aria-invalid:border-editorial-red',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
