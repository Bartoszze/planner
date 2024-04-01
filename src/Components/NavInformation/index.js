import { useState, useEffect } from "react";
import "./index.sass";

const NavInformation = () => {
  const [quantity, setQuantity] = useState(0);
  const categories = JSON.parse(localStorage.getItem("categories"));

  useEffect(() => {
    setQuantity(categories ? categories.length : null);
  }, [categories]);

  return (
    <>
      <div className="navInfo">
        <h2>Ilość kategori: {quantity}</h2>
      </div>
      <div className="navInfo">
        <h2>Ilość zadań zakończonych: {quantity}</h2>
      </div>
      <div className="navInfo">
        <h2>Ilość zadań zakończonych: {quantity}</h2>
      </div>
    </>
  );
};

export default NavInformation;
