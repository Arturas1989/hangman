import { CountryData } from "../types/CountryData";
import { GameInfo } from "../types/GameInfo";
import { Message } from "../types/Message";
import { Pieces } from "../types/Pieces";
import { livesBelowShowPieces, messages } from "./constants";



export const show = (piece: keyof Pieces, lives: number) => {
  return lives < livesBelowShowPieces[piece] ? '' : 'hidden';
}

export const uniqueLetters = (text: string) => {
  return [...new Set(text.replaceAll(/\s+/g,'').split(''))];
}

export const getLetter = (letter: string, correctLetters: string[]) => correctLetters.includes(letter) ? letter : '';

export const gameFinished = (gameInfo: GameInfo) => {
  return isLost(gameInfo.lives) || isWin(gameInfo);
}

export const isLost = (lives: number) => lives === 0;

export const isWin = (gameInfo: GameInfo) => gameInfo.correctLetters.length === gameInfo.lettersCount;

export const messageClass = (gameInfo: GameInfo): Message => {
  if(isWin(gameInfo)) return messages['win'];
  if(isLost(gameInfo.lives)) return messages['lose'];
  return messages['default'];
}

export const isGuessed = (letter: string, gameInfo: GameInfo) => gameInfo.correctLetters.includes(letter) || gameInfo.incorrectLetters.includes(letter)

export const getRandomIndex = (arrLength: number) => Math.floor(Math.random() * arrLength);

export const getRandomCountryInfo = (countryData: CountryData) => {
  const countriesInfo = Object.entries(countryData);
  const randomIndex = getRandomIndex(countriesInfo.length);
  return countriesInfo[randomIndex];
} 