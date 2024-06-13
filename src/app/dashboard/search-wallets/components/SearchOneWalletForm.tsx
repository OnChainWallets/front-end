import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button";
import { z } from 'zod'
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { InputControl, InputRoot } from "../../components/Form/Input";
import { useRouter } from "next/navigation";


const searchWalletsSchema = z.object({
    wallet: z.string().min(1, "Wallet is required"),
    token: z.string().min(1, "Token is required"),
})

type SearchWalletsSchemaType = z.infer<typeof searchWalletsSchema>


export function SearchOneWallet() {

    const { register, handleSubmit, formState: { errors } } = useForm<SearchWalletsSchemaType>({
        resolver: zodResolver(searchWalletsSchema),
        defaultValues: {
            wallet: '',
            token: ''
        }
    })

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)


    async function handleSubmitForm(data: SearchWalletsSchemaType) {
        try {
            setIsLoading(true)
            await new Promise(resolve => setTimeout(resolve, 2000))
            router.push(`/dashboard/search-wallets/${data.wallet}`)
        } catch (error: any) {
            return console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="text-3xl py-2 font-bold">Search One Wallet</h1>
            <form noValidate className="relative w-4/5 flex flex-col justify-center items-center gap-6 py-12 rounded-md p-6">

                <div className="w-1/2 flex flex-col gap-3 py-3">
                    <label htmlFor="wallet" className="text-sm font-medium dark:text-zinc-300">
                        Wallet
                    </label>
                    <InputRoot>
                        <InputControl id="wallet" type="text" placeholder='Wallet' {...register('wallet')} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.wallet?.message}</p>
                </div>

                <div className="w-1/2 flex flex-col gap-3 py-3">
                    <label htmlFor="token" className="text-sm font-medium dark:text-zinc-300">
                        Token
                    </label>
                    <InputRoot>
                        <InputControl id="token" type="text" placeholder='Token' {...register('token')} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.token?.message}</p>
                </div>






                <Button onClick={handleSubmit(handleSubmitForm)} className="w-1/2 text-lg flex justify-center items-center gap-3">

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