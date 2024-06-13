import { tv, VariantProps } from 'tailwind-variants'
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
                'rounded-md px-2 hover:bg-white/5 shadow-none text-zinc-400',
            primary:
                'bg-violet-500 text-white hover:bg-violet-600',
            outline:
                'border border-violet-600 text-zinc-300 hover:bg-zinc-800 ',
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


    return <button {...props} className={button({ variant, className })} />
}