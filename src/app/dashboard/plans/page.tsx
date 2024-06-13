'use client'

import { useEffect, useState } from "react";
import { Plans as PlansComponent } from "./components/Plans";
import { useGetPlan } from "@/hooks/plans/useGetPlan";
import { Plan } from "@/domain/entities/plan";
import { useFilter } from "@/contexts/FilterContext";
import { FilterContainer } from "../components/FilterContainer";
import { toastMessage } from "@/utils/helpers/toast-message";

export default function Plans() {

    const [loadingPlans, setLoadingPlans] = useState(true)
    const { mutate: mutateGetPlan } = useGetPlan()

    const [plans, setPlans] = useState<Plan[]>([])
    const [planTime, setPlanTime] = useState(30)
    const [platform, setPlatform] = useState('ethereum')

    const { filterSelected, setFilterSelected } = useFilter()

    useEffect(() => {

        setPlans([])
        setLoadingPlans(true)
        mutateGetPlan({
            plan_type: 'basic',
            block_chain: platform,
            plan_duration: planTime
        }, {
            onSuccess: (dataBasic) => {
                if (!(dataBasic instanceof Error)) {
                    mutateGetPlan({
                        plan_type: 'intermediate',
                        block_chain: platform,
                        plan_duration: planTime
                    }, {
                        onSuccess: (dataIntermediate) => {
                            if (!(dataIntermediate instanceof Error)) {
                                mutateGetPlan({
                                    plan_type: 'pro',
                                    block_chain: 'all',
                                    plan_duration: planTime
                                }, {
                                    onSuccess: (dataProfessional) => {
                                        if (!(dataProfessional instanceof Error)) {
                                            setPlans(plans => [...plans, dataBasic, dataIntermediate, dataProfessional])
                                        }
                                        setLoadingPlans(false)
                                    },

                                })
                            }
                        }
                    })

                }
                else {
                    toastMessage({ message: "Failed to get plans", type: "error" })
                    setLoadingPlans(false)
                }
            },
        })

    }, [platform, planTime])



    return (
        <div className="mt-6 flex flex-col">
            <FilterContainer filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
            <PlansComponent
                plans={plans}
                loadingPlans={loadingPlans}
                platform={platform}
                planTime={planTime}
                setPlanTime={setPlanTime}
                setPlatform={setPlatform}
            />
        </div>
    )
}