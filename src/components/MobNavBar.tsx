'use client '
import React from 'react'
import Link from 'next/link';
import { BsShopWindow } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


const MobNavBar = () => {
  return (
    <div className='lg:hidden bottom-0 w-full bg-slate-100 shadow-md  max-w-[800px] px-5'>
      
      <div className='flex justify-between py-2 text-[28px] pointer'>
              <div>
               <Link href={'/shop'}><BsShopWindow className='pointer text-2xl'/></Link>   
                  <p className='text-[12px] font-bold'>shop</p>
              </div>
              
        
              <div className='relative '>
                    <IoHeartOutline className='text-2xl' />
                    <div className="bg-green rounded-full w-[16px] h-[16px]   absolute top-0 right-3 text-[10px] text-white flex justify-center items-center font-bold">0</div>
                    <p className='text-[12px] font-bold'>Wishlist</p>
              </div>

              <div className='relative'>
                    <HiOutlineShoppingBag className='text-2xl'/>
                    <div className="bg-green rounded-full w-[16px] h-[16px]   absolute top-0 -right-2 text-[10px] text-white flex justify-center items-center font-bold">0</div>
                    <p className='text-[12px] font-bold'>cart</p>
                    </div>
              <div>
                    <CgProfile className='text-2xl' />
                    <p className='text-[12px] font-bold'>My acc...</p>
              </div>
              
        </div>
       
    </div>
  )
}

export default MobNavBar
