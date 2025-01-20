import  { useState } from "react";
import PropTypes from "prop-types";
import "./css/FlipCard.css";

const FlipCard = ({ frontImage, backImage}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className='flip-card-front rounded-lg'>
          <img src={frontImage} alt="Front" />
        </div>
        <div className="flip-card-back rounded-lg">
          <img src={backImage} alt="Back" />
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  frontImage: PropTypes.string.isRequired,
  backImage: PropTypes.string.isRequired,
};

export default FlipCard;
