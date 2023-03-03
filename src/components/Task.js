import React, { useState } from "react";
import "./Task.css";

function Task(props) {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    props.add(input);
    setInput('');
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box"
        placeholder="Drop your tasks here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="btn" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
}

export default Task;
