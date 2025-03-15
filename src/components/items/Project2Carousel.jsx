import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../../assets/project2/1.png"
import two from "../../assets/project2/2.png"
import three from "../../assets/project2/3.png"
import four from "../../assets/project2/4.png"
import five from "../../assets/project2/5.png"
import six from "../../assets/project2/6.png"

const Project2Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full py-10">
      <Slider {...settings}>
        <div>
          <img src={one} alt="image 1" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src={two} alt="image 2" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src={three} alt="image 3" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src={four} alt="image 4" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src={five} alt="image 5" className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <img src={six} alt="image 6" className="w-full h-auto rounded-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default Project2Carousel;