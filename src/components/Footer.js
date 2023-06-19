import React from "react";
import "./Footer.css"; // Assuming you have a CSS file named "Footer.css"

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>About</h4>
        <p>
          This is a simple blog website which contains <br /> a News section,
          Update on upcoming events
          <br /> about the company and available jobs at <br /> the company.
        </p>
      </div>
      <div className="footer-section">
        <h4>Categories</h4>
        <ul>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Upcoming events</a>
          </li>
          <li>
            <a href="#">Available Jobs</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: contact@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Blog Website. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
