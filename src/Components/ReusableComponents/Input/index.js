import { useEffect, useRef } from "react";
import "./index.sass";

const SearchBar = ({ onInputChange, color }) => {
  const inputStyle = {
    backgroundColor: color,
  };

  const inputRef = useRef(null);

  const handleInputChange = () => {
    onInputChange(inputRef.current.value);
  };

  useEffect(() => {
    const input = inputRef.current;
    input.addEventListener("input", handleInputChange);

    return () => {
      input.removeEventListener("input", handleInputChange);
    };
  }, []);

  return (
    <input
      style={inputStyle}
      className="searchBar"
      ref={inputRef}
      type="text"
    />
  );
};

export default SearchBar;
