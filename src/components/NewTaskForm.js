import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [detail, setDetail] = useState("");
  const [selectCategory, setSelectCategory] = useState("Code");
  // console.log(categories);

  function handleChangeCategory(event) {
    setSelectCategory(event.target.value);
    console.log(event.target.value);
  }
  function handleChangeDetail(event) {
    setDetail(event.target.value);
    // console.log(event.target.value);
  }

  const category = categories.map((cat) => {
    if (cat != "All") {
      return (
        <option key={uuid()} value={cat}>
          {cat}
        </option>
      );
    }
  });

  function handlSubmit(event) {
    event.preventDefault();
    const newTaskList = {
      category: selectCategory,
      text: detail,
    };
    console.log(newTaskList);
    onTaskFormSubmit(newTaskList);
  }
  return (
    <form className="new-task-form" onSubmit={handlSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChangeDetail} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChangeCategory}>
          {category /* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
