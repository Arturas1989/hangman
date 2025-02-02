import { CountryData } from "../types/CountryData";
import { GameInfo } from "../types/GameInfo";
import { Message } from "../types/Message";
import { Pieces } from "../types/Pieces";
import { letters, livesBelowShowPieces, messages } from "./constants";
import CryptoJS from 'crypto-js';



export const show = (piece: keyof Pieces, lives: number) => {
  return lives < livesBelowShowPieces[piece] ? '' : 'hidden';
}

export const uniqueLetters = (text: string) => {
  return [...new Set(text.replaceAll(/[^a-z]/gi,'').split(''))];
}

export const getLetter = (showLetter: boolean, letter: string) => showLetter ? letter : '';

export const showLetter = (letter: string, correctLetters: string[], isGamePaused: boolean) => {
  return isGamePaused || correctLetters.includes(letter) || !letters.includes(letter);
}

export const gameFinished = (gameInfo: GameInfo) => {
  return isLost(gameInfo.lives) || isWin(gameInfo);
}

export const isLost = (lives: number) => lives === 0;

export const isWin = (gameInfo: GameInfo) => gameInfo.correctLetters.length === gameInfo.lettersCount;

export const updatedGame = (gameInfo: GameInfo, letter: string) => {
    let lettersList: 'incorrectLetters' | 'correctLetters' = 'incorrectLetters';
    let minus = -1;
    if(gameInfo.guess.includes(letter)){
      lettersList = 'correctLetters';
      minus = 0;
    }

    let letters = [...gameInfo[lettersList]];
    letters.push(letter);
    let newGameInfo = {
      ...gameInfo, 
      lives: gameInfo.lives + minus, 
      [lettersList] : letters,
    }
    const isWon = isWin(newGameInfo);
    const isLoss = isLost(newGameInfo.lives);
    newGameInfo.winningScore += +isWon;
    newGameInfo.losingScore += +isLoss;
    newGameInfo.wasWin = isWon;
    newGameInfo.wasLoss = isLoss;
    return newGameInfo;
}

export const messageClass = (gameInfo: GameInfo): Message => {
  if(gameInfo.wasWin) return messages['win'];
  if(gameInfo.wasLoss) return messages['lose'];
  return messages['default'];
}

export const isGuessed = (letter: string, gameInfo: GameInfo) => gameInfo.correctLetters.includes(letter) || gameInfo.incorrectLetters.includes(letter)

export const getRandomIndex = (arrLength: number) => Math.floor(Math.random() * arrLength);

export const getRandomCountryInfo = (countryData: CountryData) => {
  const countriesInfo = Object.entries(countryData);
  const randomIndex = getRandomIndex(countriesInfo.length);
  return countriesInfo[randomIndex];
}

export const keyPressAllowed = (key: string) => letters.includes(key.toLowerCase())

export const addStoragePrototypes = () => {
  const _key = process.env.REACT_APP_ENCRYPTION_KEY || '';
  const encrypt = (txt: string) => CryptoJS.AES.encrypt(txt, _key).toString();
  const decrypt = (txt: string) => CryptoJS.AES.decrypt(txt, _key).toString(CryptoJS.enc.Utf8);
  
  const manipulateLocalStorage = () => {
    Storage.prototype.setEncryptedItem = function (key: string, value: string) {
      localStorage.setItem(key, encrypt(value));
    };

    Storage.prototype.getDecryptedItem = function (key: string) {
      const data = localStorage.getItem(key) || '';
      let decrypted = null;
      try{
        decrypted = decrypt(data)
      } catch(e){}
      return decrypted;
    };
  };

  manipulateLocalStorage();
};

