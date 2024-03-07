import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './ToDoItem.css'

function ToDoItem(todo) {
    console.log("todo");
    console.log(todo)
    return (
        <div className="todo">
            {todo.isCompleted ? <input type="checkbox" className="check done"></input> : <input type="checkbox" className="check not-done"></input>}
            <p>{todo.todo.task}</p>
            <div className="drag-icon">
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}
export default ToDoItem;
