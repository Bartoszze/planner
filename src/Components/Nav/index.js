import BookMark from "../BookMark";
import "./index.sass";

const Nav = () => {
  return (
    <div className="blockSideBar">
      <h1>Planner</h1>
      <p>Wszystkie zadania w jednym miejscu.</p>
      <BookMark />
      {/* Komponent zakładki */}
      {/* Komponent pomodoro */}
    </div>
  );
};

export default Nav;
