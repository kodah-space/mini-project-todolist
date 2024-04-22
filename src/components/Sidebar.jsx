import React from "react";
import "./Sidebar.css";

import { Routes, Route } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        {/* Add more links as your app grows */}
      </ul>
    </div>
  );
}

export default Sidebar;
