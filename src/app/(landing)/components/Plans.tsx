import { plans } from "@/utils/constants/plans";
import { CardPlan } from "./CardPlan";
import * as Switch from '@radix-ui/react-switch';
import { useState } from "react";

export function Plans() {

    const [yearlyPlans, setYearlyPlans] = useState(false)

    return (
        <div id="section1" className="w-full flex flex-col justify-center items-center gap-10 py-10">
            <p className="font-bold text-5xl leading-snug text-violet-500">Pricing</p>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex items-center gap-5">
                    <label className={`text-xl font-semibold leading-none ${!yearlyPlans ? 'text-violet-500 transition-colors duration-300' : 'text-zinc-300 '}`} htmlFor="plans">
                        Monthly
                    </label>
                    <Switch.Root
                        className={`w-[42px] h-[25px] bg-zinc-700 rounded-full relative outline-none cursor-pointer}`}
                        id="plans"
                        onCheckedChange={() => setYearlyPlans(!yearlyPlans)}
                        checked={yearlyPlans}
                    >
                        <Switch.Thumb className="block w-[21px] h-[21px] bg-violet-500 rounded-full transition-transform duration-300 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                    </Switch.Root>
                    <label className={`text-xl font-semibold leading-none ${yearlyPlans ? 'text-violet-500 transition-colors duration-300' : 'text-zinc-300 '}`} htmlFor="plans">
                        Yearly
                    </label>
                </div>

                <div className="w-full h-full lg:h-[850px] grid grid-cols-4 gap-10 px-6 lg:px-0">
                    {plans.map((plan, index) => {
                        return (
                            <CardPlan key={index} plan={plan} yearlyPlans={yearlyPlans} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}