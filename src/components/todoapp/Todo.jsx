import React, { useState } from "react";
import "./index.css";
function Todo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const uptask = [...task];
      [uptask[index], uptask[index + 1]] = [uptask[index + 1], uptask[index]];
      setTask(uptask);
    }
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const uptask = [...task];
      [uptask[index], uptask[index - 1]] = [uptask[index - 1], uptask[index]];
      setTask(uptask);
    }
  }
  return (
    <div className="to-do">
      <h1>WHAT YOU DO TODAY</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {task.map((element, index) => (
          <li key={index}>
            <span className="text">{element}</span>
            <button className="delete" onClick={() => deleteTask(index)}>
              deleteTask
            </button>
            <button className="move" onClick={() => moveTaskUp(index)}>
              moveOnTop
            </button>
            <button className="move" onClick={() => moveTaskDown(index)}>
              moveOnDown
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
