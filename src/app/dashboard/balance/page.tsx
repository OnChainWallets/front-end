'use client'
import { useFilter } from "@/contexts/FilterContext";
import { FilterContainer } from "../components/FilterContainer";
import { Table } from "../components/Table";

export default function SavedWallets() {

    const { filterSelected, setFilterSelected } = useFilter()

    return (
        <div className="mt-16 flex flex-col gap-10">
            <FilterContainer filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
            <div className="w-full flex flex-col justify-center items-center gap-10 mt-20">

                <div className="2xl:w-4/5 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-violet-500" >
                    <p className='font-bold text-violet-500'>Balance</p>
                    <Table />
                </div>
            </div>
        </div>
    )
}