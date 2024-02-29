import TaskQuanity from "../../Components/TasksInfo";
import SearchBar from "../../Components/SearchBar";
import Categories from "../../Components/Categories";
import Button from "../../Components/ReusableComponents/Button";

const HomePage = () => {
  return (
    <>
      <h1>Kategorie</h1>
      <TaskQuanity />
      <SearchBar />
      <Categories />
      <Button color="#F9FAFB" text="+ Dodaj nową kategorie" />
    </>
  );
};

export default HomePage;
