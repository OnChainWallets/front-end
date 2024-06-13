import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from 'react'

const button = tv({
    base: [
        'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
        'active:opacity-80',
    ],
    variants: {
        variant: {
            ghost:
                'rounded-md px-2 hover:bg-zinc-50 dark:hover:bg-white/5 shadow-none text-zinc-500 dark:text-zinc-400',
            primary:
                'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
            outline:
                'border border-violet-300 text-zinc-700 hover:bg-zinc-50 dark:border-violet-700 dark:text-zinc-100 dark:hover:bg-zinc-700',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
    asChild?: boolean
}

export function Button({ asChild, variant, className, ...props }: ButtonProps) {
    const Component = asChild ? Slot : 'button'

    return <Component {...props} type='button' className={button({ variant, className })} />
}