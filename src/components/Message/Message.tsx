import { ReactNode } from "react";

type MessageProps = {
  children: ReactNode;
  className?: string;
};

export const Message = ({ children, className }: MessageProps) => {
  return (
    <div className={className}>{children}</div>
  )
};
