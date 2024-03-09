import { useState } from "react";
import { toast } from "react-toastify";
import bookmark from "../../Assets/Images/bookmark.png";
import bookmarkActive from "../../Assets/Images/bookmarkactive.png";
import Button from "../ReusableComponents/Button";
import SearchBar from "../ReusableComponents/Input";
import notFoundImage from "../../Assets/Images/404.svg";
import "./index.sass";

const ErrorComponent = (
  <div className="errorCategory">
    <img src={notFoundImage} alt="404 Error" />
    <h1>Brak takiej kategorii. Popraw swój url</h1>
  </div>
);

const TaskCategory = (props) => {
  const [newTask, setNewTask] = useState();
  const categories = JSON.parse(localStorage.getItem("categories"));
  const tasksIndex = categories?.findIndex(
    (item) => item.name === props.category
  );

  if (categories === null) {
    return ErrorComponent;
  }

  // Wyexportować te notyfikacje
  const notifySuccess = (text) =>
    toast.success(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyWarn = (text) =>
    toast.warn(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

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
    }
  };

  const toogleBookmarkStatus = (index, text) => {
    const updatedCategories = [...categories];
    updatedCategories[tasksIndex].tasks[index][1] =
      !updatedCategories[tasksIndex].tasks[index][1];
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    // Notification;
    notifySuccess("Zmieniono status zadania: " + text);
  };

  const deleteTask = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[tasksIndex].tasks.splice(index, 1);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    // Notification;
    notifySuccess("Usunięto zadanie");
  };

  const deleteCategory = () => {
    const updatedCategories = [...categories];
    updatedCategories.splice(tasksIndex, 1);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    // Notification
    notifySuccess("Usunięto kategorie");
    // Dodac redirect do homepage
  };

  return (
    <>
      <div className="tasks">
        {tasksIndex < 0
          ? ErrorComponent
          : categories[tasksIndex]?.tasks.map((task, index) => (
              <div className="tasks__block">
                <button
                  className="tasks__block--bookmark"
                  onClick={() => toogleBookmarkStatus(index, task[0])}
                >
                  <img
                    src={task[1] ? bookmarkActive : bookmark}
                    alt="bookmark"
                  />
                </button>
                <h2>{task[0]}</h2>
                <Button
                  text="Zakończ"
                  onClick={() => deleteTask(index)}
                  color="#549C77"
                />
              </div>
            ))}
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
