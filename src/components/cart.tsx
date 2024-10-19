import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';

const Cart = () => {
  const[isCartOpen , setCart]=useState(false);

  const openCart=()=>{
    setCart(true)
  }

  const closeCart=()=>{
    setCart(false)
  }

  return (
    <div className={`max-w-64 bottom-0 top-6 right-0 rounded-lg shadow-sm transition-transform duration-500 ${isCartOpen}?'translate-x-0': 'translate-x-full'`}>
      <div className='flex '>
      <h2 className='text-green font-bold '>Shopping Cart</h2>
      <div className='absoulte top-6 ' onClick={closeCart}>
      < RxCross2 size={24} />
      </div>
      </div>
      <hr />
      <div className='flex flex-col justify-center items-center'>
        <p className='font-bold text-lg'>No product in Cart </p>
        <Link href={'/shop'}> <button className='p-2 px-6  rounded-sm font-bold bg-green'>Return To Shop</button></Link> 
      </div>
    </div>
  )
}

export default Cart
