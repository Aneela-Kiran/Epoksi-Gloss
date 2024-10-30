import React from 'react';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  return (
    <div className={` absolute bg-white z-50 max-w-96 bottom-0 h-svh right-0 rounded-lg shadow-sm transition-transform duration-500 ${ isOpen ? 'translate-x-0' : 'translate-x-96'}`}>
      <div className='flex justify-between items-center p-4'>
        <h2 className='text-green font-bold'>Shopping Cart</h2>
        <div className='cursor-pointer' onClick={onClose}>
          <RxCross2 size={24} />
        </div>
      </div>
      <hr />
      <div className='flex flex-col justify-center items-center p-4'>
        <p className='font-bold text-lg'>No product in Cart</p>
        <Link href={'/shop'}>
          <button className='p-2 px-6 rounded-sm font-bold bg-green text-white'>Return To Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;


// ${isOpen ? 'translate-x-0' : 'translate-x-full'}