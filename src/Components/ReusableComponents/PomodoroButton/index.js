import plus from "./../../../Assets/Images/plus.svg";
import minus from "./../../../Assets/Images/minus.svg";
import "./index.sass";

const PomodorButton = (props) => {
  return (
    <button className="pomodoroButton" onClick={props.onClick}>
      <img
        className="pomodoroButton__image"
        src={props.img ? plus : minus}
        alt={props.img ? "Plus image" : "Minus image"}
      />
    </button>
  );
};

export default PomodorButton;
