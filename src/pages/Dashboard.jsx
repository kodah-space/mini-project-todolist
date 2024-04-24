import React from "react";
import "./Dashboard.css";
import TodoList from "../components/TodoList";
import { useState } from "react";

const todosData = [
  { id: 1, taskName: "Do laundry", isCompleted: false },
  { id: 2, taskName: "Grocery shopping", isCompleted: false },
];

function Dashboard() {
  const [todos, setTodos] = useState(todosData);
  const [count, setCount] = useState(0);
  // filter the todosData checke how many is false and how many is true and inside html tag

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    if (inputValue.trim()) {
      const newId = todos.length + 1;
      const newTaskName = inputValue;
      const newTodoItem = {
        id: newId,
        taskName: newTaskName,
        isCompleted: false,
      };
      const todosCopy = [...todos, newTodoItem]; // Create a new array with the new task addedtri
      console.log(todosCopy);
      setTodos(todosCopy); // Update the tasks state
      setInputValue(""); // Clear the input field
    }
  };

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
    let result = todos.filter((word) => word.length > 6);
  }

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">+</button>
      </form>

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
