import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import PageNotFound from "./components/PageNotFound";
import About from "./pages/About";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListOfTodos from "./pages/ListOfTodos";
import Lists from "./pages/Lists";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Lists />} />
          <Route path="/dashboard/:listId" element={<ListOfTodos />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
