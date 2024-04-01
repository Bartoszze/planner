// import BookMark from "../BookMark";
// import BookMark from "../Tasks";
// import Pomodoro from "../Pomodoro";
import "./index.sass";

const Nav = () => {
  return (
    <div className="blockSideBar">
      <div className="blockSideBar__h">
        <h1>Planner</h1>
        <p>Wszystkie zadania w jednym miejscu.</p>
      </div>
      <a href="https://github.com/Bartoszze">GitHub</a>
      {/* <BookMark /> */}
      {/* <Pomodoro /> */}
    </div>
  );
};

export default Nav;
