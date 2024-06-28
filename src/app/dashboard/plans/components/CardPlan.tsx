import { plans } from "@/utils/constants/plans";
import { ArrowRightCircle, CheckCircleIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../components/Button";
import { MouseEvent, useEffect, useState } from "react";
import * as Select from '../../components/Form/Select'
import { api } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";

import btc from '@/assets/btc.svg'

import arbitrum from '@/assets/arbitrum.svg'
import ethereum from '@/assets/ethereum.svg'
import polygon from '@/assets/polygon.svg'
import optimism from '@/assets/optimism.svg'
import base from '@/assets/base.svg'
import zksync from '@/assets/zksync.png'
import { StripePlan } from "@/domain/entities/stripe-plan";
import { useCryptoPlan } from "@/contexts/CryptoPlanContext";

export interface Plan {
    id: number
    plan_type: string
    plan_duration: string
    plan_block_chain: string
    plan_price: number
    payment_type: string | null
}
interface CardPlanProps {
    stripePlans: StripePlan[]
    plan: Plan
    platform: string
    setPlatform: (platform: string) => void
}
export function CardPlan({ stripePlans, plan, platform, setPlatform }: CardPlanProps) {

    const { setPlanType, setPrice } = useCryptoPlan()


    function findCompatiblePlan(plan: Plan, stripePlans: StripePlan[]): string | null {
        const { plan_type, plan_price, plan_block_chain } = plan;

        for (const plan of stripePlans) {
            if (plan.name.toLowerCase().includes(plan_type.toLowerCase())) {
                if (plan.name.toLowerCase().includes('pro')) {
                    for (const price of plan.prices) {
                        if (price.unit_amount === plan_price * 100 || price.unit_amount === plan_price * 100 * 3 || price.unit_amount === plan_price * 100 * 12) {
                            return price.id;
                        }
                    }
                }
                else if (plan.name.toLowerCase().includes(plan_block_chain.toLowerCase())) {
                    for (const price of plan.prices) {
                        if (price.unit_amount === plan_price * 100 || price.unit_amount === plan_price * 100 * 3 || price.unit_amount === plan_price * 100 * 12) {
                            return price.id;
                        }
                    }
                }

            }
        }
        return null;
    }

    const handleSubscription = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const compatiblePlanPriceId = findCompatiblePlan(plan, stripePlans)
        const { data } = await api.post('/api/checkout',
            {
                priceId: compatiblePlanPriceId
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        window.location.assign(data)
    }
    return (
        <div className="col-span-3 xl:col-span-1 flex flex-col justify-center items-center gap-5">
            <div
                className='relative col-span-3 xl:col-span-1 w-full h-full bg-gradient-to-tr from-zinc-100 dark:from-zinc-700 to-zinc-300 dark:to-zinc-900 border border-violet-600 rounded-lg p-6 flex flex-col justify-start items-center space-y-5'
            >
                <div className="w-full flex flex-col justify-center items-start gap-3">
                    <h1 className="font-bold text-4xl leading-snug">{plan.plan_type.toUpperCase()}</h1>
                    <p className="font-semibold text-md text-zinc-600 dark:text-zinc-300 leading-snug">{
                        plan.plan_type === 'basic'
                            ? 'Basic subscription'
                            : plan.plan_type === 'intermediate'
                                ? 'Intermediate subscription'
                                : plan.plan_type === 'pro'
                                    ? 'Professional subscription'
                                    : ''
                    }</p>
                </div>

                <div className="w-full h-px bg-violet-400" />

                <div className="w-full flex justify-start items-center py-6">
                    <p className="font-bold text-2xl mt-3">{plan.plan_price}$/month</p>
                </div>

                <div className="w-full h-px bg-violet-400" />

                <ul className="w-full flex flex-col justify-center items-start gap-4 py-6">
                    <li className="flex justify-center items-center gap-3 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                        {plan.plan_type === 'basic' ? plans[1].benefits.blockChain : plan.plan_type === 'intermediate' ? plans[2].benefits.blockChain : plan.plan_type === 'pro' ? plans[3].benefits.blockChain : ''}
                    </li>
                    <li className="flex justify-center items-center gap-3">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                        {plan.plan_type === 'basic' ? plans[1].benefits.balance : plan.plan_type === 'intermediate' ? plans[2].benefits.balance : plan.plan_type === 'pro' ? plans[3].benefits.balance : ''}
                    </li>
                    <li className="flex justify-center items-center gap-3">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                        {plan.plan_type === 'basic' ? plans[1].benefits.extract : plan.plan_type === 'intermediate' ? plans[2].benefits.extract : plan.plan_type === 'pro' ? plans[3].benefits.extract : ''}
                    </li>
                    <li className="flex justify-center items-center gap-3">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                        {plan.plan_type === 'basic' ? plans[1].benefits.graph : plan.plan_type === 'intermediate' ? plans[2].benefits.graph : plan.plan_type === 'pro' ? plans[3].benefits.graph : ''}
                    </li>
                    <li className="flex justify-center items-center gap-3">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                        {plan.plan_type === 'basic' ? plans[1].benefits.wallet : plan.plan_type === 'intermediate' ? plans[2].benefits.wallet : plan.plan_type === 'pro' ? plans[3].benefits.wallet : ''}
                    </li>
                    <li className="flex justify-center items-center gap-3">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                        {plan.plan_type === 'basic' ? plans[1].benefits.tokens : plan.plan_type === 'intermediate' ? plans[2].benefits.tokens : plan.plan_type === 'pro' ? plans[3].benefits.tokens : ''}
                    </li>
                    {plan.plan_type === 'pro' && (
                        <>
                            <li className="flex justify-center items-center gap-3">
                                <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                                {plans[3].benefits.csv}
                            </li>
                            <li className="flex justify-center items-center gap-3">
                                <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                                {plans[3].benefits.support}
                            </li>
                            <li className="flex justify-center items-center gap-3">
                                <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                                {plans[3].benefits.portfolio}
                            </li>
                            <li className="flex justify-center items-center gap-3">
                                <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                                {plans[3].benefits.telegram}
                            </li>
                        </>
                    )}
                </ul>



                <div className="w-full px-6 lg:absolute bottom-5 flex flex-col lg:flex-row justify-center items-center gap-3">
                    <Button
                        onClick={handleSubscription}
                        className="flex justify-center items-center gap-3 w-1/2 hover:scale-105 transition-transform duration-300">
                        Get Started
                        <ArrowRightCircle className="w-5 h-5" />
                    </Button>

                    <Link href='/dashboard/plans/crypto' className="w-1/2 ">
                        <Button
                            onClick={() => {
                                setPlanType(plan.plan_type)
                                setPrice(plan.plan_price)
                            }}
                            className="w-full flex justify-center items-center gap-3 hover:scale-105 transition-transform duration-300">
                            Pay with crypto
                            <Image src={btc} width={18} height={18} alt="Icon" />

                        </Button>
                    </Link>
                </div>
            </div>

            {plan.plan_type !== 'pro' && (
                <div className="w-full flex items-center gap-3">
                    <label className="text-md font-medium dark:text-zinc-300">
                        Platform
                    </label>
                    <Select.Root
                        value={platform}
                        onValueChange={(value) => setPlatform(value)}
                    >
                        <Select.Trigger>
                            <Select.Value placeholder="Ethereum" />
                        </Select.Trigger>

                        <Select.Content>
                            <Select.Item value="ethereum">
                                <Select.ItemText>
                                    <Image src={ethereum} width={18} height={18} alt="Icon" />
                                    Ethereum
                                </Select.ItemText>
                            </Select.Item>

                            <Select.Item value="polygon">
                                <Select.ItemText>
                                    <Image src={polygon} width={18} height={18} alt="Icon" />
                                    Polygon
                                </Select.ItemText>
                            </Select.Item>

                            <Select.Item value="arbitrum">
                                <Select.ItemText>
                                    <Image src={arbitrum} width={18} height={18} alt="Icon" />
                                    Arbitrum
                                </Select.ItemText>
                            </Select.Item>

                            <Select.Item value="optimism">
                                <Select.ItemText>
                                    <Image src={optimism} width={18} height={18} alt="Icon" />
                                    Optimism
                                </Select.ItemText>
                            </Select.Item>

                            <Select.Item value="base">
                                <Select.ItemText>
                                    <Image src={base} width={18} height={18} alt="Icon" />
                                    Base
                                </Select.ItemText>
                            </Select.Item>

                            <Select.Item value="zksync">
                                <Select.ItemText>
                                    <Image src={zksync} width={18} height={18} alt="Icon" />
                                    Zksync
                                </Select.ItemText>
                            </Select.Item>
                        </Select.Content>
                    </Select.Root>
                </div>
            )}
        </div>
    )
}