import React from "react";
import Category from "./Category";

import { v4 as uuid } from "uuid";
function CategoryFilter({ categories, funcFilterCategory }) {
  // console.log(categories);

  const categoryList = categories.map((category) => {
    return <Category key={uuid()} categoryButton={category} filterCategory={funcFilterCategory} />;
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categoryList
        /* render <button> elements for each category here */
      }
    </div>
  );
}

export default CategoryFilter;
