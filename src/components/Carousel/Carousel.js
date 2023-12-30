import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 0.2,
    scroll: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings} className="mt-19">
      <div>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1025d3afd94d426f.jpg?q=20"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default Carousel;

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev-arrow absolute top-10"
      onClick={onClick}
    >
      {/* You can customize the arrow icon or use an SVG here */}
      {/* <ArrowBackIosNewIcon /> */}
      &larr;
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next-arrow " onClick={onClick}>
      {/* You can customize the arrow icon or use an SVG here */}
      &rarr;
    </div>
  );
};
