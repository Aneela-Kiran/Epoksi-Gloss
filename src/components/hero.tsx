"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 



function Hero() {

  const settings = {
    dots: true,         
    arrows: false,      
    infinite: true,     
    speed: 500,         
    fade: true,         
    slidesToShow: 1,    
    slidesToScroll: 1,
    autoplay:true, 
    autoplaySpeed:3000  
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
