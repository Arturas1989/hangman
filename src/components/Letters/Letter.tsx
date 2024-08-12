import React from 'react';
import { type ReactNode } from 'react';

type LetterProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Letter = ({ children, className, onClick}: LetterProps) => {
  console.log('letter rendered', children)
  return (
    <div onClick={onClick || undefined} className={`letter ${className || ''}`}>
      <span>{children}</span>
    </div>
  )
};

function arePropsEqual(oldProps: LetterProps, newProps: LetterProps) {
  return oldProps.children === newProps.children && oldProps.className === newProps.className;
}

export default React.memo(Letter, arePropsEqual);
