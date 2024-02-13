import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../assets/logo2.png"

function NavBar() {
  return (
    <div className="menu-bar">
      <div className="logo-start">
      <NavLink to="/"><img src={logo} className="logo"/></NavLink>
      <p>Kwetu Foundation</p>
      </div>
     
      <ul className="bar-1">
          <li>
            <NavLink className="bar text-decoration-none" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <a href="#" className="bar text-decoration-none">What We Do</a>
            <div className="dropdown-menu">
              <ul>
                <li><NavLink to="/mission" className="bar-2 text-decoration-none">Our Mission</NavLink></li>
                <li><NavLink to="/vision" className="bar-2 text-decoration-none">Our Vision</NavLink></li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              className="bar text-decoration-none"
              to="/our-staff"
            >
              Our Staff
            </NavLink>
          </li>
          <li>
            <NavLink className="bar text-decoration-none" to="/about">
              About Us
            </NavLink>
          </li>
        </ul>
    </div>
  );
}

export default NavBar;
