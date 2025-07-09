import type { Dispatch, SetStateAction } from "react";

export type ModeType = "Opening" | "Ending";

export type ModeProps = {
    mode: ModeType;
    setMode: Dispatch<SetStateAction<ModeType>>;
};

export type HeaderProps = {
    hidden: boolean;
    mode: ModeType;
    setMode: React.Dispatch<React.SetStateAction<ModeType>>;
};