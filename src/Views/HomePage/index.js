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
        hoverColor="rgba(74, 222, 128, 0.3)"
        text="Dodaj nową kategorie"
        color="rgba(249, 250, 251, 0.3)"
        onClick={() => setShowAddBox(!showAddBox)}
      />
      <AddCategory show={showAddBox} onClose={() => setShowAddBox(false)} />
    </>
  );
};

export default HomePage;
