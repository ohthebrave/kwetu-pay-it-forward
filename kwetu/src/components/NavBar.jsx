import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className=" nav-bar p-3 mb- bg-dark-subtle text-emphasis-dark">
        
        <ul className="nav justify-content-center fs-4">
            <h2 className="pe-5">logo</h2>
            <li className="nav-item ps-5">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link" href="#">What We Do</a>
                <div className="dropdown-content">
                    <NavLink to="/mission">Our Mission</NavLink>
                    <NavLink to="/vision">Our Vision</NavLink>
                </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/our-staff">Our Staff</NavLink>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>
    </div>
  );
}

export default NavBar;
