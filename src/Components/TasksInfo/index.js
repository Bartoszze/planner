import { useEffect, useState } from "react";
import "./index.sass";

const TaskQuanity = () => {
  const [quanity, setQuanity] = useState(0);
  const categories = JSON.parse(localStorage.getItem("categories"));

  useEffect(() => {
    setQuanity(categories.length);
  }, [categories]);

  return (
    <p className="task">
      {quanity === 0 ? "brak" : quanity}
      {quanity > 4 || quanity === 0 ? " kategorii" : " kategorie"}
    </p>
  );
};

export default TaskQuanity;
