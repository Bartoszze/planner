import { useEffect, useState } from "react";
import "./index.sass";

const Taskquantity = () => {
  const [quantity, setquantity] = useState(0);
  const categories = JSON.parse(localStorage.getItem("categories"));

  useEffect(() => {
    setquantity(categories ? categories.length : null);
  }, [categories]);

  return (
    <p className="task">
      {quantity === 0 ? "Brak" : quantity}
      {quantity > 4 || quantity === 0 ? " kategorii" : " kategorie"}
    </p>
  );
};

export default Taskquantity;
