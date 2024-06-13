'use client'

import { FilterContainer } from "@/app/dashboard/components/FilterContainer"
import * as Select from '../../../components/Form/Select'
import { WalletProps } from "../page"
import { LineChartExtract } from "@/app/dashboard/components/Charts/LineChartExtract"
import { BarChartBuyAndSell } from "@/app/dashboard/components/Charts/BarChartBuyAndSell"
import { LineChart } from "@/app/dashboard/components/Charts/LineChart"
import { TokensTable } from "@/app/dashboard/components/TokensTable"
import { useFilter } from "@/contexts/FilterContext"

export function WalletPageContent({ params }: WalletProps) {

    const { filterSelected, setFilterSelected } = useFilter()

    return (
        <div className="mt-16 flex flex-col gap-10">
            <FilterContainer filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
            <div className="w-full flex flex-col justify-center items-center gap-10 mt-20">
                <div className="w-full grid grid-cols-2 gap-10">
                    <div className="w-full col-span-2 flex flex-col items-start px-6 bg-zinc-100 dark:bg-zinc-800 rounded-md py-10">
                        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-5">
                            <h1 className="font-bold lg:text-xl">Wallet: {params.id}</h1>

                            <div className="w-full lg:w-1/3 flex items-center gap-3">
                                <label className="text-md font-medium dark:text-zinc-300">
                                    Token
                                </label>
                                <Select.Root
                                // value={type}
                                // onValueChange={handleChangeType}
                                >
                                    <Select.Trigger>
                                        <Select.Value placeholder="Token ID" />
                                    </Select.Trigger>

                                    <Select.Content>
                                        <Select.Item value="1">
                                            <Select.ItemText>
                                                0X6823159385454ce32dbe48a25d4ec3d2311833
                                            </Select.ItemText>
                                        </Select.Item>

                                        <Select.Item value="2">
                                            <Select.ItemText>
                                                0X12133159385454ce32dbe48a25d4ec112121211833
                                            </Select.ItemText>
                                        </Select.Item>
                                    </Select.Content>
                                </Select.Root>

                            </div>
                        </div>
                        <div className='w-full h-px my-5 border border-violet-500' />
                    </div>
                    <div className="w-full flex flex-col items-start px-6 bg-zinc-100 dark:bg-zinc-800 rounded-md py-20">
                        <div className='w-full h-px my-5 border border-violet-500' />
                    </div>

                    <div className="w-full flex flex-col items-start px-6 bg-zinc-100 dark:bg-zinc-800 rounded-md py-20">
                        <div className='w-full h-px my-5 border border-violet-500' />
                    </div>
                </div>


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

                <div className="w-auto flex justify-center items-center bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg border border-violet-500">
                    <LineChart />
                </div>




            </div>
        </div>
    )
}