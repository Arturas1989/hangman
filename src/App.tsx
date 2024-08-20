
import './styles/App.css';
import { Loading } from './components/Loading';
import { useState } from 'react';
import { GameInfo } from './types/GameInfo';
import { useNewWord } from './hooks/useNewWord';
import { Game } from './components/Game';

function App() {
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    guess: '',
    flag_url: '',
    game_loaded: false,
    needNewWord: true,
    lives: 6,
    correctLetters: [],
    incorrectLetters: [],
    lettersCount: 0,
    winningScore: 0,
    losingScore: 0,
  });

  console.log(gameInfo)
  useNewWord(setGameInfo, gameInfo.needNewWord);

  return (
    <main className='game'>
      <div className="container">
        {gameInfo.game_loaded ? <Game gameInfo={gameInfo} setGameInfo={setGameInfo}/> : <Loading/>}
      </div>
    </main>
  )
}

export default App;
