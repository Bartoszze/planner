import TaskQuanity from "../../Components/TasksInfo";
import Categories from "../../Components/Categories";
import AddCategory from "../../Components/AddCategory";
import { useState } from "react";
import SearchBar from "../../Components/ReusableComponents/Input";

const HomePage = () => {
  const [search, setSearch] = useState();
  const getLocal = () => JSON.parse(localStorage.getItem("categories"));
  const [localStorageCategories, setLocalStorageCategories] =
    useState(getLocal);

  const refreshStorage = () => {
    setLocalStorageCategories(getLocal);
  };

  return (
    <>
      <h1>Kategorie</h1>
      <TaskQuanity />
      <SearchBar onInputChange={setSearch} />
      <Categories find={search} localStorage={localStorageCategories} />
      <AddCategory onClick={refreshStorage} />
    </>
  );
};

export default HomePage;
