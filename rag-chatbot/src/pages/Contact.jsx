import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaBriefcase } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <br />
      <h1>Contact Us</h1>
      <p className="contact-subtitle">We'd love to hear from you!</p>

      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>support@farmingbeverages.com</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 98XXX XXXX0</p>
        </div>

        <div className="contact-card">
          <FaBriefcase className="contact-icon" />
          <h3>Business Sales</h3>
          <p>sales@farmingbeverages.com</p>
        </div>
      </div>
    </div>
  );
}
