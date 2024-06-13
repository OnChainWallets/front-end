import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button";
import { z } from 'zod'
import { LoaderCircle } from "lucide-react";
import * as Select from '../../components/Form/Select'
import { useEffect, useState } from "react";
import { InputControl, InputRoot } from "../../components/Form/Input";


interface SearchWalletsFormProps {
    amountOfTables: number
    setDataLoaded: (dataLoaded: boolean) => void
    setAmountOfTables: (amountOfTables: number) => void
}
const searchWalletsSchema = z.object({
    tokenContract: z.string().min(1, "Token Contract is required"),
    type: z.string(),
    initialDate: z.string().min(1, "Initial date is required"),
    finishDate: z.string().min(1, "Finish date is required"),
    minTokens: z.string().min(1, "Min Tokens is required")
})

type SearchWalletsSchemaType = z.infer<typeof searchWalletsSchema>


export function SearchWalletsForm({ amountOfTables, setDataLoaded, setAmountOfTables }: SearchWalletsFormProps) {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<SearchWalletsSchemaType>({
        resolver: zodResolver(searchWalletsSchema),
        defaultValues: {
            tokenContract: '',
            type: '',
            initialDate: '',
            finishDate: '',
            minTokens: ''
        }
    })

    const [type, setType] = useState('buy');
    const [isLoading, setIsLoading] = useState(false)

    const handleChangeType = (value: string) => {
        setType(value);
    };

    async function handleSubmitForm(data: SearchWalletsSchemaType) {
        try {
            setIsLoading(true)
            await new Promise(resolve => setTimeout(resolve, 2000))
            setDataLoaded(true)
            setAmountOfTables(amountOfTables + 1)
        } catch (error: any) {
            return console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setValue('type', type)
    }, [type])

    return (
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <h1 className="text-3xl py-2 font-bold">Search Wallets</h1>
            <form noValidate className="relative w-4/5 grid grid-cols-2 gap-6 py-12 rounded-md p-6">

                <div className="col-span-2 xl:col-span-1 flex flex-col gap-3 py-3">
                    <label htmlFor="tokenContract" className="text-sm font-medium dark:text-zinc-300">
                        Token Contract
                    </label>
                    <InputRoot>
                        <InputControl id="tokenContract" type="text" placeholder='Token Contract' {...register('tokenContract')} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.tokenContract?.message}</p>
                </div>

                <div className="col-span-2 xl:col-span-1 flex flex-col gap-3 py-3">
                    <label htmlFor="minTokens" className="text-sm font-medium dark:text-zinc-300">
                        Minimum of Tokens
                    </label>
                    <InputRoot>
                        <InputControl id="minTokens" type="text" placeholder='Minimum of Tokens' {...register('minTokens')} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.minTokens?.message}</p>
                </div>


                <div className="col-span-2 xl:col-span-1 flex flex-col gap-3 py-3">
                    <label htmlFor="initialDate" className="text-sm font-medium dark:text-zinc-300">
                        Initial Date
                    </label>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <InputRoot>
                            <InputControl style={{ background: 'none', width: '100%' }} id="initialDate" type="date" {...register('initialDate')} />
                        </InputRoot>
                        <p className="text-sm text-red-500 font-semibold">{errors.initialDate?.message}</p>
                    </div>
                </div>

                <div className="col-span-2 xl:col-span-1 flex flex-col gap-3 py-3">
                    <label htmlFor="finishDate" className="text-sm font-medium dark:text-zinc-300">
                        Finish Date
                    </label>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <InputRoot>
                            <InputControl style={{ background: 'none', width: '100%' }} id="finishDate" type="date" {...register('finishDate')} />
                        </InputRoot>
                        <p className="text-sm text-red-500 font-semibold">{errors.finishDate?.message}</p>
                    </div>
                </div>


                <div className="col-span-2 flex justify-center py-3">
                    <div className="w-full lg:w-4/5 flex flex-col gap-3">
                        <label className="text-sm font-medium dark:text-zinc-300">
                            Type
                        </label>
                        <Select.Root
                            value={type}
                            onValueChange={handleChangeType}
                        >
                            <Select.Trigger>
                                <Select.Value placeholder="Buy or Sell" />
                            </Select.Trigger>

                            <Select.Content>
                                <Select.Item value="buy">
                                    <Select.ItemText>
                                        Buy
                                    </Select.ItemText>
                                </Select.Item>

                                <Select.Item value="sell">
                                    <Select.ItemText>
                                        Sell
                                    </Select.ItemText>
                                </Select.Item>
                            </Select.Content>
                        </Select.Root>

                    </div>
                </div>

                <Button onClick={handleSubmit(handleSubmitForm)} className="col-span-2 w-full text-lg flex justify-center items-center gap-3">

                    {isLoading ? (
                        <LoaderCircle className="w-6 h-6 animate-spin" />
                    )
                        :
                        (
                            <span>Search</span>
                        )}
                </Button>


            </form>
        </div >
    )
}