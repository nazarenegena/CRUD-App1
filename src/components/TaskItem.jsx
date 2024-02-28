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
          <td> {task.title}</td>
          <td> {task.description}</td>
          <td>10:30am - 2:30pm</td>
          <td>
            {" "}
            <button className="action-btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="action-btn" onClick={handleDelete}>
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
