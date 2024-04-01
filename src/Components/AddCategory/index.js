import { useState } from "react";
import Button from "../ReusableComponents/Button";
import SearchBar from "../ReusableComponents/Input";
import { notifyWarn, notifySuccess } from "../ReusableComponents/Notifications";
import "./index.sass";

const AddCategory = (props) => {
  const [newCategory, setNewCategory] = useState("");
  const [urlIMG, setUrlIMG] = useState("");
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [show, setShow] = useState(false);
  const localStorageCategories = JSON.parse(localStorage.getItem("categories"));

  const addStyle = {
    opacity: closeAnimation ? 0 : 1,
  };

  const close = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      setCloseAnimation(false);
      setShow(false);
    }, 100);
  };

  const addCat = () => {
    if (!urlIMG || !newCategory) {
      notifyWarn(
        "Dodanie kategorii nie powiodło się, sprawdź czy oba pola są uzupełnione."
      );
    } else {
      if (localStorageCategories.find((e) => e.name === newCategory)) {
        notifyWarn(
          "Dodanie kategorii nie powiodło się, kategoria juz istnieje."
        );
      } else {
        const ob = {
          name: newCategory,
          url: urlIMG,
          tasks: [],
        };
        const newLocal = [...localStorageCategories, ob];
        localStorage.setItem("categories", JSON.stringify(newLocal));
        notifySuccess("Dodano kategorię: " + ob.name);
        close();
        props.onClick();
      }
    }
  };

  const visibility = () => {
    if (show === false) {
      setShow(true);
    } else {
      close();
    }
  };

  return (
    <>
      <Button
        hoverColor="rgba(74, 222, 128, 0.3)"
        text="Dodaj nową kategorie"
        color="rgba(249, 250, 251, 0.3)"
        onClick={visibility}
      />
      <div className={show ? "addC" : "addC hide"} style={addStyle}>
        <h2>Nazwa</h2>
        <SearchBar onInputChange={setNewCategory} />
        <h2>Url okładki</h2>
        <SearchBar onInputChange={setUrlIMG} />
        <div className="addC__buttons">
          <Button
            color="#AE505A"
            onClick={close}
            hoverColor="rgba(248, 113, 113, 0.3)"
            text="Anuluj"
          />
          <Button
            color="#549C77"
            hoverColor="rgba(74, 222, 128, 0.3)"
            text="Dodaj"
            onClick={addCat}
          />
        </div>
      </div>
    </>
  );
};

export default AddCategory;
