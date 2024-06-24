import { CardInfo } from "./CardInfo";
import { Cards } from "./Cards";

export function Description() {
    return (
        <div className="flex flex-col justify-center items-center gap-32">
            <div className="flex flex-col justify-center items-center gap-3 p-6 lg:p-0">
                <p className="font-bold text-5xl text-center leading-snug text-violet-500">The Backbone for Blockchain Data</p>
                <p className="font-semibold text-sm lg:text-lg leading-snug text-center text-zinc-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit suscipit, minima doloremque ratione sit deleniti tenetur accusantium, quidem itaque, modi libero eligendi quis tempore! Eaque doloremque deleniti culpa obcaecati.</p>
            </div>
            <Cards />

            <div className="w-full h-96 grid grid-cols-2 gap-10 px-6 lg:px-0">
                <CardInfo />
                <CardInfo />
            </div>
        </div>
    )
}