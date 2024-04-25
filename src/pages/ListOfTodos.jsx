import React from "react";
import "./ListOfTodos.css";
import TodoList from "../components/TodoList";
import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import listData from "../assets/listData.json";

function ListOfTodos() {
  const { listId } = useParams();
  const oneList = listData.find((list) => list.id === +listId);
  const [todos, setTodos] = useState(oneList.tasks);
  const [count, setCount] = useState(todos.length);
  const [isCompletedCount, setisCompletedCount] = useState("");

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
        tId: newId,
        taskName: newTaskName,
        isCompleted: false,
      };
      const todosCopy = [...todos, newTodoItem]; // Create a new array with the new task addedtri
      setTodos(todosCopy); // Update the tasks state
      setCount((prevCount) => prevCount + 1);
      setInputValue(""); // Clear the input field
    }
  };

  const handleDelete = (todoId) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.tId !== todoId;
    });
    setTodos(filteredTodos);
    setCount((prevCount) => prevCount - 1);
  };

  function toggleIsCompleted(todoId) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.tId === todoId ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
    setisCompletedCount(
      todos.filter((obj) => obj.isCompleted === true).length + 1
    );
    // let result = todos.filter((word) => word.length > 6);
  }

  return (
    <div className="dashboard-container">
      <h2>Task</h2>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          className="task-form"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">+</button>
      </form>

      <p>
        {isCompletedCount}/{count} done
      </p>

      <TodoList
        todos={todos}
        setTodos={setTodos}
        handleDelete={handleDelete}
        toggleIsCompleted={toggleIsCompleted}
      />
    </div>
  );
}

export default ListOfTodos;
