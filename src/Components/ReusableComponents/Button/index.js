import "./index.sass";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.color,
  };

  return (
    <button style={buttonStyle} className="buttonStyle" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
