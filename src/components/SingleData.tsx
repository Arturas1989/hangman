import { type ReactNode } from "react";

type SingleDataProps = {
  children: ReactNode;
};

export const SingleData = ({ children }: SingleDataProps) => {
  return (
    <span>{children}</span>
  )
};
