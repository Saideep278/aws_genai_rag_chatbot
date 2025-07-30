import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="quote">🌱 “I never knew tea could taste this fresh until I tried their jasmine blend. Absolute game-changer!”</div>
        <div className="bg-image" style={{ backgroundImage: `url(${image1})` }}></div>
      </div>
      <div className="row">
        <div className="bg-image" style={{ backgroundImage: `url(${image2})` }}></div>
        <div className="quote">🌾 “Their mango smoothie tastes like it was made straight in the tropics. I’m obsessed”</div>
      </div>
      <div className="row">
        <div className="quote">🌱 “I never knew tea could taste this fresh until I tried their jasmine blend. Absolute game-changer!”</div>
        <div className="bg-image" style={{ backgroundImage: `url(${image1})` }}></div>
      </div>
    </>
  );
}
