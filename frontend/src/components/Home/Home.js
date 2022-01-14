import React from "react";
import { CgMouse } from "react-icons/cg";
import Navbar from "../layout/Header/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Welcome to SastiCheeze.com</p>
        <h1>FIND AMAZING PRODUCTS FOR REASONABLE PRICES</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <Navbar />
    </>
  );
};

export default Home;
