import { useState, useEffect } from "react";
import { notifySuccess, notifyWarn } from "../ReusableComponents/Notifications";
import ErrorComponent from "../ErrorInfo";
import bookmarkImage from "../../Assets/Images/bookmark.png";
import bookmarkActiveImage from "../../Assets/Images/bookmarkactive.png";
import Button from "../ReusableComponents/Button";
import SearchBar from "../ReusableComponents/Input";
import "./index.sass";
import { useNavigate } from "react-router-dom";
import { Reorder } from "framer-motion";

const TaskCategory = (props) => {
  let navigate = useNavigate();
  const [newTask, setNewTask] = useState();
  const getLocal = () => JSON.parse(localStorage.getItem("categories"));
  const [categories, setCategories] = useState(getLocal);
  const [updatedCategories, setUpdateCategories] = useState(() => {
    if (categories === null) {
      return [];
    } else {
      return [...categories];
    }
  });

  const tasksIndex = categories?.findIndex(
    (item) => item.name === props.category
  );

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setCategories(getLocal);
  }, [updatedCategories]);

  const addTask = () => {
    if (newTask === "" || newTask === undefined) {
      notifyWarn("Próbujesz dodać puste zadanie");
    } else {
      if (categories[tasksIndex]?.tasks.find((e) => e[0] === newTask)) {
        notifyWarn("Próbujesz dodać istniejące już zadanie");
      } else {
        setUpdateCategories((prevCategories) => {
          const newCategories = [...prevCategories];
          const newTaskArray = [
            ...newCategories[tasksIndex].tasks,
            [`${newTask}`, false],
          ];

          newCategories[tasksIndex] = {
            ...newCategories[tasksIndex],
            tasks: newTaskArray,
          };

          return newCategories;
        });

        // Notification
        notifySuccess("Dodano zadanie");
      }
    }
  };

  const toogleBookmarkStatus = (index, text) => {
    setUpdateCategories((prevCategories) => {
      const newCategories = [...prevCategories];

      const updatedTasks = newCategories[tasksIndex].tasks.map(
        (task, taskIndex) => {
          if (taskIndex === index) {
            return [task[0], !task[1]];
          }
          return task;
        }
      );
      newCategories[tasksIndex] = {
        ...newCategories[tasksIndex],
        tasks: updatedTasks,
      };

      return newCategories;
    });

    // Notification;
    notifySuccess("Zmieniono status zadania: " + text);
  };

  const deleteTask = (index) => {
    setUpdateCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      newCategories[tasksIndex].tasks.splice(index, 1);

      return newCategories;
    });

    // Notification;
    notifySuccess("Usunięto zadanie");
  };

  const deleteCategory = () => {
    setUpdateCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      newCategories.splice(tasksIndex, 1);
      return newCategories;
    });

    // Navigate to homePage
    setTimeout(() => {
      navigate("/");
    }, 100);

    // Notification
    notifySuccess("Usunięto kategorie");
  };

  return (
    <>
      {updatedCategories.length === 0 ? (
        <ErrorComponent urlError={props.urlError} />
      ) : (
        <>
          <div className="tasks">
            {tasksIndex < 0 ? (
              <ErrorComponent urlError={props.urlError} />
            ) : (
              <Reorder.Group
                axis="y"
                onReorder={(newTasks) => {
                  const updatedCategories = [...categories];
                  updatedCategories[tasksIndex].tasks = newTasks;
                  setCategories(updatedCategories);
                  setUpdateCategories(categories);
                }}
                values={categories[tasksIndex]?.tasks}
              >
                {categories[tasksIndex]?.tasks.map((task, index) => (
                  <Reorder.Item key={task[0]} value={task}>
                    <div className="tasks__block">
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
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            )}
          </div>
          {tasksIndex >= 0 && (
            <>
              <div className="tasks__add">
                <SearchBar onInputChange={setNewTask} />
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
      )}
    </>
  );
};

export default TaskCategory;
