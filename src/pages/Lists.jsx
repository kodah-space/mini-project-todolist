import React from "react";
import "./Lists.css";
import ListItems from "../components/ListItems";
import { useState } from "react";
// import Dashboard from "./ListOfTodos";
import listData from "../assets/listData.json";
// const todosData = [
//   { id: 1, taskName: "Do laundry", isCompleted: false },
//   { id: 2, taskName: "Grocery shopping", isCompleted: false },
// ];

function Lists() {
  const [list, setList] = useState(listData);
  const [count, setCount] = useState(list.length);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddList = (event) => {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    if (inputValue.trim()) {
      const newId = list.length + 1;
      const newListName = inputValue;
      const newListItem = {
        id: newId,
        listName: newListName,
        tasks: [],
      };
      const listCopy = [...list, newListItem]; // Create a new array with the new task addedtri
      setList(listCopy); // Update the tasks state
      setCount((prevCount) => prevCount + 1);
      setInputValue(""); // Clear the input field
    }
  };

  const handleDelete = (listId) => {
    const filteredList = list.filter((list) => {
      return list.id !== listId;
    });
    setList(filteredList);
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="list-container">
      <h2>List</h2>
      <form onSubmit={handleAddList}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new list"
        />
        <button type="submit">+</button>
      </form>
      {/* <p>
        {isCompletedCount}/{count} done
      </p> */}
      <ListItems list={list} handleDelete={handleDelete} />
      {/* <Dashboard /> */}
    </div>
  );
}

export default Lists;
