'use client'

import Link from "next/link";
import { Button } from "../../components/Button";
import { InputControl, InputRoot } from "../../components/Form/Input";
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthContext } from "@/contexts/AuthContext";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { ConnectButton } from "../components/ConnectButton";
import { toastMessage } from "@/utils/helpers/toast-message";
import { useSignUpUserByWallet } from "@/hooks/auth/useSignUpUserByWallet";
import { useGetUserByWallet } from "@/hooks/auth/useGetUserByWallet";

const signInSchema = z.object({
    username: z.union([z.string().min(1, 'Enter your username'), z.string().max(0)]).optional(),
    email: z.union([z.string().email("Enter a valid email"), z.string().max(0)]).optional(),
    password: z.string().min(6, "At least 6 characters")
});

type signInSchema = z.infer<typeof signInSchema>

export default function Signin() {

    const { signIn, signInWithWallet, isLoading } = useAuthContext()
    const { data: session } = useSession()
    const { mutate: mutateSignUpUserByWallet, isError, error } = useSignUpUserByWallet()
    const { mutate: mutateGetUserByWallet } = useGetUserByWallet()

    async function handleSignInWithWallet() {

        if (session?.user?.name) {
            mutateGetUserByWallet({ user_wallet: session.user.name }, {
                onSuccess: (data) => {
                    if (!(data instanceof Error)) {
                        signInWithWallet(session)
                    }
                    else {
                        mutateSignUpUserByWallet({
                            user_wallet: session.user?.name!
                        }, {
                            onSuccess: () => {
                                toastMessage({ message: 'Usuário criado com sucesso!', type: 'success' })
                                signInWithWallet(session)
                            },
                            onError: () => {
                                if (isError) {
                                    toastMessage({ message: 'Erro ao criar usuário.', type: 'error' })
                                }
                            }
                        })
                    }

                },
            })

        }

    }


    const { register, handleSubmit, formState: { errors } } = useForm<signInSchema>({
        resolver: zodResolver(signInSchema)
    })


    function signInUser(data: signInSchema) {

        const { username, email, password } = data

        try {
            signIn({ username, email, password })

        } catch (error: any) {
            return console.error(error.message)
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl py-2 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-300 to-violet-700 transition-all duration-300">Sign In</h1>
            <form className="w-full flex flex-col justify-center items-center gap-6 divide-y divide-zinc-700">

                <div className="flex flex-col gap-3 w-1/2">
                    <label htmlFor="username" className="text-sm font-medium text-zinc-300">
                        Username
                    </label>
                    <InputRoot>
                        <InputControl id="username" type="text" placeholder='johndoe' {...register("username")} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.username?.message}</p>
                </div>

                <div className="flex flex-col gap-3 w-1/2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                        E-mail
                    </label>
                    <InputRoot>
                        <InputControl id="email" type="email" placeholder='johndoe@email.com' {...register("email")} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.email?.message}</p>
                </div>

                <div className="flex flex-col gap-3 py-3 w-1/2">
                    <label htmlFor="password" className="text-sm font-medium text-zinc-300">
                        Password
                    </label>
                    <InputRoot>
                        <InputControl id="password" type="password" placeholder='******' {...register("password")} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.password?.message}</p>
                </div>

                <Button disabled={isLoading} onClick={handleSubmit(signInUser)} className="w-1/2 text-lg flex justify-center items-center gap-3">
                    {isLoading ? (
                        <LoaderCircle className="w-6 h-6 animate-spin" />
                    )
                        :
                        (
                            <span>Sign In</span>
                        )}
                </Button>

                <div className="w-1/4 justify-center">
                    {isLoading ? (
                        <Button disabled className="w-1/2 text-lg flex justify-center items-center gap-3">
                            <LoaderCircle className="w-6 h-6 animate-spin" />
                        </Button>
                    )
                        :
                        (
                            <ConnectButton handleSignInWithWallet={handleSignInWithWallet} />
                        )}

                </div>
            </form>
            <p className="text-md font-semibold">Don`t have an account? <span className="text-violet-500 hover:text-violet-400 font-bold"><Link href='/signup'>Sign Up</Link></span></p>
        </div>
    )
}