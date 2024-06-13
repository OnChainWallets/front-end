'use client'

import { Logo } from "./Logo";
import { ArrowLeftCircle, ArrowRightCircle, Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import arbitrum from '@/assets/arbitrum.svg'
import ethereum from '@/assets/ethereum.svg'
import polygon from '@/assets/polygon.svg'
import optimism from '@/assets/optimism.svg'
import base from '@/assets/base.svg'
import zksync from '@/assets/zksync.png'

import { NavItem } from "./NavItem";
import { Profile } from "./Profile";

import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from "@/app/components/Button";
import { InputControl, InputPrefix, InputRoot } from "../Form/Input";
import { NavAccordion } from "./NavAccordion";
import { useState } from "react";
import { PlanWidget } from "./PlanWidget";


interface SidebarProps {
    minimalistSidebar: boolean
    setMinimalistSidebar: (minimalistSidebar: boolean) => void
}

export function Sidebar({ minimalistSidebar, setMinimalistSidebar }: SidebarProps) {


    const [valueDefaultAccordion, setValueDefaultAccordion] = useState('item-0');


    function handleChangeSidebarVisible() {
        if (minimalistSidebar === false) {
            setMinimalistSidebar(true)
            setValueDefaultAccordion('item-0')
            return
        }

        setMinimalistSidebar(false)

    }

    return (
        <Collapsible.Root onOpenChange={() => setMinimalistSidebar(false)} className={`fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:overflow-hidden lg:right-auto lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:bg-zinc-900 dark:border-zinc-800 transition-all ease-in-out duration-200 ${minimalistSidebar ? 'lg:w-36' : 'lg:w-80'}`}>
            <div className="relative flex items-center justify-between">
                <Logo minimalistSidebar={minimalistSidebar} />
                <Collapsible.Trigger asChild className="lg:hidden">
                    <Button className="flex justify-center items-center" variant="ghost">
                        <Menu className="w-6 h-6" />
                    </Button>
                </Collapsible.Trigger>

                <Button onClick={handleChangeSidebarVisible} className="absolute -right-[32px] hidden lg:flex justify-center items-center rounded-full min-w-4 p-1 ">
                    {minimalistSidebar ? <ArrowRightCircle className="w-4 h-4" /> : <ArrowLeftCircle className="w-4 h-4" />}
                </Button>
            </div>

            <Collapsible.Content forceMount className="flex flex-1 flex-col gap-6 px-1 data-[state=closed]:hidden lg:data-[state=closed]:flex overflow-y-scroll overflow-x-hidden scrollbar-hide">
                <InputRoot>
                    <InputPrefix>
                        <Search className="w-5 h-5 text-zinc-500" />
                    </InputPrefix>
                    <InputControl placeholder={minimalistSidebar ? '' : 'Search'} />
                </InputRoot>

                <nav className="space-y-1">
                    <NavAccordion
                        title="Ethereum"
                        imageIcon={ethereum}
                        minimalistSidebar={minimalistSidebar}
                        setMinimalistSidebar={setMinimalistSidebar}
                        valueDefaultAccordion={valueDefaultAccordion}
                        setValueDefaultAccordion={setValueDefaultAccordion} />
                    <NavAccordion
                        title="Polygon"
                        imageIcon={polygon}
                        minimalistSidebar={minimalistSidebar}
                        setMinimalistSidebar={setMinimalistSidebar}
                        valueDefaultAccordion={valueDefaultAccordion}
                        setValueDefaultAccordion={setValueDefaultAccordion} />
                    <NavAccordion
                        title="Arbitrum"
                        imageIcon={arbitrum}
                        minimalistSidebar={minimalistSidebar}
                        setMinimalistSidebar={setMinimalistSidebar}
                        valueDefaultAccordion={valueDefaultAccordion}
                        setValueDefaultAccordion={setValueDefaultAccordion} />
                    <NavAccordion
                        title="Optimism"
                        imageIcon={optimism}
                        minimalistSidebar={minimalistSidebar}
                        setMinimalistSidebar={setMinimalistSidebar}
                        valueDefaultAccordion={valueDefaultAccordion}
                        setValueDefaultAccordion={setValueDefaultAccordion} />
                    <NavAccordion
                        title="Base"
                        imageIcon={base}
                        minimalistSidebar={minimalistSidebar}
                        setMinimalistSidebar={setMinimalistSidebar}
                        valueDefaultAccordion={valueDefaultAccordion}
                        setValueDefaultAccordion={setValueDefaultAccordion} />
                    <NavAccordion
                        title="Zksync"
                        imageIcon={zksync}
                        minimalistSidebar={minimalistSidebar}
                        setMinimalistSidebar={setMinimalistSidebar}
                        valueDefaultAccordion={valueDefaultAccordion}
                        setValueDefaultAccordion={setValueDefaultAccordion} />
                </nav>



                <div className="mt-auto flex flex-col gap-6">
                    <nav className="space-y-0.5">
                        <NavItem title="Account Settings" url="settings" icon={Cog} minimalistSidebar={minimalistSidebar} />
                        <NavItem title="Help" url="help" icon={LifeBuoy} minimalistSidebar={minimalistSidebar} />
                    </nav>

                    {!minimalistSidebar && (
                        <PlanWidget />
                    )}

                    <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

                    <Profile minimalistSidebar={minimalistSidebar} />
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}