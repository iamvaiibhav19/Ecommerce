import React from "react";
import { CgMouse } from "react-icons/cg";
import Navbar from "../layout/Header/Navbar";
import FeaturedProduct from "./FeaturedProduct";
import "./Home.scss";
import Product from "./Product.js";

const product = {
  name: "Blue Tshirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "Rs. 100",
  _id: "vaibhavv",
};

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
      <FeaturedProduct />
      <div className="container" id="container">
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;
