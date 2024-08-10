type HangProps = {
  name?: string;
};

export const Hang = ({ name }: HangProps) => {
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
        <div className="head"></div>
        <div className="body-container">
          <div className="body"></div>
          <div className="left-arm-square">
            <div className="left-arm"></div>
          </div>
          <div className="right-arm-square">
            <div className="right-arm"></div>
          </div>
          <div className="left-leg-square">
            <div className="left-leg"></div>
          </div>
          <div className="right-leg-square">
            <div className="right-leg"></div>
          </div>
        </div>
      </div>
    </div>
  )
};
