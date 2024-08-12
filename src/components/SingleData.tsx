import React from "react";
import { type ReactNode } from "react";

type SingleDataProps = {
  children: ReactNode;
};

const SingleData = ({ children }: SingleDataProps) => {
  console.log('single data renders')
  return (
    <span>{children}</span>
  )
};

export default React.memo(SingleData);
