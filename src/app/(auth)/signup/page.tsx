'use client'

import Link from "next/link";
import { Button } from "../../components/Button";
import { InputControl, InputRoot } from "../../components/Form/Input";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSignUpUser } from "@/hooks/auth/useSignUpUser";
import { LoaderCircle } from "lucide-react";
import { toastMessage } from "@/utils/helpers/toast-message";
import { useRouter } from "next/navigation";

const signUpSchema = z.object({
    username: z.string().min(3, "At least 3 characters").max(20, "Maximum of 20 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string()
        .min(8, "At least 8 characters")
        .max(30, "Maximum of 30 characters")
        .refine((value) => /[A-Z]/.test(value), {
            message: "The password must contain at least one uppercase letter",
        })
        .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
            message: "The password must contain at least one special character (@,!,&,*,...)",
        }),
    repeatPassword: z.string()

}).refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords don\'t match',
    path: ['repeatPassword']
});

type signUpSchema = z.infer<typeof signUpSchema>

export default function Signin() {


    const { mutate: mutateSignUpUser, isPending, isError, error } = useSignUpUser()
    const router = useRouter()


    const { register, handleSubmit, formState: { errors } } = useForm<signUpSchema>({
        resolver: zodResolver(signUpSchema)
    })


    async function signUpUser(data: signUpSchema) {
        const { username, email, password } = data

        try {
            mutateSignUpUser({
                username,
                email,
                pswrd: password
            }, {
                onSuccess: () => {
                    toastMessage({ message: 'Usuário criado com sucesso!', type: 'success' })
                    router.push('/signin')
                },
                onError: () => {
                    if (isError) {
                        toastMessage({ message: error.message, type: 'error' })
                    }
                }
            })

        } catch (error: any) {
            return console.error(error.message)
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl py-2 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-300 to-violet-700 transition-all duration-300">Sign Up</h1>
            <form className="w-full flex flex-col justify-center items-center gap-6 divide-y divide-zinc-700">

                <div className="flex flex-col gap-3 w-1/2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                        Username
                    </label>
                    <InputRoot>
                        <InputControl id="name" type="text" placeholder='johndoe' {...register("username")} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.username?.message}</p>
                </div>

                <div className="flex flex-col gap-3 py-3 w-1/2">
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

                <div className="flex flex-col gap-3 py-3 w-1/2">
                    <label htmlFor="repeat-password" className="text-sm font-medium text-zinc-300">
                        Repeat password
                    </label>
                    <InputRoot>
                        <InputControl id="repeat-password" type="password" placeholder='******' {...register("repeatPassword")} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.repeatPassword?.message}</p>
                </div>

                <Button onClick={handleSubmit(signUpUser)} className="w-1/2 text-lg flex justify-center items-center gap-3">
                    {isPending ? (
                        <LoaderCircle className="w-6 h-6 animate-spin" />
                    )
                        :
                        (
                            <span>Sign Up</span>
                        )}
                </Button>


            </form>
            <p className="text-md font-semibold">Have an account? <span className="text-violet-500 hover:text-violet-400 font-bold"><Link href='/signin'>Sign In</Link></span></p>
        </div>
    )
}