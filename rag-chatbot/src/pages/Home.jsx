import React from "react";
import Slider from "react-slick";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg"; // <-- Add a third image
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import journeyImg from  "../images/image1.jpg";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,   // faster (3s per slide)
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,          // shows left/right arrows
    pauseOnHover: true     // pauses when hovered
  };

  return (
    <>  
      <br />
      <br />
      <br />
      <>
          <section className="hero-section">
                <div className="hero-text">
                  <h1>FRUVI Beverages </h1>
                  <p>
                    FRUVI Beverages began with a bold vision: crafting beverages that balance health, taste, and sustainability.
                    From humble beginnings, we've blossomed into a beloved brand known for fresh, flavorful, and ethical drinks.
                  </p>
                </div>
                <div className="hero-image" style={{ backgroundImage: `url(${journeyImg})` }}></div>
              </section>
      </>
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
