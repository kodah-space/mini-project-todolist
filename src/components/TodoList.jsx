import React from "react";
import "./ListItem.css";
import { useState } from "react";

// const todosData = [
//   { id: 1, taskName: "Do laundry", isCompleted: false },
//   { id: 2, taskName: "Grocery shopping", isCompleted: false },
// ];

function TodoList({ todos, handleDelete, toggleIsCompleted }) {
  return (
    <div className="list-container">
      {todos.map((todo) => (
        <div key={todo.tId} className="list-item">
          <p className="taskName">{todo.taskName}</p>
          <input type="checkbox" onClick={() => toggleIsCompleted(todo.tId)} />
          <button className="btn" onClick={() => handleDelete(todo.tId)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
