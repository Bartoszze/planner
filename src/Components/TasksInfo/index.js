import { useState } from "react";
import "./index.sass";

const TaskQuanity = () => {
  const [quanity, setQuanity] = useState(0);

  return (
    <p className="task">
      {quanity === 0 ? "brak" : quanity}
      {quanity > 1 || quanity === 0 ? " katerogii" : " kategoria"}
    </p>
  );
};

export default TaskQuanity;
