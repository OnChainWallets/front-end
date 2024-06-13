import { CryptoFilter } from "./CryptoFilter";
import arbitrum from '@/assets/arbitrum.svg'
import ethereum from '@/assets/ethereum.svg'
import polygon from '@/assets/polygon.svg'
import optimism from '@/assets/optimism.svg'
import base from '@/assets/base.svg'
import zksync from '@/assets/zksync.png'

interface FilterContainerProps {
    filterSelected: string
    setFilterSelected: (filterSelected: string) => void
}
export function FilterContainer({ filterSelected, setFilterSelected }: FilterContainerProps) {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-5">
            <CryptoFilter title="Ethereum" imageIcon={ethereum} filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
            <CryptoFilter title="Polygon" imageIcon={polygon} filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
            <CryptoFilter title="Arbitrum" imageIcon={arbitrum} filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
            <CryptoFilter title="Optimism" imageIcon={optimism} filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
            <CryptoFilter title="Base" imageIcon={base} filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
            <CryptoFilter title="Zksync" imageIcon={zksync} filterSelected={filterSelected} setFilterSelected={setFilterSelected} />
        </div>
    )
}