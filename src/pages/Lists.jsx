import React from "react";
import "./Lists.css";
import ListItems from "../components/ListItems";
import { useState } from "react";

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

function Lists() {
  const [list, setList] = useState(listData);
  const [count, setCount] = useState(list.length);

  console.log(list);

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
    </div>
  );
}

export default Lists;
