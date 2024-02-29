import "./index.sass";

const Button = (props) => {
  const buttonStyle = {
    color: props.color,
    marginRight: props.margin,
    marginBottom: props.margin,
    bacgkroundColor: props.bgColor,
  };

  return <button style={buttonStyle}>{props.text}</button>;
};

export default Button;
