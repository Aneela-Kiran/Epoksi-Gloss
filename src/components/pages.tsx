import React from 'react'
import Link from 'next/link'
export const PagesLinks = () => {
  return (
    <div className='hidden lg:block '>
      <div className='container'>
        <div className='mx-auto flex gap-10 w-fit font-medium py-4'>
          <Link className='Navbar-links relative' href={'/'}> Home</Link>
          <Link className='Navbar-links relative' href={'/shop'}> Shop</Link>
          <Link className='Navbar-links relative' href={'/gallery'}> Gallery</Link>
          <Link className='Navbar-links relative' href={'/customOrder'}> Custom order</Link>
          <Link className='Navbar-links relative' href={'/contact'}> Contact</Link>

        </div>
      </div>


    </div>
  )
}
