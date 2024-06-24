import { CardPlan, Plan } from "./CardPlan";
import { SkeletonCardPlan } from "./SkeletonCardPlan";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { StripePlan } from "@/domain/entities/stripe-plan";

interface PlansProps {
    plans: Plan[]
    loadingPlans: boolean
    platform: string
    planTime: number
    setPlanTime: (planTime: number) => void
    setPlatform: (platform: string) => void
}

export function Plans({ loadingPlans, plans, platform, planTime, setPlanTime, setPlatform }: PlansProps) {

    const [stripePlans, setStripePlans] = useState([]);
    const fetchMemberships = async () => {
        const { data } = await api.get('/api/get-plans')
        setStripePlans(data)
        console.log(data)
    }



    useEffect(() => {
        fetchMemberships()
    }, [])


    return (
        <div id="section1" className="w-full flex flex-col justify-center items-center gap-10 py-10">
            <p className="font-bold text-5xl leading-snug">Pricing</p>
            <div className="w-full flex flex-col justify-center items-center gap-10">
                <form className="flex items-center gap-5">
                    <input type="radio" id="monthly" name="plan-duration" value={30} defaultChecked checked={planTime === 30} onClick={() => setPlanTime(30)} className="accent-violet-500 w-5 h-5" />
                    <label className='text-xl font-semibold leading-none text-violet-500' htmlFor="monthly">
                        Monthly
                    </label>

                    <input type="radio" id="quarterly" name="plan-duration" value={90} checked={planTime === 90} onClick={() => setPlanTime(90)} className="accent-violet-500 w-5 h-5" />
                    <label className='text-xl font-semibold leading-none text-violet-500' htmlFor="quarterly">
                        Quarterly
                    </label>

                    <input type="radio" id="yearly" name="plan-duration" value={365} checked={planTime === 365} onClick={() => setPlanTime(365)} className="accent-violet-500 w-5 h-5" />
                    <label className='text-xl font-semibold leading-none text-violet-500' htmlFor="yearly">
                        Yearly
                    </label>
                </form>



                <div className="w-full h-full lg:h-[850px] grid grid-cols-3 gap-10 px-6 2xl:px-52">
                    {loadingPlans ? (
                        [...Array(3)].map((_, index) => (
                            <SkeletonCardPlan key={index} />
                        ))
                    ) :

                        plans.map((plan) => {
                            return (
                                <CardPlan key={plan.id} plan={plan} platform={platform} setPlatform={setPlatform} stripePlans={stripePlans} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}