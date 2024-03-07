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

  const addTask = () => {
    const addTask = [...localStorageTasks.tasks, [`${newTask}`, 0]];
    // localStorage.setItem(localStorageTasks.tasks, JSON.stringify(addTask));
    console.log(addTask);
  };

  return (
    <div className="tasks">
      {localStorageTasks.tasks.map((task, status) => (
        <div className="tasks__block" key={task}>
          <button className="tasks__block--bookmark">
            <img src={status ? bookmarkActive : bookmark} alt="bookmark" />
          </button>
          <h2>{task}</h2>
          <Button text="Zakończ" color="#549C77" />
        </div>
      ))}
      <div className="tasks__add">
        <SearchBar onInputChange={setNewTask} color="#F9FAFB50" />
        <Button text="Dodaj zadanie" onClick={addTask} color="#F9FAFB50" />
      </div>
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
