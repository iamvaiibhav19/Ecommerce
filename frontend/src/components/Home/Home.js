import React from "react";
import { CgMouse } from "react-icons/cg";
import Navbar from "../layout/Header/Navbar";
import FeaturedProduct from "./FeaturedProduct";
import "./Home.scss";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";

const product = {
  name: "Blue Tshirt",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  price: "Rs. 100",
  _id: "vaibhavv",
};

const title = "SastiCheeze";

const Home = () => {
  return (
    <>
      <MetaData title={title} />
      <div className="banner">
        <p>Welcome to SastiCheeze.com</p>
        <h1>FIND AMAZING PRODUCTS FOR REASONABLE PRICES</h1>

        <a href="#1">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <Navbar />
      <FeaturedProduct />
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;
