
import './styles/App.css';
import { Loading } from './components/Loading';
import { GameInfo } from './types/GameInfo';
import { useNewWord } from './hooks/useNewWord';
import { Game } from './components/Game';
import { initialGameInfo } from './utils/constants';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [gameInfo, setGameInfo] = useLocalStorage<GameInfo>('data', initialGameInfo);

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
