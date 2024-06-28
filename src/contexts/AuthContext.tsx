'use client'

import { User } from '@/domain/entities/user'
import { useSignInUser } from '@/hooks/auth/useSignInUser'
import { useSignInUserByWallet } from '@/hooks/auth/useSignInUserByWallet'
import { toastMessage } from '@/utils/helpers/toast-message'
import { Session } from 'next-auth'
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


export interface SigningUserProps {
    username?: string
    email?: string
    password: string
}


interface AuthContextProps {
    isAuthenticated: boolean
    validationMessage: string
    showError: boolean
    isLoading: boolean
    user?: User
    signOut: () => void
    signIn: ({ username, email, password }: SigningUserProps) => void
    signInWithWallet: (session: Session) => void
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
    const { mutate: mutateSignInUser, isError, error } = useSignInUser()
    const { mutate: mutateSignInUserByWallet, isError: isErrorSignInUserByWallet, error: errorSignInUserByWallet } = useSignInUserByWallet()

    const alertError = (message: string) => {
        setValidationMessage(message)
        setShowError(true)
    }

    const isAuthenticated = useMemo(() => {
        return !!user
    }, [user])

    const router = useRouter()

    const signOut = useCallback(() => {
        destroyCookie(undefined, 'access_token', {
            path: '/',
        })
        destroyCookie(undefined, 'user_id', {
            path: '/',
        })
        router.push('/')
    }, [router])

    const signIn = async ({ username, email, password }: SigningUserProps) => {
        try {
            setIsLoading(true)
            mutateSignInUser({
                username,
                email,
                pswrd: password
            }, {
                onSuccess: (data) => {
                    const response = {
                        user: {
                            uid: data.id,
                        },
                        accessToken: data.token
                    }

                    setUser(response.user)
                    setCookie(undefined, 'access_token', response.accessToken, {
                        maxAge: 60 * 60 * 24 * 7, // 7 days
                        path: '/',
                    })
                    setCookie(undefined, 'user_id', response.user.uid, {
                        maxAge: 60 * 60 * 24 * 7, // 7 days
                        path: '/',
                    })
                    router.push('/dashboard')
                },
                onError: () => {
                    if (isError) {
                        toastMessage({ message: 'Username, Email or Password are incorrect.', type: 'error' })
                    }
                }
            })


        } catch (error: any) {
            return console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }


    const signInWithWallet = async (session: Session) => {
        const { user } = session
        try {
            setIsLoading(true)
            if (user?.name) {
                mutateSignInUserByWallet({
                    user_wallet: user?.name
                }, {
                    onSuccess: (data) => {
                        const response = {
                            user: {
                                uid: data.id,
                            },
                            accessToken: data.token
                        }

                        setUser({ ...response.user })
                        setCookie(undefined, 'access_token', response.accessToken, {
                            maxAge: 60 * 60 * 24 * 7, // 7 days
                            path: '/',
                        })
                        router.push('/dashboard')
                    },
                    onError: () => {
                        if (isErrorSignInUserByWallet) {
                            toastMessage({ message: errorSignInUserByWallet.message, type: 'error' })
                        }
                    }
                })
            }


        } catch (error: any) {
            return console.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const getUser = useCallback(async () => {
        const { access_token } = parseCookies()
        if (access_token) {
            try {
                //const res = await mutateGetUser()
                // const res = {
                //     user: {
                //         uid: '1010101010',
                //         name: 'Lucas',
                //         email: 'lucas@email.com',
                //         createdAt: new Date(),
                //         updatedAt: new Date()
                //     },
                //     token: 'access'
                // }
                // setUser({ ...res.user } as User)
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
                signInWithWallet
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}
