import { Table } from '@radix-ui/themes'
import { Star } from 'lucide-react'
import { useRouter } from 'next/navigation'


export function BasicTable() {

    const route = useRouter()

    function handleShowCharts() {
        route.push(`/dashboard/search-wallets/${'0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'}`)
    }
    return (
        <Table.Root className='max-h-96 overflow-y-scroll scrollbar-styled'>
            <Table.Header>
                <Table.Row className='text-xs'>
                    <Table.ColumnHeaderCell>Wallet</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Token</Table.ColumnHeaderCell>
                    {/* <Table.ColumnHeaderCell>Capital Called</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Profit/Loss</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Transfers in (Token)</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Transfers out (Token)</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Transfers sum (Token)</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Transfers amount (USD)</Table.ColumnHeaderCell> */}
                </Table.Row>
            </Table.Header>

            <Table.Body>

                {[...Array(10)].map((_, index) => (

                    <Table.Row key={index} onClick={handleShowCharts} className='text-xs cursor-pointer hover:bg-violet-400'>

                        <Table.RowHeaderCell className='flex gap-3'>
                            <Star className='w-6 h-6 hover:text-yellow-400' />
                            0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce
                        </Table.RowHeaderCell>
                        <Table.Cell>0X6823159385454ce32dbe48a25d4ec3d2311833</Table.Cell>
                        {/* <Table.Cell>-193.62</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                        <Table.Cell>25613922.22</Table.Cell>
                        <Table.Cell>1321232.22</Table.Cell>
                        <Table.Cell>3423232421.12</Table.Cell>
                        <Table.Cell>128.43</Table.Cell> */}

                    </Table.Row>

                ))}

            </Table.Body>
        </Table.Root>
    )
}