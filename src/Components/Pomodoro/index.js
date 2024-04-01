import { useEffect, useState } from "react";
import Button from "../ReusableComponents/Button";
import PomodorButton from "../ReusableComponents/PomodoroButton";
import "./index.sass";

const Pomodoro = () => {
  const [pomodoro, setPomodoro] = useState(true);
  const [time, setTime] = useState(25);
  const [timer, setTimer] = useState(0);

  return (
    <div className="pomodoro">
      <h2>Tryb skupienia</h2>
      <div className="pomodoro__block">
        <p>Czas trwania sesji</p>
        {pomodoro ? (
          <>
            <PomodorButton
              onClick={() => {
                time > 0 && setTime((time) => --time);
              }}
              img={false}
            />
            <div className="pomodoro__block--time">
              <h3>{time}</h3>
            </div>
            <PomodorButton
              onClick={() => {
                time < 45 && setTime((time) => ++time);
              }}
              img={true}
            />
          </>
        ) : (
          <div className="pomodoro__block--time">
            <h3>{timer}</h3>
          </div>
        )}
      </div>
      <Button
        hoverColor="rgba(74, 222, 128, 0.3)"
        color="rgba(249, 250, 251, 0.3)"
        text={pomodoro ? "Rozpocznij sesje" : "Zatrzymaj sesje"}
        onClick={() => console.log("Start pomodor")}
      />
    </div>
  );
};
export default Pomodoro;
