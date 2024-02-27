import React from "react";
import "../styles/TaskItem.css";

const TaskItem = ({ task }) => {
  const handleView = () => {
    console.log(task, "new feature task");
    return task;
  };
  return (
    <table className="task-items">
      <tbody>
        <td> {task.title}</td>
        <td> {task.description}</td>
        <td>10:30am - 2:30pm</td>
        <td>
          {" "}
          <button className="action-btn" onClick={handleView}>
            View
          </button>
        </td>
      </tbody>
    </table>
  );
};

export default TaskItem;
