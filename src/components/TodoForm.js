import React,{useState} from 'react'
//useState is a hook that allows you to have state variables in functional components
//here it used to keep track of user input
export const TodoForm = ({addTodo}) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();//prevent the default behavior of the form, which when submitted page will reloads
    addTodo(input);//pass the input to the addTodo function
    setInput('');//reset the input to empty string after submitting
  }
  return (

    <form
      className="TodoForm"
      onSubmit={handleSubmit}
    >
      <input
        className="TodoInput"
        text="text"
        value={input}
        placeholder="What is the task for today?"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="TodoButton" type="submit">
        Add Task
      </button>
    </form>
  );
}
