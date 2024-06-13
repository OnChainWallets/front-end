'use client'

import { useState } from "react"
import * as Switch from '@radix-ui/react-switch';
import { BasicTable } from "./components/BasicTable"
import { SearchWalletsForm } from './components/SearchWalletsForm'
import { FilterContainer } from '../components/FilterContainer'
import { useFilter } from "@/contexts/FilterContext"
import { SearchOneWallet } from "./components/SearchOneWalletForm"

export default function SearchWallets() {

    const { filterSelected, setFilterSelected } = useFilter()
    const [dataLoaded, setDataLoaded] = useState(false)
    const [amountOfTables, setAmountOfTables] = useState(0)
    const [showCharts, setShowCharts] = useState(false)

    const [searchOneWallet, setSearchOneWallet] = useState(false)


    return (
        <div className="mt-6 flex flex-col">

            <FilterContainer filterSelected={filterSelected} setFilterSelected={setFilterSelected} />

            <div className="w-full flex flex-col justify-center items-center gap-10 mt-20">
                <div className="flex items-center gap-5">
                    <label className={`text-xl font-semibold leading-none ${!searchOneWallet ? 'text-violet-500 transition-colors duration-300' : 'text-zinc-950 dark:text-zinc-300'}`} htmlFor="plans">
                        Search many wallets
                    </label>
                    <Switch.Root
                        className={`w-[42px] h-[25px] bg-zinc-300 dark:bg-zinc-700 rounded-full relative outline-none cursor-pointer}`}
                        id="plans"
                        onCheckedChange={() => setSearchOneWallet(!searchOneWallet)}
                        checked={searchOneWallet}
                    >
                        <Switch.Thumb className="block w-[21px] h-[21px] bg-violet-500 rounded-full transition-transform duration-300 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                    </Switch.Root>
                    <label className={`text-xl font-semibold leading-none ${searchOneWallet ? 'text-violet-500 transition-colors duration-300' : 'text-zinc-950 dark:text-zinc-300'}`} htmlFor="plans">
                        Search one wallet
                    </label>
                </div>
                <div className="w-full flex flex-col lg:grid lg:grid-cols-1 divide-x-2 divide-zinc-200 dark:divide-zinc-700">
                    {searchOneWallet ? (
                        <SearchOneWallet />
                    )
                        :
                        (
                            <SearchWalletsForm amountOfTables={amountOfTables} setDataLoaded={setDataLoaded} setAmountOfTables={setAmountOfTables} />

                        )}

                </div>

                {dataLoaded && (
                    <div className='w-[90%] h-px my-5 border border-violet-500' />
                )}
                <div className='grid grid-cols-2 gap-10'>

                    {dataLoaded && [...Array(amountOfTables)].map((_, index) => (
                        <div key={index} className={`${Array(amountOfTables).length === 1 ? 'col-span-2' : 'col-span-2 lg:col-span-1'} w-auto p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-violet-500`}>
                            <p className='font-bold text-violet-500'>Search {index + 1}</p>
                            <BasicTable />
                        </div>
                    ))}

                </div>




            </div>
        </div>
    )
}