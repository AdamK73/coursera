import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <img
        src="https://via.placeholder.com/150x50.png?text=Little+Lemon+Logo"
        alt="Little Lemon Logo"
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#menu">Menu</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
