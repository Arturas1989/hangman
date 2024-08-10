import { type ReactNode } from "react";

type LetterProps = {
  children: ReactNode;
};

export const Letter = ({ children }: LetterProps) => {
  return (
    <div className="letter">
      <span>{children}</span>
    </div>
  )
};
