import React from "react";
import "./ListOfTodos.css";
import TodoList from "../components/TodoList";
import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

// const todosData = [
//   { id: 1, taskName: "Do laundry", isCompleted: false },
//   { id: 2, taskName: "Grocery shopping", isCompleted: false },
// ];

const listData = [
  {
    id: 1,
    listName: "homestuff",
    tasks: [
      { tId: 1, taskName: "Do laundry", isCompleted: false },
      { tId: 2, taskName: "Grocery shopping", isCompleted: false },
    ],
  },
  {
    id: 2,
    listName: "School Stuff",
    tasks: [
      { tId: 1, taskName: "Homeworks", isCompleted: false },
      { tId: 2, taskName: "Assignment", isCompleted: false },
    ],
  },
];

function ListOfTodos({ listItem }) {
  console.log(useLocation().state);
  const { listId } = useParams();
  // const location = useLocation();
  // const { listItem } = location.state || {};
  //const { listItem } = location.state || {};
  // console.log(listItem);

  const [todos, setTodos] = useState(listData[1].tasks);
  const [count, setCount] = useState(todos.length);
  const [isCompletedCount, setisCompletedCount] = useState("");
  console.log(listId);
  const listContent = listData.find((e) => e.id === listId);
  console.log(listContent);

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
      console.log(todosCopy);
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
      <h2>Task Items</h2>

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
