/* eslint-disable array-callback-return */
import React from "react";
import "../styles/TaskItem.css";
import { useState } from "react";
import AddTasks from "../sections/AddTasks";

const TaskItem = ({ task, tasks, setTasks }) => {
  const [editingTodo, setEditingTodo] = useState(false);

  const handleEdit = () => {
    console.log(task.title, "edited task");
    setEditingTodo(true);
  };
  const handleDelete = () => {
    let deletedTask = tasks.filter((taskVal) => taskVal.id !== task.id);
    return setTasks(deletedTask);
  };
  return (
    <>
      <table className="task-items">
        <tbody>
          <td className="td-title"> {task.title}</td>
          <td className="td-description"> {task.description}</td>
          <td className="td-dates">
            {task.startDate} - {task.endDate}
          </td>
          <td className="td-time">
            {task.startTime} - {task.stopTime}
          </td>
          <td>
            {" "}
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </td>
        </tbody>
      </table>
      {editingTodo && (
        <div className="modal">
          <AddTasks
            tasks={tasks}
            setTasks={setTasks}
            setIsOpen={setEditingTodo}
            editing={editingTodo}
            task={task}
          />
        </div>
      )}
    </>
  );
};

export default TaskItem;
