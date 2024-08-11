import { ReactNode } from "react";
import { Letter } from "./Letter";
import React from "react";

type KeyBoardProps = {
  handleGuess: (letter: string) => void
}

const KeyBoard = ({handleGuess}: KeyBoardProps) => {
  console.log('keyboard rendered')
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let row: ReactNode[] = [], count = 0, rowIndex = 0;
  return (
    <div className="keyboard">
      {letters.split('').reduce((acc: ReactNode[], letter, i) => {
        row.push(<Letter key={letter} onClick={() => handleGuess(letter)}>{letter}</Letter>);
        count++;
        if(count === 7 || i === letters.length - 1) {
          acc.push(<div key={rowIndex} className="key-row">{row}</div>)
          count = 0;
          row = [];
          rowIndex++;
        }
        return acc;
      }, [])}
    </div>
  )
};

export default React.memo(KeyBoard);
