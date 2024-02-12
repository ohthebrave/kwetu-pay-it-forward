import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function NavBar() {
  return (
    <div className="menu-bar">
      <h1 className="logo">Kwetu-pay</h1>
      <ul>
          <li>
            <NavLink className="bar text-decoration-none fw-light" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <a href="#" className="bar text-decoration-none">What We Do</a>
            <div className="dropdown-menu">
              <ul>
                <li><NavLink to="/mission" className="bar text-decoration-none">Our Mission</NavLink></li>
                <li><NavLink to="/vision" className="bar text-decoration-none">Our Vision</NavLink></li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              className="bar text-decoration-none fw-light"
              to="/our-staff"
            >
              Our Staff
            </NavLink>
          </li>
          <li>
            <NavLink className="bar text-decoration-none fw-light" to="/about">
              About Us
            </NavLink>
          </li>
        </ul>
    </div>
  );
}

export default NavBar;
