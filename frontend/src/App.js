import "./App.css";
import React from "react";

import Footer from "./components/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Loader from "./components/layout/Loader/Loader";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Navbar /> */}

      {/*Home page*/}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
