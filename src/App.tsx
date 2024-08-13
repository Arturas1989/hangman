
import './styles/App.css';
import SingleData from './components/SingleData';
import Hang from './components/Hang/Hang';
import KeyBoard from './components/Letters/KeyBoard';
import Word from './components/Word/Word';
import Notebook from './assets/notebook.png';
import { useCallback, useState } from 'react';
import Letter from './components/Letters/Letter';
import { type GameInfo } from './types/GameInfo';
import { useKeyPress } from './hooks/useKeyPress';
import { GuessedLetter } from './types/GuessedLetter';

function App() {
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    guess: 'canada canada canada canada canada canada',
    lives: 6,
    correctLetters: [],
    incorrectLetters: []
  });

  const {guess, lives, correctLetters, incorrectLetters} = gameInfo

  const getLetter = (letter: string) => correctLetters.includes(letter) ? letter : '';

  const handleGuess = useCallback((letter: string) => {
    let lettersList: 'incorrectLetters' | 'correctLetters' = 'incorrectLetters';
    let minus = -1;
    if(guess.includes(letter)){
      lettersList = 'correctLetters';
      minus = 0;
    }  
    setGameInfo((prev) => {
      if(prev.correctLetters.includes(letter) || prev.incorrectLetters.includes(letter) || prev.lives === 0) return prev;
      let letters = [...prev[lettersList]];
      letters.push(letter);
      return {...prev, lives: prev.lives + minus, [lettersList] : letters};
    })
  }, [guess])

  const getLetterClassName = useCallback((letter: string): GuessedLetter => {
    let className: GuessedLetter = lives === 0 ? '' : 'pointer ';
    if(correctLetters.includes(letter)) className += 'correct ';
    if(incorrectLetters.includes(letter)) className += 'wrong';
    return className;
  }, [correctLetters, incorrectLetters, lives])

  useKeyPress(handleGuess);

  const makeLetters = (word: string) => word.split('').map((letter, i)=> <Letter key={i}>{getLetter(letter)}</Letter>);

  const splitIntoLetters = () => {
    const words = gameInfo.guess.split(' ');
    return words.map((word, i) => <div key={i} className="word">{makeLetters(word)}</div> );
  }

  return (
    <main className='game'>
      <div className="container column">
        <div className="row1">
          <div className="left flex column">
            <SingleData>Round: 1</SingleData>
            <SingleData>Record: 2</SingleData>
          </div>
          <div className="right">
            <SingleData>Subject: technology</SingleData>
          </div>
        </div>
        <div className="word-guesser">
          <Hang lives={lives}/>
          <div className="words">
            <Word splitIntoLetters={splitIntoLetters} />
            <KeyBoard handleGuess={handleGuess} getLetterClassName={getLetterClassName}/>
          </div>
        </div>
        <img className='notebook' src={Notebook} alt="" />
      </div>
    </main>
  )
}

export default App;
