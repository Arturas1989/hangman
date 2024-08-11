
import './styles/App.css';
import { SingleData } from './components/SingleData';
import { Hang } from './components/Hang/Hang';
import KeyBoard from './components/Letters/KeyBoard';
import { Word } from './components/Word/Word';
import Notebook from './assets/notebook.png';
import { useCallback, useState } from 'react';
import { Letter } from './components/Letters/Letter';
import { type GameInfo } from './types/GameInfo';

function App() {
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    word: 'canada',
    correctLetters: [],
    incorrectLetters: []
  });

  const getLetter = (letter: string) => gameInfo.correctLetters.includes(letter) ? letter : '';

  const handleGuess = useCallback((letter: string) => {
    let lettersList: 'incorrectLetters' | 'correctLetters' = 'incorrectLetters';
    if(gameInfo.word.includes(letter)) lettersList = 'correctLetters';
    setGameInfo((prev) => {
      let letters = [...prev[lettersList]]
      letters.push(letter)
      return {...prev, [lettersList] : letters};
    })
  }, [gameInfo.word])

  const splitIntoLetters = () => {
    return gameInfo.word.split('').map((letter, i)=> <Letter key={i}>{getLetter(letter)}</Letter>);
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
          <Hang/>
          <div className="words">
            <Word splitIntoLetters={splitIntoLetters} />
            <KeyBoard handleGuess={handleGuess}/>
          </div>
        </div>
        <img className='notebook' src={Notebook} alt="" />
      </div>
    </main>
  )
}

export default App;
