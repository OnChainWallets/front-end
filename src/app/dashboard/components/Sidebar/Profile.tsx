import { Button } from "@/app/components/Button";
import { LogOut } from "lucide-react";
import Image from "next/image";
import userDark from '@/assets/user-dark.svg'
import { useAuthContext } from "@/contexts/AuthContext";
import { useTheme } from "next-themes";
import { useSession, signOut } from "next-auth/react"

interface ProfileProps {

    minimalistSidebar: boolean;
}

export function Profile({ minimalistSidebar }: ProfileProps) {

    const { signOut: signOutUser } = useAuthContext()
    const { data: session } = useSession()

    function handleSignOut() {
        if (session) {
            signOut()
        }
        signOutUser()
    }


    return (
        <div className="grid grid-cols-profile items-center gap-3">
            <Image src={userDark} className={`rounded-full ${minimalistSidebar ? 'w-5 h-5' : 'w-10 h-10'}`} alt="Profile Image" />
            <div className="flex flex-col truncate">
                {!minimalistSidebar && (
                    <>
                        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">John Doe</span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 truncate">johndoe@gmail.com</span>
                    </>
                )}
            </div>
            <Button type="button" onClick={handleSignOut} variant="ghost">
                <LogOut className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
            </Button>
        </div>
    )
}