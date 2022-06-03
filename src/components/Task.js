import React from "react";

function Task({ id, category, text, taskDelete }) {
  // console.log(category);
  // console.log(id);
  function handleDeleteCkick() {
    // console.log(id);
    taskDelete(text);
    // findIndex(id);
    // console.log("delete click");
  }
  return (
    <div className="task" id={id}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteCkick}>
        X
      </button>
    </div>
  );
}

export default Task;
