import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import PageNotFound from "./components/PageNotFound";
import About from "./pages/About";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Lists from "./pages/Lists";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="side-main-container">
        <Sidebar />
        <Routes>
          <Route path="/dashboard/:listId" element={<Dashboard />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
