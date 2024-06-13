'use client'

import { CryptoCard } from "./components/CryptoCard";
import { PlanInfo } from "./components/PlanInfo";
import { Timer } from "./components/Timer";
import { useState } from "react";
import { PaymentCard } from "./components/PaymentCard";

import btc from '@/assets/btc.svg'
import eth from '@/assets/eth.svg'
import usdc from '@/assets/usdc.svg'
import doge from '@/assets/doge.svg'
import ltc from '@/assets/ltc.svg'
import dai from '@/assets/dai.svg'
import bch from '@/assets/bch.svg'



export default function Crypto() {

    const [crypto, setCrypto] = useState<string | null>(null)

    return (
        <div className="w-full h-full grid grid-cols-2">
            <div className="w-full col-span-2 lg:col-span-1 flex justify-center items-center">
                <PlanInfo />
            </div>

            <div className="w-full col-span-2 lg:col-span-1 flex flex-col justify-center items-center gap-10">

                <div className="w-full flex flex-col justify-center items-start p-3 rounded-md bg-zinc-100 dark:bg-zinc-700">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-lg font-semibold">Payment method</p>
                        <Timer />
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-200 dark:bg-zinc-500" />

                {crypto !== null ? (
                    <PaymentCard crypto={crypto} setCrypto={setCrypto} />
                )
                    :
                    (
                        <div className="w-full flex flex-col justify-center items-start p-3 rounded-md bg-zinc-100 dark:bg-zinc-700">
                            <div className="w-full flex justify-between items-center">
                                <p className="text-lg font-semibold">Total</p>
                                <div className="px-1 p-3 font-bold text-base">
                                    $100.00
                                </div>
                            </div>
                        </div>
                    )}




                {!crypto && (
                    <>
                        <div className="w-full flex justify-start items-center">
                            <p className="font-bold text-lg">Select a cryptocurrency to pay:</p>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-3">
                            <CryptoCard onClick={() => setCrypto('BTC')} title="Bitcoin" acronym="BTC" imageIcon={btc} />
                            <CryptoCard onClick={() => setCrypto('ETH')} title="Ethereum" acronym="ETH" imageIcon={eth} />
                            <CryptoCard onClick={() => setCrypto('USDC')} title="USD Coin" acronym="USDC" imageIcon={usdc} />
                            <CryptoCard onClick={() => setCrypto('DOGE')} title="Dogecoin" acronym="DOGE" imageIcon={doge} />
                            <CryptoCard onClick={() => setCrypto('LTC')} title="Litecoin" acronym="LTC" imageIcon={ltc} />
                            <CryptoCard onClick={() => setCrypto('DAI')} title="Dai" acronym="DAI" imageIcon={dai} />
                            <CryptoCard onClick={() => setCrypto('BCH')} title="Bitcoin Cash" acronym="BCH" imageIcon={bch} />
                        </div>
                    </>
                )}

            </div>

        </div>
    )
}