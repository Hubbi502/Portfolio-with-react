import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypingAnimation = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < (text.length-1)) {
        setDisplayText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div style={{ fontFamily: "monospace", fontSize: "1.5rem" }}>
      {displayText}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          backgroundColor: isCursorVisible ? "white" : "transparent",
          height: "1.5rem",
          marginLeft: "2px",
        }}
      ></span>
    </div>
  );
};

export default TypingAnimation;

TypingAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};
