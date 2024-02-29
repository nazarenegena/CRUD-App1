import React from "react";
import { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import "../styles/AddTasks.css";

const AddTasks = ({ tasks, setTasks, setIsOpen, editing, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [stopTime, setStopTime] = useState("");

  useEffect(() => {
    if (editing) {
      setTitle(task.title);
      setDescription(task.description);
      setStartDate(task.startDate);
      setEndDate(task.endDate);
      setStartTime(task.startTime);
      setStopTime(task.stopTime);
    }
  }, [editing, task]);

  const handleSubmitTask = (event) => {
    event.preventDefault();

    const taskItem = {
      id: Math.random(),
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      stopTime: stopTime,
    };
    setTasks([...tasks, taskItem]);
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setStartTime("");
    setStopTime("");
  };

  const handleEditTask = (event) => {
    event.preventDefault();

    const updatedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        item.title = title;
        item.description = description;
        item.startDate = startDate;
        item.endDate = endDate;
        item.startTime = startTime;
        item.stopTime = stopTime;
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
            required
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
            required
          />
        </div>

        <div className="dates">
          <div className="start-date">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              name="start-date"
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
              required
            />
          </div>
          <div className="end-date">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              name="end-date"
              onChange={(event) => {
                setEndDate(event.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="times">
          <div className="start-time">
            <label>Start Time</label>
            <input
              type="time"
              name="start"
              value={startTime}
              onChange={(event) => {
                setStartTime(event.target.value);
              }}
              required
            />
          </div>
          <div className="end-time">
            <label>Stop Time</label>
            <input
              type="time"
              name="stop"
              value={stopTime}
              onChange={(event) => {
                setStopTime(event.target.value);
              }}
            />
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
      <ImCancelCircle
        onClick={() => setIsOpen(false)}
        size={40}
        color=""
        className="cancel-modal"
      />
    </>
  );
};

export default AddTasks;
