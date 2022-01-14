import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
