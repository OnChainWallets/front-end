'use client'
import Link from "next/link";
import { Button } from "../../components/Button";
import { Menu, Wallet } from "lucide-react";
import * as Collapsible from '@radix-ui/react-collapsible'
export function Header() {
    return (
        <Collapsible.Root className="fixed left-0 right-0 top-0 flex flex-col gap-6 p-4 data-[state=open]:bottom-0 data-[state=open]:overflow-y-hidden lg:right-auto lg:data-[state=closed]:bottom-0 lg:sticky z-10 bg-zinc-950 bg-opacity-20 backdrop-blur-md lg:flex-row justify-between lg:px-40 py-6">
            <div className="flex w-full items-center justify-between gap-5">
                <Link href='/' className="group flex justify-center items-center gap-3 hover:text-violet-500 transition-all duration-300">
                    <Wallet className="w-8 h-8" />
                    <h1 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-violet-300 to-violet-700 hidden sm:block">OnChainWallet</h1>
                </Link>
                <Collapsible.Trigger asChild className="lg:hidden">
                    <Button variant="outline" className="flex justify-center items-center">
                        <Menu className="w-6 h-6" />
                    </Button>
                </Collapsible.Trigger>
            </div>

            <Collapsible.Content forceMount className="flex flex-1 lg:flex-none flex-col data-[state=closed]:hidden lg:data-[state=closed]:flex  lg:flex-row justify-center items-center gap-10">
                <Button className="w-32 h-10" variant="outline">About us</Button>
                <Button className="w-32 h-10" variant="outline">Pricing</Button>
                <Button className="w-32 h-10" variant="outline">FAQ</Button>
                <Link href='/signin'>
                    <Button className="w-32 h-10">
                        Sign In
                    </Button>
                </Link>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}