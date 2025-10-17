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
    songArtist: string;
    songTitle: string;
}

export type ElectronicDisplayProps = {
    hintsRevealed: number;
    songTitle: string;
    songArtist: string;
}

export type SpinningRecordProps = {
    angles: number[];
}

export type DropDownProps = {
    options: [];
}

export type MovingTextProps = {
    text: string; // the text being animated
    moveDirection: number; // 1 = left->right, 2 = right->left, 3 = top->bottom, 4 = bottom->top
    width: number; // width of the box that it's position will be randomized within
    height: number; // height of the box
}

export type MovingTextContainerProps = {
    width: number;
    height: number;
}