import { useState } from "react";
import { notifySuccess, notifyWarn } from "../ReusableComponents/Notifications";
import ErrorComponent from "../ErrorInfo";
import bookmarkImage from "../../Assets/Images/bookmark.png";
import bookmarkActiveImage from "../../Assets/Images/bookmarkactive.png";
import Button from "../ReusableComponents/Button";
import SearchBar from "../ReusableComponents/Input";
import "./index.sass";
import { useNavigate } from "react-router-dom";

const TaskCategory = (props) => {
  let navigate = useNavigate();
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
      notifyWarn("Próbujesz dodać puste zadanie");
    } else {
      if (categories[tasksIndex]?.tasks.find((e) => e[0] === newTask)) {
        notifyWarn("Próbujesz dodać istniejące już zadanie");
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
    console.log(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setCategories(getLocal);

    // Notification;
    notifySuccess("Usunięto zadanie");
  };

  const deleteCategory = () => {
    updatedCategories.splice(tasksIndex, 1);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setCategories(getLocal);
    navigate("/");

    // Notification
    notifySuccess("Usunięto kategorie");
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
              <h2>{task[0]}</h2>
              <Button
                text="Zakończ"
                onClick={() => deleteTask(index)}
                hoverColor="rgba(248, 113, 113, 0.6)"
                color="#AE505A"
              />
            </div>
          ))
        )}
      </div>
      {tasksIndex >= 0 && (
        <>
          <div className="tasks__add">
            <SearchBar onInputChange={setNewTask} color="#F9FAFB50" />
            <Button
              hoverColor="rgba(74, 222, 128, 0.3)"
              text="Dodaj zadanie"
              onClick={addTask}
              color="rgba(249, 250, 251, 0.3)"
            />
          </div>
          <Button
            hoverColor="rgba(248, 113, 113, 0.3)"
            text="Usuń kategorie"
            color="rgba(249, 250, 251, 0.3)"
            onClick={deleteCategory}
          />
        </>
      )}
    </>
  );
};

export default TaskCategory;
