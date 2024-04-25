import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../pages/ListOfTodos";
import "./ListItem.css";

function ListItems({ list, handleDelete }) {
  return (
    <div>
      <div className="list-container">
        {list.map((e) => (
          <div key={e.id} className="list-item">
            <p className="listName">{e.listName}</p>

            <Link
              to={{
                pathname: `/dashboard/${e.id}`,
              }}
              key={e.id}
            >
              <button className="btn">See the tasks</button>
            </Link>

            <button className="btn" onClick={() => handleDelete(e.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default ListItems;
