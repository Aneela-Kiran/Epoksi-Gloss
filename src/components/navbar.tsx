'use client'
import Image from "next/image";
import React from "react"
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

function Navbar(){
    return <>
    <div className=" flex flex-col justify-center sm:flex-row sm:justify-between item-center p-4 m-4 ">
        {/* logo */}
    <div >
        <Image
        src="/logo.png"  
        alt="Company Logo"
        width={150}       
        height={50}   
        />
    </div>

    <div className="w-full sm:w-[300px] md:w-[70%] relative border rounded-lg ">
    <input className="border-gray-200 rounded-lg w-full bg-transparent m-3   outline-none" type="text" placeholder="Search Product "  
     />
    <CiSearch className="absolute top-0 right-0 mr-3 mt-4 cursor-pointer"/>
    </div>


    <div className="hidden lg:flex gap-3 text-xl mt-3">
    
    <CgProfile />
    <FaRegHeart/>
    <div className="bg-green rounded-full w-[16px] h-[16px]   absolute top-9 right-14 text-[10px] text-white flex justify-center items-center font-bold">0</div>
    <BsCart3/>
    <div className="bg-green rounded-full w-[16px] h-[16px]   absolute top-9 right-6 text-[10px] text-white flex justify-center items-center font-bold">0</div>

    </div>
          
    </div>

    </>
}

export default Navbar