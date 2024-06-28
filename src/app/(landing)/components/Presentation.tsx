import { Instagram, Twitter } from "lucide-react";
import { Button } from "../../components/Button";
import Link from "next/link";
import { CardInfo } from "./CardInfo";

export function Presentation() {
    return (
        <div className="mt-40 lg:mt-0 grid grid-cols-2">
            <div className="w-full lg:w-2/3 space-y-10 col-span-2 lg:col-span-1 p-6 lg:p-0">
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <p className="font-bold text-5xl leading-snug text-violet-500 text-center lg:text-start">Onchain Data Platform Trusted by the Best</p>
                    <div className="flex justify-start items-center gap-2 mt-2">
                        <a href="https://www.instagram.com/" target="_blank" rel="external" ><Instagram className="w-6 h-6 hover:text-violet-500 transition-all duration-300" /></a>
                        <a href="https://www.twitter.com/" target="_blank" rel="external" type="button"><Twitter className="w-6 h-6 hover:text-violet-500 transition-all duration-300" /></a>
                    </div>
                </div>
                <p className="font-semibold text-sm lg:text-lg leading-snug text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit suscipit, minima doloremque ratione sit deleniti tenetur accusantium, quidem itaque, modi libero eligendi quis tempore! Eaque doloremque deleniti culpa obcaecati.</p>
                <div className="flex justify-center lg:justify-start items-center gap-5">
                    <Button className="lg:w-1/3 py-4 text-lg" variant="outline">FAQ</Button>
                    <Link href='/signin' className="lg:w-1/3 py-4 text-lg"><Button className="lg:w-full py-4 text-lg">Sign In</Button></Link>
                </div>
            </div>
            <CardInfo className="w-auto col-span-2 lg:col-span-1" animateX />
        </div>
    )
}