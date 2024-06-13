import { Table as T } from '@radix-ui/themes'
import { Star } from 'lucide-react'
import { useRouter } from 'next/navigation'


export function Table() {

    const route = useRouter()

    function handleShowCharts() {
        route.push(`/dashboard/search-wallets/${'0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'}`)
    }
    return (
        <T.Root className='lg:max-h-96 max-w-full overflow-y-scroll scrollbar-styled'>
            <T.Header>
                <T.Row className='text-xs'>
                    <T.ColumnHeaderCell>Wallet</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Token</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Symbol</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>First Transaction</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Last Transaction</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Capital Called</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Lucro/Prejuizo Swap/Corretora</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Transfers In (Token)</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Transfers Out (Token)</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Transfers Sum (Token)</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Transfers Amount (USD)</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Token Balance</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Token Balance (USD)</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Total Investment</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Total Profit</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Roi %</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Confiability</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Sale</T.ColumnHeaderCell>
                    <T.ColumnHeaderCell>Purchase</T.ColumnHeaderCell>
                </T.Row>
            </T.Header>

            <T.Body>

                {[...Array(10)].map((_, index) => (

                    <T.Row key={index} onClick={handleShowCharts} className='text-xs cursor-pointer hover:bg-violet-400'>

                        <T.RowHeaderCell className='flex gap-3'>
                            <Star className='w-6 h-6 hover:text-yellow-400' />
                            0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce
                        </T.RowHeaderCell>
                        <T.Cell>0X6823159385454ce32dbe48a25d4ec3d2311833</T.Cell>
                        <T.Cell>-193.62</T.Cell>
                        <T.Cell>0</T.Cell>
                        <T.Cell>25613922.22</T.Cell>
                        <T.Cell>1321232.22</T.Cell>
                        <T.Cell>3423232421.12</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>
                        <T.Cell>128.43</T.Cell>

                    </T.Row>

                ))}

            </T.Body>
        </T.Root>
    )
}