import { useState } from "react";
import Button from "../ReusableComponents/Button";
import SearchBar from "../ReusableComponents/Input";
import "./index.sass";

const AddCategory = ({ show, onClose }) => {
  const [newCategory, setNewCategory] = useState(false);
  const [urlIMG, setUrlIMG] = useState(false);

  const addCat = () => {
    const ob = {
      name: newCategory,
      url: urlIMG,
      tasks: [],
    };
    const localStorageCategories = JSON.parse(
      localStorage.getItem("categories")
    );
    const newLocal = [...localStorageCategories, ob];
    localStorage.setItem("categories", JSON.stringify(newLocal));
  };

  return (
    <div className={show ? "addC" : "addC hide"}>
      <h2>Nazwa</h2>
      <SearchBar onInputChange={setNewCategory} />
      <h2>Url okładki</h2>
      <SearchBar onInputChange={setUrlIMG} />
      <div className="addC__buttons">
        <Button color="#AE505A" onClick={onClose} text="Anuluj" />
        <Button color="#549C77" text="Dodaj" onClick={(addCat, onClose)} />
      </div>
    </div>
  );
};

export default AddCategory;
