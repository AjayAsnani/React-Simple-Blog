import React from "react";
import "./Navbar.css";
import blog from "./assets/blog.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={blog} alt="Company Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Jobs</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
