import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"; // <-- Import search icon
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-brand">🍹 FRUVI Beverages</Link>

      <div className="nav-center">
        <div className="nav-links">
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/services" className="nav-item">Products</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>

        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}
