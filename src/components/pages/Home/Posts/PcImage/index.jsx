import reservedPc from "/img/pc-reserved.svg";
import freePc from "/img/pc-free.svg";

const PcImage = ({ pcId, reserved }) => {
  return (
    <div>
      <span className="text-center d-block">{pcId}</span>
      {reserved ? (
        <img className="img-fluid" src={reservedPc} alt="reserved" />
      ) : (
        <img className="img-fluid" src={freePc} alt="free" />
      )}
    </div>
  );
};

export default PcImage;
