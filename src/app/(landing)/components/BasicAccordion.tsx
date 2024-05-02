import * as Accordion from '@radix-ui/react-accordion';
import { Variants, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';

export function BasicAccordion() {

    const cardVariants: Variants = {
        offscreen: {
            y: 300,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 100,
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 1
            }
        }
    };
    return (
        <motion.div
            className="w-2/3 bg-zinc-800 rounded-lg shadow-[0_2px_10px] shadow-zinc-300/5"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
        >
            <Accordion.Root
                type="single"
                collapsible

            >
                <Accordion.Item className='border-2 border-violet-400 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b ' value="item-1">
                    <Accordion.Header className="flex">
                        <Accordion.Trigger className='w-full text-lg font-bold shadow-mauve6 hover:bg-zinc-700/80 group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-zinc-700 px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'>
                            What is this?  <ChevronDownIcon
                                className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                                aria-hidden
                            />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className='text-white text-md font-semibold text-start bg-zinc-700 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden'>
                        <p className='px-6 py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates esse, est atque odio quas consequatur autem ad ratione aliquam rem, nisi ipsa nesciunt nostrum beatae! Distinctio aliquam soluta voluptatibus.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates esse, est atque odio quas consequatur autem ad ratione aliquam rem, nisi ipsa nesciunt nostrum beatae! Distinctio aliquam soluta voluptatibus.</p>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>
        </motion.div>
    )
}

