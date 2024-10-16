"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import { Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import {Pagination} from 'swiper/modules';
// // import Navigation from 'swiper/modules/navigation';

function Hero() {

  const settings = {
    dots: true,         // Show dots
    arrows: false,      // Hide left/right arrows
    infinite: true,     // Loop slides
    speed: 500,         // Slide transition speed in ms
    fade: true,         // Enable fade effect
    slidesToShow: 1,    // Number of slides to show
    slidesToScroll: 1,
    autoplay:true, 
    autoplaySpeed:3000  // Number of slides to scroll
  };

  return (

    <div className='mx-auto w-full'>
    <Slider {...settings}>
      <div className='' >
        <img src="/p1.png" alt="Slide 1"  />
      </div>
      <div>
        <img src="/p2.png" alt="Slide 2" />
      </div>
      <div>
        <img src="/p3.png" alt="Slide 3" />
      </div>
    </Slider>
  </div>
    
  );
}

export default Hero;
