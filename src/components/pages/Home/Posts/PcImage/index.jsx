import { useState } from 'react';
import reservedPc from "/img/pc-reserved.svg";
import freePc from "/img/pc-free.svg";
import reservedPc2 from "/img/pc-reserved2.svg";
import freePc2 from "/img/pc-free2.svg";

const PcImage = ({ pcId, reserved, isLeftColumn }) => {
  const [showGames, setShowGames] = useState(false);

  // This is a temporary list of games. You will replace this with the actual games data from Firebase in the future.
  const games = ['Game 1', 'Game 2', 'Game 3']; 

  const toggleShowGames = () => {
    setShowGames(!showGames);
  };

  return (
    <div onMouseEnter={toggleShowGames} onMouseLeave={toggleShowGames}>
      <span className="text-center d-block">{pcId}</span>
      {reserved ? (
        <img className="img-fluid" src={isLeftColumn ? reservedPc : reservedPc2} alt="reserved" />
      ) : (
        <img className="img-fluid" src={isLeftColumn ? freePc2 : freePc} alt="free" />
      )}
      {showGames && (
        <div>
          {games.map((game, index) => (
            <p key={index}>{game}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PcImage;
