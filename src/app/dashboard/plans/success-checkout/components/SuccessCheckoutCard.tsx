'use client'

import { useAuthContext } from "@/contexts/AuthContext";
import { CheckoutSession } from "@/domain/entities/stripe-plan";
import { useGetPlanUser } from "@/hooks/plans/useGetPlanUser";
import { useUpdateUserPlan } from "@/hooks/plans/useUpdateUserPlan";
import { api } from "@/lib/axios";
import { toastMessage } from "@/utils/helpers/toast-message";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

export function SuccessCheckoutCard() {

    const router = useRouter()

    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session_id')

    const { mutate: mutateUpdateUserPlan } = useUpdateUserPlan()
    const { mutate: mutateGetPlanUser } = useGetPlanUser()

    const [stripePlan, setStripePlan] = useState<CheckoutSession>();

    const getUserFromCookie = () => {
        const cookies = parseCookies();
        return cookies['user_id'];
    }

    const extractPlanDetails = (lineItem: any) => {
        const description = lineItem.description;
        const recurring = lineItem.price.recurring;

        const [planType, blockchain] = description.split(' - ');

        // Determinar a duração do plano
        let planDuration;
        if (recurring.interval === 'month') {
            switch (recurring.interval_count) {
                case 1:
                    planDuration = 30;
                    break;
                case 3:
                    planDuration = 90;
                    break;
                case 12:
                    planDuration = 365;
                    break;
                default:
                    planDuration = 0;
            }
        } else {
            planDuration = 'unknown';
        }


        return {
            plan_block_chain: blockchain.toLowerCase(),
            plan_duration: planDuration,
            plan_type: planType.toLowerCase(),
        };
    }

    const fetchStripePlan = async () => {
        if (sessionId) {
            const { data } = await api.get(`/api/retrieve-checkout?session_id=${sessionId}`)

            const { amount_total, status, line_items } = data

            if (status === 'complete') {
                const planDetails = extractPlanDetails(line_items.data[0]);

                mutateGetPlanUser({
                    user_id: getUserFromCookie(),
                },
                    {
                        onSuccess: (data) => {
                            if (!(data instanceof Error)) {
                                const userPlanPriceId = data[data.length - 1].id_price

                                mutateUpdateUserPlan({
                                    payment_type: 'credit card',
                                    plan_block_chain: planDetails.plan_block_chain,
                                    plan_duration: planDetails.plan_duration.toString(),
                                    plan_price: amount_total / 100,
                                    plan_type: planDetails.plan_type,
                                    user_id: getUserFromCookie(),
                                    current_plan_id: userPlanPriceId.toString()
                                },
                                    {
                                        onSuccess: () => {
                                            toastMessage({ message: 'Success', type: 'success' })
                                        },

                                        onError: (err) => {
                                            console.error(err)
                                            toastMessage({ message: 'Error', type: 'error' })
                                        }
                                    })

                            }
                        }
                    })

            }
            setStripePlan(data)
        }
    }

    useEffect(() => {
        fetchStripePlan()
    }, [])

    if (!sessionId) {
        router.push('/dashboard')
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-violet-500">Congratulations {stripePlan?.customer_details?.name}!!</h1>
            <p className="text-lg font-semibold">Plan <span className="text-violet-500">{stripePlan?.line_items?.data[0].description}</span> purchased</p>
            <Link href='/dashboard' className="text-md text-white font-semibold bg-violet-500 rounded-lg p-2 hover:bg-violet-600">
                Back to dashboard
            </Link>
        </>
    )
}
