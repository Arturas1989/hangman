import React from "react";

type PieceProps = {
  className: string;
};

const Piece = ({ className }: PieceProps) => {
  return (
    <div className={className}></div>
  )
};

export default React.memo(Piece);
