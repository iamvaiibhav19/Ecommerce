import "./Navbar.scss";
import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav" id="1">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>asti
            <span>C</span>heeze
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="nav-tools">
          <ul className="nav-tools-desktop">
            <li>
              <Link to="/search">
                <FaSearch className="searchIcon" />
              </Link>
            </li>
            <li>
              <Link to="/Cart">
                <FaShoppingCart className="cartIcon" />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FaUserCircle className="userIcon" />
              </Link>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
