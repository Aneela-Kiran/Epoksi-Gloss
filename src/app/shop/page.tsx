'use client'
import React from 'react'
import Image from 'next/image'
import productData from '@/Data/productData'

const Shop = () =>  {
  productData.map((item ) => {console.log(item.price)})
  return ( 
  <div className='mx-auto mt-12  py-10'>
      <h1 className='text-center font-bold text-5xl text-green'>All Products</h1>
      
      <div className=' py-3  grid grid-cols-1 place-items-center  sm:grid-cols-2 sm:place-items-start lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {
          productData.map((item)=>(
            <div key={item.id} className='px-4 mt-5   border-gray-200 rounded-xl max-w-[400px]'>
                 <div>
                    <Image
                      className='w-full h-auto'
                      src= {item.image}
                      width={200}
                      height={300}
                      alt='title'
                    />
                  </div>
                  <div className='space-y-2 py-2 '>
                      <h1 className='text-green font-semibold uppercase'>{item.name} </h1>
                      <p className='text-gray-600 max-w-[150px]'>{item.description } </p>
                      {/* <div>{generateRating(rating)}</div> */}
                  </div>

                  <div className='font-bold flex gap-2'>
                     PKR {item.price}
                      <del className='text-gray-500 font-normal'>
                        
                      PKR {(item.price + 50).toFixed(2) }
                     

                      </del>
                  </div>

            </div>

          ))
        }   
      </div>
      </div>
  )
}

 

export default Shop
