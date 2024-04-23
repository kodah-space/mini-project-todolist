import React from "react";
import "./TodoList.css";
import { useState } from "react";

const todosData = [
  { id: 1, taskName: "Do laundry", isCompleted: false },
  { id: 2, taskName: "Grocery shopping", isCompleted: false },
];

function TodoList() {
  const [todos, setTodos] = useState(todosData);
  // const [taskName, setTask] = useState("");
  // const [isCompleted, setIsCompleted] = useState(false);

  const handleDelete = (todoId) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  };

  function toggleIsCompleted(todoId) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todoId ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

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
