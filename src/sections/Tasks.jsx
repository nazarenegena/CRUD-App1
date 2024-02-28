import React from "react";
import TaskItem from "../components/TaskItem";
import "../styles/Tasks.css";

const Tasks = ({ tasks, setTasks }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskItem task={task} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
