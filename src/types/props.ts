import type { Dispatch, SetStateAction } from "react";
import type { SongType } from "./song";
import type React from "react";

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

export type HintProps = {
    hintsRevealed: number;
    song: SongType;
}

export type GuessBarProps = {
    onSubmit: React.Dispatch<React.SetStateAction<string>>;
    disabled: boolean;
}

export type MediaPlayerProps = {
    showVideo: boolean;
}