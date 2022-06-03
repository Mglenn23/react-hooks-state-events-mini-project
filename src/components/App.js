import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// console.log(TASKS);
function App() {
  const [task, setTask] = useState(TASKS);
  const [submit, setSubmit] = useState([]);
  const [category, setCategory] = useState("All");
  function deleteTask(text) {
    setTask(
      task.filter((task) => {
        return task.text !== text;
      })
    );
  }
  function filterCategory(categorySelected) {
    // console.log(categorySelected);
    setCategory(categorySelected);
  }
  const filter = task.filter((task) => {
    // console.log(category);

    if (task.category === category) {
      return task;
    } else if (category === "All") {
      return task;
    }
  });
  // console.log(filter);

  function addTaskList(list) {
    // console.log(list);
    setTask([...task, list]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} funcFilterCategory={filterCategory} />
      <NewTaskForm onTaskFormSubmit={addTaskList} categories={CATEGORIES} />
      <TaskList tasks={filter} funcDelete={deleteTask} />
    </div>
  );
}

export default App;
