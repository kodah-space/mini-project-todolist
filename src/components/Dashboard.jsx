import React from "react";
import "./Dashboard.css";
import TodoList from "./TodoList";
import { useState } from "react";

const todosData = [
  { id: 1, taskName: "Do laundry", isCompleted: false },
  { id: 2, taskName: "Grocery shopping", isCompleted: false },
];

function Dashboard() {
  const [todos, setTodos] = useState(todosData);

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
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        handleDelete={handleDelete}
        toggleIsCompleted={toggleIsCompleted}
      />
    </div>
  );
}

export default Dashboard;
