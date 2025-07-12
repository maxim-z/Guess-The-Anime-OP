import type { FilterType } from "@types/filter";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type FilterContextType = {
    filter: FilterType;
    updateFilter: (filter: FilterType) => void;
};

const defaultFilter : FilterType = 'Top 1000 by Anime Score';
const FilterContext = createContext<FilterContextType | undefined>(undefined);
FilterContext.displayName = 'FilterContext';

// return nothing if being accessed outside the provider
export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error("useFilterContext must be used within the provider!");
    return context;
};

type FilterProviderProps = {
    initial? : FilterType;
    children : React.ReactNode;
}

export const FilterProvider : React.FC<FilterProviderProps> = ({
    children,
    initial = defaultFilter,
}) => {
    const [filter, setFilter] = useState<FilterType>(initial);

    const updateFilter = useCallback((f : FilterType) => setFilter(f), []);

    const value = useMemo(() => ({ filter, updateFilter }), [filter]);

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
};