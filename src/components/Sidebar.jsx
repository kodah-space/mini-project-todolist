import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          {" "}
          <Link to="/"> Dashboard </Link> {/* <== ADD */}
        </li>
        <li>
          <Link to="/about"> About </Link> {/* <== ADD */}
        </li>

        {/* Add more links as your app grows */}
      </ul>
    </div>
  );
}

export default Sidebar;
