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
import { gameFinished, getLetter, isGuessed, messageClass, showLetter, updatedGame } from '../utils/helpers';
import { Message } from '../components/Message/Message';
import { ResetButton } from './Buttons/ResetButton';


type GameProps = {
  gameInfo: GameInfo;
  setGameInfo: React.Dispatch<React.SetStateAction<GameInfo>>;
};

export const Game = ({ gameInfo, setGameInfo}: GameProps) => {
  
  
  const handleResetGame = () => {
    setGameInfo((prev) => ({...prev, needNewWord: true, gamePaused: false, wasWin: false, wasLoss: false}))
  }

  const handleResetScores = () => {
    setGameInfo((prev) => (
      {...prev, 
        gamePaused: false, 
        wasWin: false, 
        wasLoss: false,
        winningScore: 0,
        losingScore: 0
      }))
  }

  const {lives, correctLetters, incorrectLetters, winningScore, losingScore} = gameInfo
  const handleGuess = useCallback((letter: string) => {
    console.log('pressed')
      
    setGameInfo((prevGame) => {
      if(prevGame.gamePaused) return {...prevGame, gamePaused: false, needNewWord: true, wasWin: false, wasLoss: false};
      if(isGuessed(letter, gameInfo)) return prevGame;
      let newGameInfo = updatedGame(prevGame, letter);
      
      if(gameFinished(newGameInfo)) newGameInfo.gamePaused = true;
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

  const makeLetters = (word: string) => {
    return word.split('').map((letter, i)=> {
      const isLetterVisible = showLetter(letter, correctLetters, gameInfo.gamePaused);
      return <Letter key={i}>{getLetter(isLetterVisible, letter)}</Letter>
    });
  }

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
            />
          </div>
        </div>
        <div className="reset-row">
          <ResetButton onClick={handleResetGame}>Restart the game</ResetButton>
          <ResetButton onClick={handleResetScores}>Reset scores</ResetButton>
        </div>
        <img className='notebook' src={Notebook} alt="notebook" />
    </>
    
  )
};
