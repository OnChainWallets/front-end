import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react';

interface CryptoCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    acronym: string;
    imageIcon: string;
}

export function CryptoCard({ title, acronym, imageIcon, ...props }: CryptoCardProps) {
    return (
        <button {...props} className="flex justify-between items-center p-2 rounded-lg border-2 dark:border-zinc-500 cursor-pointer hover:border-violet-500 dark:hover:border-violet-500 duration-200 transition-colors ease-in-out">
            <div className='flex justify-center items-center gap-2'>
                <Image src={imageIcon} width={18} height={18} alt="Icon" />
                <span className='font-bold'>{title}</span>
            </div>
            <span className='dark:text-zinc-300'>{acronym}</span>
        </button>
    )
}