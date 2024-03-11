import { useState } from "react";
import { notifySuccess, notifyWarn } from "../ReusableComponents/Notifications";
import ErrorComponent from "../ErrorInfo";
import bookmarkImage from "../../Assets/Images/bookmark.png";
import bookmarkActiveImage from "../../Assets/Images/bookmarkactive.png";
import Button from "../ReusableComponents/Button";
import SearchBar from "../ReusableComponents/Input";
import "./index.sass";

const TaskCategory = (props) => {
  const [newTask, setNewTask] = useState();
  const getLocal = () => JSON.parse(localStorage.getItem("categories"));
  const [categories, setCategories] = useState(getLocal);
  if (categories === null) {
    return <ErrorComponent urlError={props.urlError} />;
  }
  const updatedCategories = [...categories];
  const tasksIndex = categories?.findIndex(
    (item) => item.name === props.category
  );

  const addTask = () => {
    if (newTask === "" || newTask === undefined) {
      notifyWarn("Próbujesz dodać puste zadanie lub takie same");
    } else {
      const newObject = {
        ...categories[tasksIndex],
        tasks: [...categories[tasksIndex].tasks, [`${newTask}`, false]],
      };
      const updatedCategories = [...categories];
      updatedCategories[tasksIndex] = newObject;

      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      setNewTask("");

      // Notification
      notifySuccess("Dodano zadanie");
      setCategories(getLocal);
    }
  };

  const toogleBookmarkStatus = (index, text) => {
    updatedCategories[tasksIndex].tasks[index][1] =
      !updatedCategories[tasksIndex].tasks[index][1];
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setCategories(getLocal);

    // Notification;
    notifySuccess("Zmieniono status zadania: " + text);
  };

  const deleteTask = (index) => {
    updatedCategories[tasksIndex].tasks.splice(index, 1);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setCategories(getLocal);

    // Notification;
    notifySuccess("Usunięto zadanie");
  };

  const deleteCategory = () => {
    updatedCategories.splice(tasksIndex, 1);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setCategories(getLocal);
    // Notification
    notifySuccess("Usunięto kategorie");
    // Dodac redirect do homepage
  };

  return (
    <>
      <div className="tasks">
        {tasksIndex < 0 ? (
          <ErrorComponent urlError={props.urlError} />
        ) : (
          categories[tasksIndex]?.tasks.map((task, index) => (
            <div className="tasks__block" key={task[0]}>
              <button
                className="tasks__block--bookmark"
                onClick={() => toogleBookmarkStatus(index, task[0])}
              >
                <img
                  src={task[1] ? bookmarkActiveImage : bookmarkImage}
                  alt="bookmark"
                />
              </button>
              {index}
              <h2>{task[0]}</h2>
              <Button
                text="Zakończ"
                onClick={() => deleteTask(index)}
                color="#549C77"
              />
            </div>
          ))
        )}
      </div>
      {tasksIndex >= 0 && (
        <>
          <div className="tasks__add">
            <SearchBar onInputChange={setNewTask} color="#F9FAFB50" />
            <Button text="Dodaj zadanie" onClick={addTask} color="#F9FAFB50" />
          </div>
          <Button
            text="Usuń kategorie"
            color="#AE505A"
            onClick={deleteCategory}
          />
        </>
      )}
    </>
  );
};

export default TaskCategory;
