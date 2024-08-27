import { ReactNode } from "react";

type ResetButtonProps = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ResetButton = ({ children, onClick }: ResetButtonProps) => {
  const preventSpaceBar = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if(e.key === ' ') e.preventDefault();
  }
  return (
    <button
      onKeyUp={preventSpaceBar} 
      onClick={onClick ? (e) => onClick(e) : undefined} 
      className='reset pointer'
    >
        {children}
    </button>
  )
};
