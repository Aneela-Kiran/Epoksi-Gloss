'use client'
import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

const GenerateRating = (rating: number) => {

  let stars;

  // Handle rating logic with a switch statement
  switch (rating) {
    case 1:
      stars = (
        <div className='flex gap-1 text-lg text-[#FF9529]'>
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      );
      break;

    case 2:
      stars = (
        <div className='flex gap-1 text-[12px] text-green'>
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      );
      break;

    case 3:
      stars = (
        <div className='flex gap-1 text-[12px] text-green'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      );
      break;

    case 4:
      stars = (
        <div className='flex gap-1 text-[14px] text-green'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      );
      break;

    case 5:
      stars = (
        <div className='flex gap-1 text-[14px] text-green'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
      break;

    default:
      stars = null;
      break;
  }

  // Return the generated JSX based on the rating
  return <>
  {stars}
  </>;
};

export default GenerateRating;
