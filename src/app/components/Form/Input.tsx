import React, { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'


interface InputPrefixProps extends ComponentProps<'div'> { }

export function InputPrefix(props: InputPrefixProps) {
    return (
        <div {...props} />
    )
}

interface InputControlProps extends ComponentProps<'input'> { }


export const InputControl = React.forwardRef<HTMLInputElement, InputControlProps>((props, ref) => {
    return (
        <input
            ref={ref}
            className="flex-1 border-0 bg-transparent p-0 outline-none placeholder-zinc-400 text-zinc-100"
            {...props}
        />
    );
});
InputControl.displayName = 'InputControl';

interface InputRootProps extends ComponentProps<'div'> { }


export function InputRoot(props: InputRootProps) {
    return (
        <div className={twMerge(
            "flex w-full items-center gap-2 rounded-lg border px-3 py-2 shadow-sm",
            "border-zinc-700 bg-zinc-800 focus-within:border-violet-500 focus-within:ring-violet-500/20",
            props.className
        )
        } {...props} />
    )
}