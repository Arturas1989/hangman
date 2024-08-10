import { Letter } from "../Letters/Letter";

type WordProps = {
  word: string;
};

export const Word = ({ word }: WordProps) => {
  return (
    <div className="word-guess">{word.split('').map(letter=> <Letter>{letter}</Letter>)}</div>
  )
};
