'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import productData from '@/Data/productData'
import GenerateRating from '@/components/rating'

interface productType{
  id:number,
  name:string,
  description:string,
  image:string ,
  price:number,
  rating:number
}

const Products:React.FC= () => {

const highRatedProducts = productData.filter(product => product.rating === 4 || product.rating === 5);


  return ( 
  <div className='mx-auto mt-12  py-10'>
      <h1 className='text-center font-bold text-5xl text-green'>Products Categories</h1>
      
      <div className=' py-3  grid grid-cols-1 place-items-center  sm:grid-cols-2 sm:place-items-start lg:grid-cols-3 xl:grid-cols-4 gap-10 '>
        {
          highRatedProducts.map((product:productType)=>(
            <div key={product.id} className='px-4 mt-5   border-gray-200 rounded-xl max-w-[400px] '>
                 <div>
                    <Image
                      className='w-full h-auto rounded-sm'
                      src= {product.image}
                      width={200}
                      height={300}
                      alt='title'
                    />
                  </div>
                  <div className='space-y-2 py-2 '>
                      <h1 className='text-green font-semibold uppercase'>{product.name} </h1>
                      <p className='text-gray-600 max-w-[150px]'>{product.description } </p>                    
                  </div>

                  <div className='py-1'>
                    {GenerateRating(product.rating)}
                  </div>

                  <div className='font-bold flex gap-2'>
                     PKR {product.price}
                      <del className='text-gray-500 font-sm'>
                        
                      PKR {(product.price + 50).toFixed(2) }
                  
                      </del>
                  </div>
                 
            </div>
          ))
        }   
      </div>
      <div className='flex justify-center items-center'>
        <Link href={"/shop"}>
      <button className= 'bg-green text-white font-sans py-2 px-10 mt-12 hover:bg-green-200 cursor-pointer '>Explor All</button>
      </Link>
      </div>

      </div>
  )
}


export default Products