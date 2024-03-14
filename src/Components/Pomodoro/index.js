import { useState } from "react";
import Button from "../ReusableComponents/Button";
import "./index.sass";

const Pomodoro = () => {
  const [time, seTime] = useState(25);

  return (
    <div className="pomodoro">
      <h2>Tryb skupienia</h2>
      <div className="pomodoro__block">
        <p>Czas trwania sesji</p>
        <button className="pomodoro__block--b"></button>
        <div className="pomodoro__block--time">{time}</div>
        <button className="pomodoro__block--b"></button>
      </div>
      <Button text="Rozpocznij sesje" />
    </div>
  );
};
export default Pomodoro;
