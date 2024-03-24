import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import errorCover from "../../Assets/Images/404.png";
import add from "./../../Assets/Images/add.png";
import "./index.sass";

const Categories = () => {
  const [show, setShow] = useState(false);
  const localStorageCategories = JSON.parse(localStorage.getItem("categories"));

  useEffect(() => {
    if (localStorageCategories === null) {
      localStorage.setItem("categories", JSON.stringify([]));
      setShow(true);
    } else {
      if (!localStorageCategories[0]) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [localStorageCategories, show]);

  const onImageError = (e) => {
    e.target.src = errorCover;
  };

  return (
    <div className="categories">
      {show && (
        <div className="categories__add">
          <img src={add} alt="Add post" fetchpriority="high" />
          <h2>Brak katologów</h2>
          <p>Dodaj katalog aby zobaczyć go tutaj.</p>
        </div>
      )}
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
