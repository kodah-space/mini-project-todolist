import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../pages/ListOfTodos";

function ListItems({ list, handleDelete }) {
  return (
    <div>
      <div className="list-container">
        {list.map((e) => (
          <div key={e.id} className="todo-item-container">
            <p className="listName">{e.listName}</p>

            <Link
              to={{
                pathname: `/dashboard/${e.id}`,
              }}
              key={e.id}
            >
              <button>See the tasks</button>
            </Link>

            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default ListItems;
