import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.isCompleted ? "task-completed" : "incomplete-task"}`}
      >
        {task.task}
      </p>
      <div className="check-mark">{task.isCompleted ? "Completed ✓" : ""}</div>
      <div>
        <ul>
          <li className="delete-icon">
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTodo(task.id)}
            />
            <div className="delete-text">Delete</div>
          </li>
          <li className="edit-icon">
            <FontAwesomeIcon icon={faEdit} onClick={() => editTodo(task.id)} />
            <div className="edit-text">Edit</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
