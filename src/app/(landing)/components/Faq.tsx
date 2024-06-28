import { BasicAccordion } from "./BasicAccordion";

export function Faq() {
    return (
        <div id="section2" className="w-full flex flex-col justify-center items-center gap-10 py-10">
            <p className="font-bold text-5xl leading-snug text-violet-500">FAQ</p>
            <BasicAccordion />
            <BasicAccordion />
            <BasicAccordion />
            <BasicAccordion />
            <BasicAccordion />
        </div>
    )
}