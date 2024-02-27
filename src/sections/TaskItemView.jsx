import React from "react";

const TaskItemView = ({ setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(false)} className="outside">
      TaskItemViewModal
      <button onClick={() => setIsOpen(false)}>Close Task View</button>
    </div>
  );
};

export default TaskItemView;
