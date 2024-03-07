import React, { useState } from "react";
import ToDoItem from './ToDoItem';
import './ToDoItem.css';

function ToDoList() {

    const [todos, setTodos] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    function handleAddTask() {
        if (newTaskText.trim() !== '') {
            const newTodo = {
                id: todos.length + 1,
                task: newTaskText,
                isCompleted: false,
            }
            setTodos([...todos, newTodo])
            setNewTaskText('')
        }
    }

    console.log(todos);
    return (

        <div className="list-container">
            <h3>ToDo List</h3>
            {
                todos ? todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} />
                )) :    null
            }
            <input type="text" 
            value={newTaskText} placeholder="New task..."className="todo" onChange={e => setNewTaskText(e.target.value)}>
            </input>
            <button onClick={handleAddTask}>New Task</button>
        </div>

    );
}

export default ToDoList;
