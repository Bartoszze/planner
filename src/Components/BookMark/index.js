import { useState } from "react";

const BookMark = () => {
  const [tasks, setTasks] = useState([]);
  const getLocal = () => JSON.parse(localStorage.getItem("categories"));
  const [categories, setCategories] = useState(getLocal);

  return (
    <div className="test" onClick={() => console.log(categories)}>
      <h2>zakładki</h2>
      {tasks.map((text) => (
        <div className="test">
          <h3>{text}</h3>
        </div>
      ))}
    </div>
  );
};

export default BookMark;
