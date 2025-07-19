import type { ModeType } from "./mode";
import type { SongType } from "./song";

export type HeaderProps = {
    hidden: boolean;
    mode: ModeType;
    setMode: (mode: ModeType) => void;
};

export type HintProps = {
    hintsRevealed: number;
    song: SongType;
}

export type GuessBarProps = {
    onSubmit: (newGuess : string) => void;
    guesses: string[];
    won: boolean;
    disabled: boolean;
}

export type MediaPlayerProps = {
    showVideo: boolean;
}