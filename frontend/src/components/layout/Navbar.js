import "./Navbar.css";
import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="nav-tools">
          <ul className="nav-tools-desktop">
            <li>
              <a href="#">
                <FaSearch className="searchIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaShoppingCart className="cartIcon" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaUserCircle className="userIcon" />
              </a>
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
