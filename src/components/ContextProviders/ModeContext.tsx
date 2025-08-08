import type { ModeType } from "@types";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type ModeContextType = {
    mode: ModeType;
    updateMode: (mode: ModeType) => void;
}

const defaultMode: ModeType = 'Opening';
const ModeContext = createContext<ModeContextType | undefined>(undefined);
ModeContext.displayName = 'ModeContext';

// return nothing if being used outside of the provider
export const useModeContext = () => {
    const context = useContext(ModeContext);
    if (!context) throw new Error("useModeContext must be used within the provider!");
    return context;
};

type ModeProviderProps = {
    initial?: ModeType;
    children: React.ReactNode;
}

export const ModeProvider : React.FC<ModeProviderProps> = ({
    initial = defaultMode,
    children,
}) => {
    const [mode, setMode] = useState<ModeType>(initial);

    const updateMode = useCallback((m: ModeType) => setMode(m), []);

    const value = useMemo(() => ({ mode, updateMode }), [mode]);

    return (
        <ModeContext.Provider value={value}>
            {children}
        </ModeContext.Provider>
    )
};