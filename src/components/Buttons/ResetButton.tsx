import { ReactNode } from "react";

type ResetButtonProps = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ResetButton = ({ children, onClick }: ResetButtonProps) => {
  return (
    <button 
      onClick={onClick ? (e) => onClick(e) : undefined} 
      className='reset pointer'
    >
        {children}
    </button>
  )
};
