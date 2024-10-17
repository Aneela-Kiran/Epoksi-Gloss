"use client"
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import TestimonialData from '@/Data/textmonialData'
import { FaUser } from "react-icons/fa";
import GenerateRating from '@/components/rating';
import { RiDoubleQuotesL , RiDoubleQuotesR } from "react-icons/ri";

const Testmonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className='mx-auto my-12 py-10 overflow-hidden'>
            <h1 className='text-center  font-bold  text-2xl   sm:text-3xl  lg:text-5xl  xl:text-6xl text-green uppercase  underline underline-offset-8 ring-offset-emerald-950' >Testimonials</h1>
      <div className='mx-auto mt-8 '>
            <h3 className='text-xl sm:text-2xl lg:text-3xl font-sans leading-4 font-bold py-5 text-center'>What Customer Say About us </h3>
       
        <Slider {...settings}> 
        {TestimonialData.map((item)=>(
          
        <div key={item.id}  className=" mt-6 ">
              <div  className=' bg-gray-200  shadow-lg  rounded p-4 w-96 min-h-[250px] relative flex flex-col justify-between'>
                  <div className='flex justify-center items-center absolute top-[-25px] left-[40%] bg-white rounded-full h-16 w-16 '>

                        <div className= ' h-14 w-14 flex justify-center items-center border bg-green rounded-full'>
                          <FaUser className='text-2xl text-white'/>
                        </div>

                  </div>
                 
                  <div className='pt-10 leading-relaxed font-sans mb-3 flex-1 ' >

                        <RiDoubleQuotesL className='inline-block mr-2 text-green text-xl' />
                          {item.description}
                        <RiDoubleQuotesR className='inline-block ml-2 text-green text-xl'/>

                    </div>
                    <div className='mx-auto'>
                          <div className='flex gap-2 justify-evenly'>

                            <h1 className='text-green font-bold'>
                              {item.name}
                            </h1>
                            <h1 className='font-medium text-gray-800'>{item.date}</h1>
                          </div>
                          <div className='flex items-center justify-center my-3'>
                              {GenerateRating(item.rating)}
                          </div> 
                   </div> 
          </div> 
        </div>
        ))} 
          </Slider> 
      </div>
    </div>
  )
}

export default Testmonial
