import React from "react";
import { useState, useEffect } from "react";
import "../styles/AddTasks.css";

const AddTasks = ({ tasks, setTasks, setIsOpen, editing, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editing) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [editing, task]);

  const handleSubmitTask = (event) => {
    event.preventDefault();

    const taskItem = {
      id: Math.random(),
      title: title,
      description: description,
    };
    setTasks([...tasks, taskItem]);
    setTitle("");
    setDescription("");
  };

  const handleEditTask = (event) => {
    event.preventDefault();

    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        item.title = title;
        item.description = description;
      }

      return item;
    });
    setTasks([...updatedTasks]);
  };
  return (
    <>
      <div className="add-tasks-form">
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
        {editing ? (
          <button onClick={handleEditTask} className="edit-task">
            Edit{" "}
          </button>
        ) : (
          <button onClick={handleSubmitTask} className="add-task">
            Add{" "}
          </button>
        )}
      </div>
      <button className="cancel-modal" onClick={() => setIsOpen(false)}>
        X
      </button>
    </>
  );
};

export default AddTasks;
