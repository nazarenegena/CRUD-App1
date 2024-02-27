import "../src/styles/App.css";
import AddTasks from "./sections/AddTasks";
import Tasks from "./sections/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="content">
      <button className="add-tasks-btn" onClick={() => setIsOpen(true)}>
        Add your task
      </button>
      {isOpen && (
        <div className="modal">
          <AddTasks tasks={tasks} setTasks={setTasks} setIsOpen={setIsOpen} />
        </div>
      )}

      <Tasks setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
