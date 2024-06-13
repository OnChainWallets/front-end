'use client'

import { ReactNode, createContext, useContext, useState } from 'react';

interface FilterContext {
    filterSelected: string
    setFilterSelected: (desiredFilter: string) => void
}

interface FilterProviderProps {
    children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
}

const FilterContext = createContext({} as FilterContext);


export function FilterProvider({ children }: FilterProviderProps) {
    const [filterSelected, setFilterSelected] = useState('ethereum')


    return (
        <FilterContext.Provider value={{ filterSelected, setFilterSelected }}>
            {children}
        </FilterContext.Provider>
    );
}


export function useFilter() {
    return useContext(FilterContext);
}