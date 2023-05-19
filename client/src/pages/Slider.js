import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Slider {...settings}>
      <div>
        <img src="image1.jpg" alt="image1" />
      </div>
      <div>
        <img src="image2.jpg" alt="image2" />
      </div>
      <div>
        <img src="image3.jpg" alt="image3" />
      </div>
    </Slider>
  );
};


export default ImageSlider;
