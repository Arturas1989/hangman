import SingleData from '../components/SingleData';
import Hang from '../components/Hang/Hang';
import KeyBoard from '../components/Letters/KeyBoard';
import Word from '../components/Word/Word';
import Notebook from '../assets/notebook.png';
import { useCallback } from 'react';
import Letter from '../components/Letters/Letter';
import { type GameInfo } from '../types/GameInfo';
import { useKeyPress } from '../hooks/useKeyPress';
import { GuessedLetter } from '../types/GuessedLetter';
import { gameFinished, getLetter, isGuessed, isLost, isWin, messageClass, updatedGame } from '../utils/helpers';
import { Message } from '../components/Message/Message';


type GameProps = {
  gameInfo: GameInfo;
  setGameInfo: React.Dispatch<React.SetStateAction<GameInfo>>;
};

export const Game = ({ gameInfo, setGameInfo}: GameProps) => {
  
  
  const handleResetGame = () => {
    setGameInfo((prev) => ({...prev, needNewWord: true}))
  }

  const {lives, correctLetters, incorrectLetters, winningScore, losingScore} = gameInfo
  const handleGuess = useCallback((letter: string) => {
    console.log('pressed')
      
    setGameInfo((prevGame) => {
      console.log(gameFinished(gameInfo))
      if(isGuessed(letter, gameInfo) || gameFinished(prevGame)) return prevGame;
      let newGameInfo = updatedGame(prevGame, letter);
      newGameInfo.winningScore += +isWin(newGameInfo);
      newGameInfo.losingScore += +isLost(newGameInfo.lives);
      return newGameInfo;
    })
  }, [gameInfo, setGameInfo])

  const getLetterClassName = useCallback((letter: string): GuessedLetter => {
    let className: GuessedLetter = gameFinished(gameInfo) ? '' : 'pointer ';
    if(correctLetters.includes(letter)) className += 'correct ';
    if(incorrectLetters.includes(letter)) className += 'wrong';
    return className;
  }, [correctLetters, incorrectLetters, gameInfo])

  useKeyPress(handleGuess);

  const makeLetters = (word: string) => word.split('').map((letter, i)=> <Letter key={i}>{getLetter(letter, correctLetters)}</Letter>);

  const splitIntoLetters = () => {
    const words = gameInfo.guess.split(' ');
    return words.map((word, i) => <div key={i} className="word">{makeLetters(word)}</div> );
  }

  const {messageClassName, message} = messageClass(gameInfo);
  return (
    <>
      <div className="row1">
          <div className="left flex">
            <SingleData>Wins: {winningScore}</SingleData>
            <SingleData>Losses: {losingScore}</SingleData>
          </div>
          <div className="middle">
            <Message className={messageClassName}>{message}</Message>
          </div>
          
        </div>
        <div className="word-guesser">
          <Hang lives={lives}/>
          <div className='flag'>
            <SingleData>
              <p>What flag is this?</p>
              <img src={gameInfo.flag_url} alt="country flag" />
            </SingleData>
          </div>
          <div className="words">
            <Word splitIntoLetters={splitIntoLetters} />
            <KeyBoard 
              handleGuess={handleGuess} 
              getLetterClassName={getLetterClassName}
              isGameFinished={gameFinished(gameInfo)}
            />
          </div>
        </div>
        <button className='reset pointer' onClick={handleResetGame}>Restart the game</button>
        <img className='notebook' src={Notebook} alt="" />
    </>
    
  )
};
