import React from "react";
import Slider from "react-slick";

const Carousal = () => {
  const settings = {
    // Configure the carousel settings as per your requirements
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Heading 1</h3>
      </div>
      <div>
        <h3>Heading 2</h3>
      </div>
      <div>
        <h3>Heading 3</h3>
      </div>
      {/* Add more heading elements as per your requirement */}
    </Slider>
  );
};

export default Carousal;
