import { Table } from '@radix-ui/themes'
import ethereum from '@/assets/ethereum.svg'
import Image from 'next/image'


export function TokensTable() {
    return (
        <Table.Root className='max-h-96 overflow-y-scroll scrollbar-styled'>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Token</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Inflow</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>

                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        aEthUSDC
                    </Table.RowHeaderCell>
                    <Table.Cell>$48,548,202</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        ZENT
                    </Table.RowHeaderCell>
                    <Table.Cell>$17,257,462</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        aEthUSDC
                    </Table.RowHeaderCell>
                    <Table.Cell>$48,548,202</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        ZENT
                    </Table.RowHeaderCell>
                    <Table.Cell>$17,257,462</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        aEthUSDC
                    </Table.RowHeaderCell>
                    <Table.Cell>$48,548,202</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        ZENT
                    </Table.RowHeaderCell>
                    <Table.Cell>$17,257,462</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        aEthUSDC
                    </Table.RowHeaderCell>
                    <Table.Cell>$48,548,202</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        ZENT
                    </Table.RowHeaderCell>
                    <Table.Cell>$17,257,462</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        aEthUSDC
                    </Table.RowHeaderCell>
                    <Table.Cell>$48,548,202</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        ZENT
                    </Table.RowHeaderCell>
                    <Table.Cell>$17,257,462</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        aEthUSDC
                    </Table.RowHeaderCell>
                    <Table.Cell>$48,548,202</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.RowHeaderCell className='flex gap-3'>
                        <Image src={ethereum} width={15} height={15} alt="Icon" />
                        ZENT
                    </Table.RowHeaderCell>
                    <Table.Cell>$17,257,462</Table.Cell>
                </Table.Row>

            </Table.Body>
        </Table.Root>
    )
}