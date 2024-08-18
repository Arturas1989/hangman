export type GameInfo = {
    guess: string;
    lives: number;
    correctLetters: string[];
    incorrectLetters: string[];
    lettersCount: number;
    winningScore: number;
    losingScore: number;
};