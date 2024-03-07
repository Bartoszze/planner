import TaskQuanity from "../../Components/TasksInfo";
import Categories from "../../Components/Categories";
import Button from "../../Components/ReusableComponents/Button";
import AddCategory from "../../Components/AddCategory";
import { useState } from "react";
import SearchBar from "../../Components/ReusableComponents/Input";

const HomePage = () => {
  const [showAddBox, setShowAddBox] = useState(false);
  const [search, setSearch] = useState();

  return (
    <>
      <h1>Kategorie</h1>
      <TaskQuanity />
      <SearchBar onInputChange={setSearch} />
      <Categories />
      <Button
        color="#549C77"
        text="Dodaj nową kategorie"
        onClick={() => setShowAddBox(!showAddBox)}
      />
      <AddCategory show={showAddBox} onClose={() => setShowAddBox(false)} />
    </>
  );
};

export default HomePage;
