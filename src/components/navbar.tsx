'use client'
import Image from "next/image";
import React, { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { FaFacebook ,FaLinkedin , FaInstagram , FaTwitter} from "react-icons/fa";
import Cart from "@/components/cart";

function Navbar(){
  const [isMenuOpen, setMenu] = useState<boolean>(false);
  const [isCartOpen, setCartOpen] = useState<boolean>(false); // State for cart toggle

  const menuOpen = () => setMenu(true);
  const closeMenu = () => setMenu(false);
  const toggleCart = () => setCartOpen(!isCartOpen); // Toggle cart on click

    return <>
        <div className=" flex flex-col justify-center lg:flex-row sm:justify-between item-center p-4 m-4 ">
             {/* logo */}
            <div className="flex justify-between items-center mb-2 lg:mb-0 ">
                <button className="lg:hidden" onClick={menuOpen}>
                <IoMenu className=" text-xl "/>
                </button>
                <Link href={'/'}>
                <Image
                src="/logo.png"  
                alt="Company Logo"
                width={150}       
                height={40}  
                />
                </Link>
                
                <HiOutlineShoppingBag className="lg:hidden text-xl"/>
                <div className="lg:hidden bg-green rounded-full w-[14px] h-[14px]   absolute top-11 right-6 text-[10px] text-white flex justify-center items-center font-bold">0</div>
            </div>

            <div className="w-full  lg:w-[70%] relative border rounded-lg ">

                    <input className="border-gray-200 rounded-lg w-full bg-transparent m-3   outline-none" type="text" placeholder="Search Product "  
                    />
                    <CiSearch className="absolute top-0 right-0 mr-3 mt-4 cursor-pointer"/>
            </div>


            <div className="hidden lg:flex gap-3 text-xl mt-3">
                
                   
                    <Link href={'/login'}> <CgProfile /></Link>   
                    <FaRegHeart/>
                    <div className="bg-green rounded-full w-[16px] h-[16px]   absolute top-9 right-14 text-[10px] text-white flex justify-center items-center font-bold">0</div>
                    <BsCart3  onClick={toggleCart}/>
                    {/* onClick={openCart} */}
                    
                    <div className="bg-green rounded-full w-[16px] h-[16px]   absolute top-9 right-6 text-[10px] text-white flex justify-center items-center font-bold">0</div>

            </div>
            {/* Mobile Menu */}

            <ul className={`lg:hidden flex flex-col gap-5 bg-slate-50 h-screen fixed top-0 left-0  py-20 px-10 font-bold w-64 z-50 rounded-lg transition-transform duration-500 ${isMenuOpen? 'translate-x-0': '-translate-x-full'}`}>

                <div className="absolute top-6 left-6" onClick={closeMenu}>
                <RxCross2 size={24}/>
                </div>

                <li><Link href={'/'}>Home</Link></li> 
                <li><Link href={'/shop'}>Shop</Link></li> 
                <li><Link href={'/customOder'}>Custom Order</Link></li>
                <li><Link href={'/contact'}>Contact Us</Link></li>
                
        <div>
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

            </ul>
            {/* Cart component with props */}
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
          
        </div>

    </>
}

export default Navbar