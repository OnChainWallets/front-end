import { Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface CardInfoProps {
    animateX?: boolean
    className?: string
}
export function CardInfo({ animateX, className }: CardInfoProps) {

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

    const cardVariantsAnimateX: Variants = {
        offscreen: {
            x: 300,
            opacity: 0
        },
        onscreen: {
            x: 0,
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
            className={twMerge('w-full h-full bg-zinc-700 rounded-lg col-span-2 lg:col-span-1', className)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={animateX ? cardVariantsAnimateX : cardVariants}
        />
    )
}