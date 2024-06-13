import { Wallet } from "lucide-react"
import Link from "next/link"

interface LogoProps {
    minimalistSidebar: boolean
}

export function Logo({ minimalistSidebar }: LogoProps) {
    return (
        <Link href='/dashboard' className='flex mx-1 items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
            <Wallet className="text-violet-500" />
            <span className={minimalistSidebar ? 'hidden' : 'visible'}>OnChainWallet</span>
        </Link>
    )
}