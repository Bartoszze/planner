import HeaderCategory from "../../Components/CategoryHeader";
import TaskCategory from "../../Components/CategoryTask";
import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  const urlCategory = params.categoryName;
  return (
    <>
      <HeaderCategory headline={urlCategory} />
      <TaskCategory urlError={urlCategory} category={urlCategory} />
    </>
  );
};

export default Category;
