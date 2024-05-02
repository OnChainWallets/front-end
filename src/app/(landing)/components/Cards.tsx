import { Variants, motion } from "framer-motion";

export function Cards() {

    const cardVariants: Variants = {
        offscreen: {
            x: -100,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 100,
            transition: {
                type: "easeOut",
                duration: 1.5
            }
        }
    };
    return (
        <div className="grid grid-cols-5 gap-10">
            <motion.div
                className="col-span-5 lg:col-span-1 flex flex-col justify-center items-center px-5"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
            >
                <p className="font-bold text-4xl leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-300 to-violet-700 transition-all duration-300">300M+</p>
                <p className="font-semibold text-lg text-zinc-400">labelled addressess</p>
            </motion.div>

            <div className="relative hidden lg:block">
                <div className="absolute bottom-1/2 w-1/3 h-1 rotate-90 bg-gradient-to-tr from-violet-300 to-violet-700" />
            </div>

            <motion.div
                className="col-span-5 lg:col-span-1 flex flex-col justify-center items-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
            >
                <p className="font-bold text-4xl leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-300 to-violet-700 transition-all duration-300">95%</p>
                <p className="font-semibold text-lg text-zinc-400">Of all onchain TVL</p>
            </motion.div>

            <div className="relative hidden lg:block">
                <div className="absolute left-1/2 bottom-1/2 w-1/3 h-1 rotate-90 bg-gradient-to-tr from-violet-300 to-violet-700" />
            </div>

            <motion.div
                className="col-span-5 lg:col-span-1 flex flex-col justify-center items-center"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
            >
                <p className="font-bold text-4xl leading-snug hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-300 to-violet-700 transition-all duration-300">500TB</p>
                <p className="font-semibold text-lg text-zinc-400">Data processed daily</p>
            </motion.div>
        </div>
    )
}