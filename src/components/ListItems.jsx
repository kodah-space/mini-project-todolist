import React from "react";
import { Link } from "react-router-dom";

function ListItems({ list, handleDelete }) {
  console.log(list);

  return (
    <div>
      <div className="list-container">
        {list.map((e) => (
          <div key={e.id} className="todo-item-container">
            <p className="listName">{e.listName}</p>

            <Link to={`/dashboard/${e.id}`} key={e.id}>
              <button>See the tasks</button>
            </Link>

            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItems;
