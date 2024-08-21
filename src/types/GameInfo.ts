export type GameInfo = {
    guess: string;
    prevGuess: string;
    flag_url: string;
    game_loaded: boolean;
    needNewWord: boolean;
    wasWin: boolean;
    wasLoss: boolean;
    gamePaused: boolean;
    lives: number;
    correctLetters: string[];
    incorrectLetters: string[];
    lettersCount: number;
    winningScore: number;
    losingScore: number;
};