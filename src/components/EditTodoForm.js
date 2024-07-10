import React, { useState } from "react";
//useState is a hook that allows you to have state variables in functional components
//here it used to keep track of user input
export const EditTodoForm = ({ editTodo,task }) => {
  const [input, setInput] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent the default behavior of the form, which when submitted page will reloads
    editTodo(input,task.id); //pass the input to the editTodo function
    setInput(""); //reset the input to empty string after submitting
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="TodoInput"
        text="text"
        value={input}
        placeholder="Update Task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="TodoButton" type="submit">
        Update Task
      </button>
    </form>
  );
};
