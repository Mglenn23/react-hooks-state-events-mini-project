import React from "react";

function Category({ categoryButton, filterCategory }) {
  function handleCategoryClick() {
    console.log(categoryButton);

    filterCategory(categoryButton);
  }
  return (
    <button className="selected" onClick={handleCategoryClick} value={categoryButton}>
      {categoryButton}
    </button>
  );
}

export default Category;
