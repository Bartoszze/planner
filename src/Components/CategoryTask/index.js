import { useState } from "react";
import bookmark from "../../Assets/Images/bookmark.png";
import bookmarkActive from "../../Assets/Images/bookmarkactive.png";
import Button from "../ReusableComponents/Button";
import SearchBar from "../ReusableComponents/Input";
import "./index.sass";

const TaskCategory = (props) => {
  const [newTask, setNewTask] = useState();

  const localStorageCategories = JSON.parse(localStorage.getItem("categories"));
  const localStorageTasks = localStorageCategories.find(
    (item) => item.name === props.category
  );

  return (
    <div className="tasks">
      {localStorageTasks.tasks.map((task, status) => (
        <div className="task__block" key={task}>
          <button className="task__block--bookmark">
            <img src={status ? bookmarkActive : bookmark} alt="bookmark" />
          </button>
          <h2>{task}</h2>
          <Button text="Zakończ" color="#549C77" />
        </div>
      ))}
      <SearchBar onInputChange={setNewTask} />
      <Button text="Usuń kategorie" color="#AE505A" />

      {/*  Skeleton
      <div className="task__block">
        <button className="task__block--bookmark">
          <img src={bookmark} alt="bookmark" />
        </button>
        <h2>Testowe zdanie</h2>
        <Button text="Zakończ" color="#549C77" />
      </div> */}
    </div>
  );
};

export default TaskCategory;
