'use client'

import Link from "next/link";
import { Button } from "../../components/Button";
import { InputControl, InputRoot } from "../../components/Form/Input";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpUserService } from "@/src/services/auth/signUpUserService";
import { useAuthContext } from "@/src/context/AuthContext";
import { useState } from "react";

const signUpSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "At least 6 characters"),
    repeatPassword: z.string()

}).refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords don\'t match',
    path: ['repeatPassword']
});

type signUpSchema = z.infer<typeof signUpSchema>

export default function Signin() {

    const { signIn } = useAuthContext()
    const [isLoading, setIsLoading] = useState(false)


    const { register, handleSubmit, formState: { errors } } = useForm<signUpSchema>({
        resolver: zodResolver(signUpSchema)
    })


    async function signUpUser(data: signUpSchema) {
        console.log(data)

        setIsLoading(true)

        const { name, email, password } = data

        try {
            const response = await SignUpUserService.instance.perform({
                name,
                email,
                password,
            })
            if (response instanceof Error) throw response

            signIn({ email, password })
            if (response instanceof Error) throw response

        } catch (error: any) {
            return console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl py-2 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-300 to-violet-700 transition-all duration-300">Sign Up</h1>
            <form className="w-full flex flex-col justify-center items-center gap-6 divide-y divide-zinc-700">

                <div className="flex flex-col gap-3 w-1/2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                        Name
                    </label>
                    <InputRoot>
                        <InputControl id="name" type="text" placeholder='Lucas Pereira' {...register("name")} />
                    </InputRoot>
                    <p className="text-sm text-red-500 font-semibold">{errors.name?.message}</p>
                </div>

                <div className="flex flex-col gap-3 py-3 w-1/2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                        E-mail
                    </label>
                    <InputRoot>
                        <InputControl id="email" type="email" placeholder='lucas@email.com' {...register("email")} />
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

                <Button onClick={handleSubmit(signUpUser)} className="w-1/2 text-lg">SignUp</Button>

            </form>
            <p className="text-md font-semibold">Have an account? <span className="text-violet-500 hover:text-violet-400 font-bold"><Link href='/signin'>Sign In</Link></span></p>
        </div>
    )
}