import { useState } from "react";
import "./index.sass";

const Button = (props) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    backgroundColor: hover ? props.hoverColor : props.color,
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="buttonStyle"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
