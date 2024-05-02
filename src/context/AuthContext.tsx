'use client'

import { usePathname, useRouter } from 'next/navigation'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import React, {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
//import { SignInUserService } from '../services/auth/signInUserService'
//import { useGetUser } from '../hooks/auth/useGetUser'

export interface SigningUserProps {
    email: string
    password: string
}
interface User {
    uid: string
    email?: string
    firstName?: string
    lastName?: string
    phone?: {
        countryCode: string
        number: string
    }
    address?: {
        street?: string
        city?: string
        state?: string
        country?: string
    }
    profilePictureUrl?: string
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
}

interface AuthContextProps {
    isAuthenticated: boolean
    validationMessage: string
    showError: boolean
    isLoading: boolean
    user?: User
    signOut: () => void
    signIn: ({ email, password }: SigningUserProps) => void
    setValidationMessage: (message: string) => void
    setShowError: (showError: boolean) => void
    alertError: (message: string) => void
    getUser: () => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
}

const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const pathname = usePathname()
    const [user, setUser] = useState<User | undefined>()
    const [isLoading, setIsLoading] = useState(false)
    const [showError, setShowError] = useState(false)
    const [validationMessage, setValidationMessage] = useState('')
    //const { mutateAsync: mutateGetUser } = useGetUser()
    const alertError = (message: string) => {
        setValidationMessage(message)
        setShowError(true)
    }

    const isAuthenticated = useMemo(() => {
        return !!user
    }, [user])

    const router = useRouter()

    const signOut = useCallback(() => {
        destroyCookie(undefined, 'token', {
            path: '/',
        })
        router.push('/')
    }, [router])

    const signIn = async ({ email, password }: SigningUserProps) => {
        try {
            setIsLoading(true)
            // const response = await SignInUserService.instance.perform({
            //     email,
            //     password,
            // })
            // if (response instanceof Error) throw response

            const response = {
                user: {
                    uid: '1010101010',
                    name: 'Lucas',
                    email: 'lucas@email.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                token: 'access'
            }

            setUser({ ...response.user })
            setCookie(undefined, 'token', response.token, {
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: '/',
            })
            router.push('/dashboard')
        } catch (error: any) {
            return console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const getUser = useCallback(async () => {
        const { token: token } = parseCookies()
        if (token) {
            try {
                //const res = await mutateGetUser()
                const res = {
                    user: {
                        uid: '1010101010',
                        name: 'Lucas',
                        email: 'lucas@email.com',
                        createdAt: new Date(),
                        updatedAt: new Date()
                    },
                    token: 'access'
                }
                setUser({ ...res.user } as User)
            } catch (err) {
                signOut()
            }
        }
    }, [signOut])

    useEffect(() => {
        (async () => await getUser())()
    }, [getUser, pathname])
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                getUser,
                isLoading,
                user,
                validationMessage,
                showError,
                setShowError,
                setValidationMessage,
                alertError,
                signOut,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}
