import React from "react";
import "./About.css";
import journeyImg from  "../images/image1.jpg";
import missionImg from "../images/image2.jpg";

export default function About() {
  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Our Journey</h1>
          <p>
            FRUVI Beverages began with a bold vision: crafting beverages that balance health, taste, and sustainability.
            From humble beginnings, we've blossomed into a beloved brand known for fresh, flavorful, and ethical drinks.
          </p>
        </div>
        <div className="hero-image" style={{ backgroundImage: `url(${journeyImg})` }}></div>
      </section>

      <section className="quote-section">
        <blockquote>
          “We don’t just make drinks. We bottle joy, freshness, and the spirit of well-being.”
        </blockquote>
      </section>

      <section className="mission-section">
        <div className="mission-image" style={{ backgroundImage: `url(${missionImg})` }}></div>
        <div className="mission-text">
          <h2>Why FRUVI?</h2>
          <ul>
            <li>✅ Farm-fresh ingredients directly from local growers</li>
            <li>🌍 Eco-friendly practices in every stage of production</li>
            <li>🧪 Innovation-driven R&D for new flavors and blends</li>
            <li>❤️ Customer-first approach with unbeatable taste</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
