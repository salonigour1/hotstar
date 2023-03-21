import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';
import slider4 from '../assets/images/slider4.jpg';
import Carousel from 'react-slick';
import Slider from 'react-slick';
function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className='bg-transparent w-{1100} p-6 relative left-0 m-4 mt-0'>
      <Slider {...settings} className='slider'>
        <a className='links rounded'>
          <img
            src={slider1}
            className='images rounded-lg cursor-pointer hover:border-2 border-[#f9f9f9cc] hover:duration-100'
          />
        </a>
        <a className='links rounded'>
          <img
            src={slider2}
            className='images rounded-lg cursor-pointer hover:border-2 border-[#f9f9f9cc] hover:duration-100'
          />
        </a>
        <a className='links rounded'>
          <img
            src={slider3}
            className='images rounded-lg cursor-pointer hover:border-2 border-[#f9f9f9cc] hover:duration-100'
          />
        </a>
        <a className='links rounded'>
          <img
            src={slider4}
            className='images rounded-lg cursor-pointer hover:border-2 border-[#f9f9f9cc] hover:duration-100'
          />
        </a>
      </Slider>
    </div>
  );
}

export default ImageSlider;
