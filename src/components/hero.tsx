"use client"

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
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
      <div >
      <Image
      src="/p1.png"
      alt='Slide 1'
      layout='responsive'
      width={1600}
      height={900}
      className='w-full'
      />
      
      </div>
      <div>
      <Image
      src="/p2.png"
      alt='Slide 1'
      layout='responsive'
      width={1600}
      height={900}
      className='w-full'
      />
      </div>
      <div>
      <Image
      src="/p3.png"
      alt='Slide 1'
      layout='responsive'
      width={1600}
      height={900}
      className='w-full'
      />
      </div>
    </Slider>
  </div>
    
  );
}

export default Hero;
