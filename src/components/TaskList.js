import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";
function TaskList({ tasks, funcDelete }) {
  // console.log(tasks);
  // const [category,setCategory]=useState("")

  const taskList = tasks.map((task, idx) => {
    // console.log(idx);
    return <Task key={uuid()} id={idx} category={task.category} text={task.text} taskDelete={funcDelete} />;
  });

  return <div className="tasks">{taskList /* display a list of tasks using Task component */}</div>;
}

export default TaskList;
