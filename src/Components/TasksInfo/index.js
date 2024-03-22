import { useEffect, useState } from "react";
import "./index.sass";

const TaskQuanity = () => {
  const [quanity, setQuanity] = useState(0);
  const categories = JSON.parse(localStorage.getItem("categories"));

  useEffect(() => {
    setQuanity(categories ? categories.length : null);
  }, [categories]);

  return (
    <p className="task">
      {quanity === 0 ? "Brak" : quanity}
      {quanity > 4 || quanity === 0 ? " kategorii" : " kategorie"}
    </p>
  );
};

export default TaskQuanity;
