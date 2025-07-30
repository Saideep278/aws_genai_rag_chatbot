import React from "react";
import Slider from "react-slick";
import image1 from "../images/image1.jpg";
import image2 from "../images/image1.jpg";
import image3 from "../images/image2.jpg"; // <-- Add a third image
import "./Home.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* Carousel Section */}
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Slide 1" className="carousel-image" />
          </div>
          <div>
            <img src={image2} alt="Slide 2" className="carousel-image" />
          </div>
          <div>
            <img src={image3} alt="Slide 3" className="carousel-image" />
          </div>
        </Slider>
      </div>

      {/* Testimonial Rows */}
      <div className="row">
        <div className="quote">🌱 “I never knew tea could taste this fresh until I tried their jasmine blend. Absolute game-changer!”</div>
        <div className="bg-image" style={{ backgroundImage: `url(${image1})` }}></div>
      </div>
      <div className="row">
        <div className="bg-image" style={{ backgroundImage: `url(${image2})` }}></div>
        <div className="quote">🌾 “Their mango smoothie tastes like it was made straight in the tropics. I’m obsessed”</div>
      </div>
      <div className="row">
        <div className="quote">🍵 “The rose milk tea is creamy, floral, and just heavenly!”</div>
        <div className="bg-image" style={{ backgroundImage: `url(${image3})` }}></div>
      </div>
    </>
  );
}



// import React from "react";
// import image1 from "../images/image1.jpg";
// import image2 from "../images/image2.jpg";

// export default function Home() {
//   return (
//     <>
//       <div className="row">
//         <div className="quote">🌱 “I never knew tea could taste this fresh until I tried their jasmine blend. Absolute game-changer!”</div>
//         <div className="bg-image" style={{ backgroundImage: `url(${image1})` }}></div>
//       </div>
//       <div className="row">
//         <div className="bg-image" style={{ backgroundImage: `url(${image2})` }}></div>
//         <div className="quote">🌾 “Their mango smoothie tastes like it was made straight in the tropics. I’m obsessed”</div>
//       </div>
//       <div className="row">
//         <div className="quote">🌱 “I never knew tea could taste this fresh until I tried their jasmine blend. Absolute game-changer!”</div>
//         <div className="bg-image" style={{ backgroundImage: `url(${image1})` }}></div>
//       </div>
//     </>
//   );
// }
