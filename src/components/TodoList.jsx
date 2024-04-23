import React from "react";
import "./TodoList.css";
import { useState } from "react";

// const todosData = [
//   { id: 1, taskName: "Do laundry", isCompleted: false },
//   { id: 2, taskName: "Grocery shopping", isCompleted: false },
// ];

function TodoList({ todos, setTodos, handleDelete, toggleIsCompleted }) {
  return (
    <div className="todolist-container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item-container">
          <p className="taskName">{todo.taskName}</p>
          <input type="checkbox" onClick={() => toggleIsCompleted(todo.id)} />
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
