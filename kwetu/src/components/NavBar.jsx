import React from "react";
import {  NavLink } from "react-router-dom";
import './nav.css'

function NavBar() {
  return (
    <div className="header">
      <div className="logo">
        <p>Kwetu-pay</p>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className='bar text-dark text-decoration-none fw-semibold' to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className='bar text-dark text-decoration-none fw-semibold' to='/'>What We Do</NavLink>
          </li>
          <li>
            <NavLink className='bar text-dark text-decoration-none fw-semibold' to='/our-staff'>Our Staff</NavLink>
          </li>
          <li>
            <NavLink className='bar text-dark text-decoration-none fw-semibold' to='/about'>About Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
