'use client'

import { LineChartExtract } from "./components/Charts/LineChartExtract"
import { BarChartBuyAndSell } from "./components/Charts/BarChartBuyAndSell"
import { useSession } from "next-auth/react"
import { TokensTable } from "./components/TokensTable"
import { FilterContainer } from "./components/FilterContainer"
import { useFilter } from "@/contexts/FilterContext"

export default function Dashboard() {

    const { filterSelected, setFilterSelected } = useFilter()
    const { data: session } = useSession()

    return (
        <div className="mt-6 flex flex-col">

            <FilterContainer filterSelected={filterSelected} setFilterSelected={setFilterSelected} />

            <div className="w-full flex flex-col justify-center items-center gap-10 mt-20">

                <div className="w-4/5 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-violet-500">
                    <TokensTable />
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div className="w-auto col-span-2 2xl:col-span-1 flex justify-center items-center bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg border border-violet-500">
                        <LineChartExtract />
                    </div>

                    <div className="w-auto col-span-2 2xl:col-span-1 flex justify-center items-center bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg border border-violet-500">
                        <BarChartBuyAndSell />
                    </div>
                </div>

            </div>
        </div>
    )
}