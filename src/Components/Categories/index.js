import { Link } from "react-router-dom";
import errorCover from "../../Assets/Images/404.svg";
import "./index.sass";

const Categories = () => {
  const localStorageCategories = JSON.parse(localStorage.getItem("categories"));
  const onImageError = (e) => {
    e.target.src = errorCover;
  };

  return (
    <div className="categories">
      {localStorageCategories &&
        localStorageCategories.map((category) => (
          <Link key={category.name} to={"/category/" + category.name}>
            <div className="categories__block">
              <img
                className="categories__block--img"
                src={category.url}
                onError={onImageError}
                alt="Category cover"
              />
              <h2>{category.name}</h2>
              <p>
                {category.tasks.length}
                {category.tasks.length > 1 && category.tasks.length < 5
                  ? " zadania"
                  : " zadań"}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Categories;
