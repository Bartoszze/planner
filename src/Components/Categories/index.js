import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import errorCover from "../../Assets/Images/404.png";
import add from "./../../Assets/Images/add.png";
import "./index.sass";

const Categories = (props) => {
  const [show, setShow] = useState(false);
  const getLocal = () => JSON.parse(localStorage.getItem("categories"));
  const [localStorageCategories, setLocalStorageCategories] =
    useState(getLocal);

  useEffect(() => {
    setLocalStorageCategories(props.localStorage);
  }, [props.localStorage]);

  useEffect(() => {
    if (localStorageCategories === null) {
      localStorage.setItem("categories", JSON.stringify([]));
      setShow(true);
    } else {
      setShow(!localStorageCategories?.length ? true : false);
    }
  }, [localStorageCategories, show]);

  useEffect(() => {
    if (props.find) {
      const filteredCategories = localStorageCategories.filter((element) =>
        element.name.includes(props.find)
      );
      setLocalStorageCategories(
        filteredCategories.length === 0 ? getLocal : filteredCategories
      );
    } else {
      setLocalStorageCategories(getLocal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.find]);

  const onImageError = useCallback((e) => {
    e.target.src = errorCover;
  }, []);

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
