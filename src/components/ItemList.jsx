import React from "react";
import "./Itemlist.css";

const items = [
  { id: 1, name: "Do laundry" },
  { id: 2, name: "Grocery shopping" },
];

function ItemList() {
  return (
    <div className="itemlist-container">
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default ItemList;
