import { Link } from "react-router-dom";
import "./index.sass";

const Categories = () => {
  const localStorageCategories = JSON.parse(localStorage.getItem("categories"));
  return (
    <div className="categories">
      {localStorageCategories.map((category) => (
        <Link key={category.name} to={"/category/" + category.name}>
          <div className="categories__block">
            <img
              className="categories__block--img"
              src={category.url}
              alt="Category cover"
            />
            <h2>{category.name}</h2>
            <p>
              {category.tasks.length}{" "}
              {category.tasks.length > 1 ? "zadania" : "zadań"}
            </p>
          </div>
        </Link>
      ))}
      {/* Skeleton
      <div className="categories__block">
        <img className="categories__block--img" src="" alt="Category cover" />
        <h2>Testowe</h2>
        <p>2 zadania</p>
      </div> */}
    </div>
  );
};

export default Categories;
