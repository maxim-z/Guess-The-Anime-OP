import type { ModeType } from "./mode";
import type { SongType } from "./song";

export type MemoizedHeaderProps = {
    hidden: boolean;
    mode: ModeType;
    setMode: (mode: ModeType) => void;
};

export type HeaderProps = {
    mode: ModeType;
    setMode: (mode: ModeType) => void;
};

export type HintProps = {
    hintsRevealed: number;
    song: SongType;
    endGameState: boolean;
}

export type GuessBarProps = {
    onSubmit: (newGuess : string) => void;
    guesses: string[];
    won: boolean;
    disabled: boolean;
}

export type MediaPlayerProps = {
    hintsRevealed: number;
    videoId: string;
    showVideo: boolean;
}

export type SpinningRecordProps = {
    angles: number[];
}