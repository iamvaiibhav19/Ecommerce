import "./App.css";
import React from "react";
import Navbar from "./components/layout/Header/Navbar.js";
import Footer from "./components/layout/Footer/Footer.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
    </Router>
  );
}

export default App;
