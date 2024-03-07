import { useState } from "react";
import bookmark from "../../Assets/Images/bookmark.png";
import bookmarkActive from "../../Assets/Images/bookmarkactive.png";
import Button from "../ReusableComponents/Button";
import SearchBar from "../ReusableComponents/Input";
import notFoundImage from "../../Assets/Images/404.svg";
import "./index.sass";

const TaskCategory = (props) => {
  const [newTask, setNewTask] = useState();
  // Pobiera wartosc z localStorage
  const localStorageCategories = JSON.parse(localStorage.getItem("categories"));

  // Szuka czy nazw z props.category znajduej sie w categories
  const [localStorageTasks, setLocalStorageTasks] = useState(() =>
    localStorageCategories.findIndex((item) => item.name === props.category)
  );

  // Jesli nie ma utowrzonej jeszcze categori to zwraca blad
  if (localStorageCategories === null) {
    return (
      <div className="errorCategory">
        <img src={notFoundImage} alt="404 Error" />
        <h1>Brak takiej kategorii. Popraw swój url</h1>
      </div>
    );
  }

  // Do poprawy
  const addTask = () => {
    const addTask = [
      ...localStorageCategories[localStorageTasks].tasks,
      [`${newTask}`, 0],
    ];
    const ob = {
      ...localStorageCategories[localStorageTasks],
      tasks: [...localStorageCategories[localStorageTasks].tasks, addTask],
    };
    const test = [...localStorageCategories];
    test[localStorageTasks] = ob;
    localStorage.setItem("categories", JSON.stringify(test));
  };

  return (
    <div className="tasks">
      {localStorageTasks < 0 ? (
        <div className="errorCategory">
          <img src={notFoundImage} alt="404 Error" />
          <h1>Brak takiej kategorii. Popraw swój url</h1>
        </div>
      ) : (
        localStorageCategories[localStorageTasks]?.tasks.map((task) => (
          <div className="tasks__block" key={task}>
            <button className="tasks__block--bookmark">
              <img src={0 ? bookmarkActive : bookmark} alt="bookmark" />
            </button>
            <h2>{task}</h2>
            <Button text="Zakończ" color="#549C77" />
          </div>
        ))
      )}
      {localStorageTasks < 0 ? undefined : (
        <>
          <div className="tasks__add">
            <SearchBar onInputChange={setNewTask} color="#F9FAFB50" />
            <Button text="Dodaj zadanie" onClick={addTask} color="#F9FAFB50" />
          </div>
          <Button text="Usuń kategorie" color="#AE505A" />
        </>
      )}

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
