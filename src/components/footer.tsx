
import Image from "next/image";
import Link from 'next/link';
import React from 'react'
import { FaFacebook ,FaLinkedin , FaInstagram , FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' w-full mx-auto bg-gray-200 pt-10 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left'>
        {/* logo section  */}
      <div>
      <Image
        src="/logo.png"  
        alt="Company Logo"
        width={150}       
        height={50}   
        /> 
      </div>
      {/* quick links  */}
      <div className='flex flex-col justify-center items-center  py-2 sm:items-start'>
        <h3 className='font-bold  Navbar-links relative mb-2'>Quick Links</h3>
        <ul className='mt-4 cursor-pointer space-y-3'>
        <Link href={'/'}><li>Home</li></Link>
         <Link href={'/shop'}><li>shop</li></Link> 
          <Link href={'/gallery'}> <li>Gallray</li></Link>
         <Link href={'/customOrder'}> <li>Custom order</li></Link> 
         <Link href={'/contact'}> <li>Contact Us</li></Link> 
        </ul>
      </div>
      {/* contact secton */}
      <div className='flex flex-col items-center sm:items-start'>
        <h3 className='font-bold Navbar-links relative'>Contact Us</h3>
          <ul className='mt-4 space-y-2 '>
            <li>location : Multan , Pakistan </li>
            <li>Email: Epoksigloss@gmail.com</li>
            <li>phone: +92312567888</li>
          </ul>
        </div>
      {/* follow us */}
        <div  className=''>
         <h3 className='font-bold  underline underline-offset-4 decoration-green'>Follow us</h3>
       
          <ul className='flex mt-5  justify-center items-center space-x-4 cursor-pointer text-2xl sm:items-start sm:justify-start text-green'>
            
            <li>
              < FaFacebook/>
            </li>
            <li>
              <FaLinkedin/>
            </li>
            <li>
            <FaTwitter/>
            </li>
            <li>    
          <FaInstagram/>
            </li>
          </ul>
        </div>

      </div>
      <p className='text-center mt-8 text-xs'> ©2024 Epoksi Gloss.All right reserved</p>
    </div>
  )
}

export default Footer