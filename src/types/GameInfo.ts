export type GameInfo = {
    guess: string;
    flag_url: string;
    game_loaded: boolean;
    needNewWord: boolean;
    lives: number;
    correctLetters: string[];
    incorrectLetters: string[];
    lettersCount: number;
    winningScore: number;
    losingScore: number;
};