import React from "react";
import Button from "../components/Button";
import Tasks from "./Tasks";

const AddTasks = () => {
  return (
    <div class="add-tasks">
      <form className="add-tasks-form">
        <div className="title">
          <label>Title</label>
          <input type="text" name="title" required />
        </div>
        <div className="description">
          <label>Description</label>
          <textarea name="description" />
        </div>
        <div className="dates">
          <div className="start-date">
            <label>Start Date</label>
            <input type="date" value="yyyy-mm-dd" required />
          </div>
          <div className="end-date">
            <label>Start Date</label>
            <input type="date" value="yyyy-mm-dd" required />
          </div>
        </div>
        <div className="times">
          <div className="start-time">
            <label>Start Time</label>
            <input type="time" name="start" value="" required />
          </div>
          <div className="end-time">
            <label>Stop Time</label>
            <input type="time" name="stop" value="" required />
          </div>
        </div>
        <input type="submit" value="Add Task" />
      </form>
      <Tasks />
      <Button />
    </div>
  );
};

export default AddTasks;
