'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '../contexts/AuthContext'
import Web3Provider from './Web3Providers'
import { FilterProvider } from '@/contexts/FilterContext'
import { CryptoPlanProvider } from '@/contexts/CryptoPlanContext'

interface ProviderProps {
    children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
}
const queryClient = new QueryClient()

export const Providers = ({ children }: ProviderProps) => {
    return (

        <QueryClientProvider client={queryClient}>
            <Web3Provider>
                <AuthProvider>
                    <FilterProvider>
                        <CryptoPlanProvider>
                            {children}
                        </CryptoPlanProvider>
                    </FilterProvider>
                </AuthProvider>
            </Web3Provider>
        </QueryClientProvider>

    )
}
