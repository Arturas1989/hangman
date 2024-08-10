import { ReactNode } from "react";
import { Letter } from "./Letter";


export const KeyBoard = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let row: ReactNode[] = [], count = 0, rowIndex = 0;
  // .map(letter => <Letter key={letter}>{letter}</Letter>)
  return (
    <div className="keyboard">
      {letters.split('').reduce((acc: ReactNode[], letter, i) => {
        row.push(<Letter>{letter}</Letter>);
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
