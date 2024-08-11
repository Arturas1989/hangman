import { type ReactNode } from 'react';

type LetterProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Letter = ({ children, onClick }: LetterProps) => {
  return onClick ? (
    <div onClick={() => onClick()} className="letter">
      <span>{children}</span>
    </div>
  ) : (
    <div className="letter">
      <span>{children}</span>
    </div>
  );
};
