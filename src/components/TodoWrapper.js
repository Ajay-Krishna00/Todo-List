import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import CurrentDate from './Date';
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]); //todos is the state variable and setTodos is the function that updates the state variable
  const addTodo = todo => {
    setTodos([...todos,//spread operator to copy the existing todos
      {
        id: uuidv4(), //generate a unique id
        task: todo,   //task is the user input
        isCompleted: false,//set the default value of isCompleted to false
        isEditing: false//set the default value of isEditing to false
      }
    ])
    console.log(todos)
  }
  const toggleComplete = id => {    
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }
        return todo;
      })
    )
  }
  const deleteTodo = id => { 
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = (id) => { 
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isEditing: !todo.isEditing
          }
        }
        return todo;
      })
    )
  }
  const editTask = (task, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            task: task,
            isEditing: !todo.isEditing
          }
        }
        return todo;
      })
    )
  }
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <div className="date">
        <CurrentDate />
        {/* <div>{new Date().toLocaleString("en-US", { day: "2-digit" })}</div> */}
      </div>
      <TodoForm addTodo={addTodo} />
      {todos.map(
        (
          todo,
          index //map through the todos array and return a Todo component for each todo
        ) =>
          todo.isEditing ? (
            <EditTodoForm key={index} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={index}
              task={todo} //pass the todo as a prop to the Todo component
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
      )}
    </div>
  );
}
