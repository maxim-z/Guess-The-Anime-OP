import type { FilterType } from "@types/filter";
import { createContext, useContext, useState } from "react";

type FilterContextType = {
    filter: FilterType;
    updateFilter: (filter: FilterType) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

// return nothing if being accessed outside the provider
export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilterContext must be used within the provider!");
    return context;
};

export const FilterProvider = (({children} : {children : React.ReactNode}) => {
    const [filter, setFilter] = useState<FilterType>('Top 1000 by Song Viewcount');

    const updateFilter = ((filter: FilterType) => {
        setFilter(filter);
    });

    return (
        <FilterContext.Provider value={{ filter, updateFilter }}>
            {children}
        </FilterContext.Provider>
    )
})

