import React from "react";

type WordProps = {
  splitIntoLetters: () => JSX.Element[];
};

const Word = ({ splitIntoLetters }: WordProps) => {
  console.log('word rendered')
  return (
    <div className="word-guess">{splitIntoLetters()}</div>
  )
};

export default React.memo(Word);
