import React from "react";
import Piece from "./Piece";
import { show } from "../../utils/constants";

type HangProps = {
  lives: number;
};

const Hang = ({ lives }: HangProps) => {
  return (
    <div className="hang-container">
      <div className="top-hang"></div>
      <div className="left-hang"></div>
      <div className="square">
        <div className="corner-hang"></div>
      </div>
      <div className="bottom-hang"></div>
      <div className="hangman">
        <div className="top-stick"></div>
        <Piece className={`head ${show('head', lives)}`}/>
        <div className="body-container">
          <Piece className={`body ${show('body', lives)}`}/>
          <div className="left-arm-square">
            <Piece className={`left-arm ${show('left-arm', lives)}`}/>
          </div>
          <div className="right-arm-square">
            <Piece className={`right-arm ${show('right-arm', lives)}`}/>
          </div>
          <div className="left-leg-square">
            <Piece className={`left-leg ${show('left-leg', lives)}`}/>
          </div>
          <div className="right-leg-square">
            <Piece className={`right-leg ${show('right-leg', lives)}`}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default React.memo(Hang);
