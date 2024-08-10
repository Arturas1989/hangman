
import './styles/App.css';
import { SingleData } from './components/SingleData';
import { Hang } from './components/Hang/Hang';
import { KeyBoard } from './components/Letters/KeyBoard';
import { Word } from './components/Word/Word';
import Notebook from './assets/notebook.png';

function App() {
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
        <Hang/>
        <img className='notebook' src={Notebook} alt="" />
        <div className="words">
          <Word word={'abc'}/>
          <KeyBoard/>
        </div>
      </div>
    </main>
  )
}

export default App;
