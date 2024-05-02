'use client'
import { useAuthContext } from "@/src/context/AuthContext"
import { Button } from "../components/Button"

export default function Dashboard() {

    const { signOut } = useAuthContext()
    return (
        <div>
            <h1>Hello World!</h1>
            <Button onClick={signOut}>Sign Out</Button>
        </div>
    )
}