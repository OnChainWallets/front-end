import * as Accordion from '@radix-ui/react-accordion';
import { ArrowRight, BadgeDollarSign, ChevronDownIcon, DollarSign, ScrollText, Search, WalletMinimal } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '../Button';


interface NavAccordionProps {
    title: string;
    imageIcon: string | StaticImageData;
    minimalistSidebar: boolean
    valueDefaultAccordion: string;
    setMinimalistSidebar: (minimalistSidebar: boolean) => void
    setValueDefaultAccordion: (valueDefaultAccordion: string) => void
}

export function NavAccordion({ title, imageIcon, minimalistSidebar, valueDefaultAccordion, setMinimalistSidebar, setValueDefaultAccordion }: NavAccordionProps) {

    return (
        <div>
            <Accordion.Root
                type="single"
                collapsible
                value={valueDefaultAccordion}
                onValueChange={setValueDefaultAccordion}
            >
                <Accordion.Item className='group' value={title}>
                    <Accordion.Header>
                        <Accordion.Trigger onClick={() => setMinimalistSidebar(false)} className='w-full text-lg font-bold flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800'>
                            <Image src={imageIcon} width={18} height={18} alt="Icon" />
                            {!minimalistSidebar ? title : null}
                            <ChevronDownIcon
                                className="ml-auto ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600"
                                aria-hidden
                            />
                        </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content className='flex justify-center items-center'>

                        <Button variant='ghost' className='w-full flex text-left text-sm text-zinc-950 dark:text-white'>
                            <a href="/dashboard/search-wallets" className='w-full flex items-center gap-1'>
                                <Search className='w-4 h-4' />
                                Search Wallets
                            </a>
                            <ArrowRight className="ml-auto w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                        </Button>


                    </Accordion.Content>

                    <Accordion.Content className='flex justify-center items-center'>
                        <Button variant='ghost' className='w-full flex text-left text-sm text-zinc-950 dark:text-white '>

                            <a href="/dashboard" className='w-full flex items-center gap-1'>
                                <BadgeDollarSign className='w-4 h-4' />
                                Balance with Exchange Rate
                            </a>
                            <ArrowRight className="ml-auto w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                        </Button>
                    </Accordion.Content>

                    <Accordion.Content className='flex justify-center items-center'>
                        <Button variant='ghost' className='w-full flex text-left text-sm text-zinc-950 dark:text-white '>
                            <a href="/dashboard" className='w-full flex items-center gap-1'>
                                <DollarSign className='w-4 h-4' />
                                Balance without Exchange Rate
                            </a>
                            <ArrowRight className="ml-auto w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                        </Button>
                    </Accordion.Content>

                    <Accordion.Content className='flex justify-center items-center'>
                        <Button variant='ghost' className='w-full flex text-left text-sm text-zinc-950 dark:text-white '>
                            <a href="/dashboard/saved-wallets" className='w-full flex items-center gap-1'>
                                <WalletMinimal className='w-4 h-4' />
                                Saved Wallets Info
                            </a>
                            <ArrowRight className="ml-auto w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                        </Button>
                    </Accordion.Content>

                    <Accordion.Content className='flex justify-center items-center'>
                        <Button variant='ghost' className='w-full flex text-left text-sm text-zinc-950 dark:text-white '>
                            <a href="/dashboard" className='w-full flex items-center gap-1'>
                                <ScrollText className='w-4 h-4' />
                                List Of Available Tokens
                            </a>
                            <ArrowRight className="ml-auto w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                        </Button>
                    </Accordion.Content>

                </Accordion.Item>
            </Accordion.Root>
        </div>
    )
}

