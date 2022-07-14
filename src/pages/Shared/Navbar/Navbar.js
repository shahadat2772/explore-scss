import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navbar = document.querySelector(".navbarContainer");
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };

  return (
    <div className="navbarContainer">
      <nav className="navbar">
        <h2 className="navBrand">
          <a href="">Heimdall</a>
        </h2>
        <div className="navItems">
          <li>
            <NavLink to={"/"}>Content Sample</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Author List</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Tag List</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Login</NavLink>
          </li>
          <li>
            <button className="subscribeButton">Subscribe</button>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faMoon} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
