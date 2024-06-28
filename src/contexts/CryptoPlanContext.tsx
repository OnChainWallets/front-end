'use client'

import { ReactNode, createContext, useContext, useState } from 'react';

interface CryptoPlanContext {
    planType: string
    setPlanType: (planType: string) => void
    price: number
    setPrice: (price: number) => void
    planBlockchain: string
    setPlanBlockchain: (price: string) => void
}

interface CryptoPlanProps {
    children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
}

const CryptoPlanContext = createContext({} as CryptoPlanContext);


export function CryptoPlanProvider({ children }: CryptoPlanProps) {
    const [planType, setPlanType] = useState('')
    const [price, setPrice] = useState(0)
    const [planBlockchain, setPlanBlockchain] = useState('')


    return (
        <CryptoPlanContext.Provider value={{ planType, setPlanType, price, setPrice, planBlockchain, setPlanBlockchain }}>
            {children}
        </CryptoPlanContext.Provider>
    );
}


export function useCryptoPlan() {
    return useContext(CryptoPlanContext);
}