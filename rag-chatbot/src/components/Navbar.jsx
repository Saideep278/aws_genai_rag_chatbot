import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">FRUVI Beverages</Link>
      <div className="nav-links">
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
    </div>
  );
}
