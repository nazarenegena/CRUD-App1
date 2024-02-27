import React from "react";
import { useState } from "react";
import "../styles/AddTasks.css";

const AddTasks = ({ tasks, setTasks, setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitTask = (event) => {
    event.preventDefault();

    const taskItem = {
      id: Math.random(),
      title: title,
      description: description,
    };
    setTasks([...tasks, taskItem]);
    console.log(tasks, "the tasks");
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <form className="add-tasks-form">
        <div className="title">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="description">
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div className="dates">
          <div className="start-date">
            <label>Start Date</label>
            <input type="date" value="yyyy-mm-dd" />
          </div>
          <div className="end-date">
            <label>End Date</label>
            <input type="date" value="yyyy-mm-dd" />
          </div>
        </div>
        <div className="times">
          <div className="start-time">
            <label>Start Time</label>
            <input type="time" name="start" value="" />
          </div>
          <div className="end-time">
            <label>Stop Time</label>
            <input type="time" name="stop" value="" />
          </div>
        </div>
        <button onClick={handleSubmitTask} className="add-task">
          Add{" "}
        </button>
      </form>
      <button className="cancel-modal" onClick={() => setIsOpen(false)}>
        X
      </button>
    </>
  );
};

export default AddTasks;
