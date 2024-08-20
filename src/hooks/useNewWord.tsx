import { useEffect } from "react";
import { GameInfo } from "../types/GameInfo";
import { CountryData } from "../types/CountryData";
import { getRandomCountryInfo, uniqueLetters } from "../utils/helpers";

export const useNewWord = (setGameInfo: React.Dispatch<React.SetStateAction<GameInfo>>, needNewWord: boolean) => {
  useEffect(() => {
    const fetchData = async () => {
      try{
         const response = await fetch('https://flagcdn.com/en/codes.json');
         const data: unknown = await response.json();
         const countryData = data as CountryData;
         const randomCountryInfo = getRandomCountryInfo(countryData);
         const [flag, country] = randomCountryInfo;
         const countryLower = country.toLowerCase();
         setGameInfo({
          guess: countryLower,
          flag_url: `https://flagcdn.com/160x120/${flag}.png`,
          game_loaded: true,
          needNewWord: false,
          lives: 6,
          correctLetters: [],
          incorrectLetters: [],
          lettersCount: uniqueLetters(countryLower).length,
          winningScore: 0,
          losingScore: 0,
         });
         console.log(1)
      } catch(e){
        console.log('failed to fetch')
      }
    }
    if(needNewWord) fetchData();
  }, [needNewWord, setGameInfo])
}