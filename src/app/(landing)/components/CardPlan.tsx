import { Plan } from "@/utils/constants/plans";
import { ArrowRightCircle, CheckCircleIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../components/Button";

interface CardPlanProps {
    className?: string
    plan: Plan
    yearlyPlans: boolean
}
export function CardPlan({ className, plan, yearlyPlans }: CardPlanProps) {


    return (
        <div
            className={twMerge('relative col-span-4 xl:col-span-1 w-full h-full bg-gradient-to-tr from-zinc-700 to-zinc-900 rounded-lg p-6 flex flex-col justify-start items-center space-y-5 divide-violet-500 divide-y-2', className)}
        >
            <div className="flex flex-col justify-center items-start gap-3">
                <h1 className="font-bold text-4xl leading-snug">{plan.name}</h1>
                <p className="font-semibold text-md text-zinc-300 leading-snug">{plan.description}</p>
            </div>

            <div className="w-full flex justify-start items-center py-6">
                {yearlyPlans ?
                    <p className="font-bold text-4xl mt-3">${plan.values.yearly.toFixed(2)}/month</p>
                    :
                    <p className="font-bold text-4xl mt-3">${plan.values.monthly.toFixed(2)}/month</p>
                }
            </div>

            <ul className="w-full flex flex-col justify-center items-start gap-4 py-6">
                <li className="flex justify-center items-center gap-3 text-sm"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.blockChain}</li>
                <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.balance}</li>
                <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.extract}</li>
                <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.graph}</li>
                <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.wallet}</li>
                <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.tokens}</li>
                {plan.name === 'Pro' && (
                    <>
                        <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.csv}</li>
                        <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.support}</li>
                        <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.portfolio}</li>
                        <li className="flex justify-center items-center gap-3"><CheckCircleIcon className="w-4 h-4 text-emerald-500" />{plan.benefits.telegram}</li>
                    </>
                )}
            </ul>

            <Button className="lg:absolute bottom-5 bg-gradient-to-b from-violet-400 to-violet-700 flex justify-center items-center gap-3 w-3/4 hover:scale-110 transition-transform duration-300">Get Started<ArrowRightCircle /></Button>

        </div>
    )
}