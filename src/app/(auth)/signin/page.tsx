'use client'

import Link from "next/link";
import { Button } from "../../components/Button";
import { InputControl, InputRoot } from "../../components/Form/Input";
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthContext } from "@/src/context/AuthContext";

const signInSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "At least 6 characters")
});
//test
type signInSchema = z.infer<typeof signInSchema>

export default function Signin() {

    const { signIn } = useAuthContext()


    const { register, handleSubmit, formState: { errors } } = useForm<signInSchema>({
        resolver: zodResolver(signInSchema)
    })


    function signInUser(data: signInSchema) {
        console.log(data)

        const { email, password } = data
        signIn({ email, password })
    }

    return (
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <h1 className="text-5xl py-2 font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-violet-300 to-violet-700 transition-all duration-300">Sign In</h1>
            <form className="w-full flex flex-col justify-center items-center gap-6 divide-y divide-zinc-700">
                <div className="flex flex-col gap-3 w-1/2">
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

                <Button onClick={handleSubmit(signInUser)} className="w-1/2 text-lg">Sign In</Button>
            </form>
            <p className="text-md font-semibold">Don`t have an account? <span className="text-violet-500 hover:text-violet-400 font-bold"><Link href='/signup'>Sign Up</Link></span></p>
        </div>
    )
}