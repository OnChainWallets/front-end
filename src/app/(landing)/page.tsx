'use client'

import { Plans } from "./components/Plans";
import { Presentation } from "./components/Presentation";
import { Footer } from "./components/Footer";
import { Description } from "./components/Description";
import { Faq } from "./components/Faq";

export default function Landing() {

    return (
        <div className="w-full lg:max-w-[1440px] flex flex-col justify-center items-center space-y-56">
            <Presentation />
            <Description />
            <Plans />
            <Faq />
            <Footer />
        </div>
    )
}