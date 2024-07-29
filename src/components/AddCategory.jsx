import { useState } from "react";
import Proptypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    onNewCategory(newInputValue);
    setInputValue("");
  };
  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
};

AddCategory.prototype = {
  onNewCategory: Proptypes.func.isRequired,
};
