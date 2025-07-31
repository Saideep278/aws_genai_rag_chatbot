import React from "react";
import "./Services.css";
import mangoImage from "../images/image1.jpg";
import greenTeaImage from "../images/image2.jpg";
import berryImage from "../images/image3.jpg";
import coconutImage from "../images/image1.jpg";

const products = [
  {
    name: "Tropical Mango Smoothie",
    description: "Rich in vitamins and packed with real mango pulp.",
    image: mangoImage
  },
  {
    name: "Green Tea with Jasmine",
    description: "A floral twist to classic green tea.",
    image: greenTeaImage
  },
  {
    name: "Berry Blast Juice",
    description: "Full of antioxidants from fresh berries.",
    image: berryImage
  },
  {
    name: "Coconut Water Fusion",
    description: "Natural electrolytes with a twist of lemon.",
    image: coconutImage
  }
];

export default function Services() {
  return (
    <div className="services-page">
      <br />
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
