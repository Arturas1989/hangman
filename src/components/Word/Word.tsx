
type WordProps = {
  splitIntoLetters: () => JSX.Element[];
};

export const Word = ({ splitIntoLetters }: WordProps) => {
  return (
    <div className="word-guess">{splitIntoLetters()}</div>
  )
};
