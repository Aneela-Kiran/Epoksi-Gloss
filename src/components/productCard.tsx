// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { FaStar , FaRegStar } from "react-icons/fa";

// interface productType{
//   id:number,
//   name:string,
//   description:string,
//   image:string ,
//   price:number,
//   rating:number
// }

// const ProductCard:React.FC<productType>= ({
//   id,
//  name,
//  description,
//  image,
//  price,
//  rating
// }) =>{
  
//   const generateRating = (rating:number)=>{
//     switch(rating){
//       case 1:
//         return (
//           <div className='flex gap-1 text-[12px] text-[#FF9529]'>
//               <FaStar />
//               <FaRegStar/>
//               <FaRegStar/>
//               <FaRegStar/>
//               <FaRegStar/>
//           </div>
   
//         )
       
//       case 2:
//         return (
//           <div className='flex gap-1 text-[12px]  text-[#FF9529]'>
//               <FaStar />
//               <FaStar />
//               <FaRegStar/>
//               <FaRegStar/>
//               <FaRegStar/>
//           </div>
//         )
      
//       case 3:
//         return (
//           <div className='flex gap-1 text-[12px]  text-[#FF9529]'>
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaRegStar/>
//               <FaRegStar/>
//           </div>
//         )
    
//       case 4:
//         return (
//           <div className='flex gap-1 text-[12px]  text-[#FF9529]'>
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaRegStar/>
//           </div>
//         )
   
//       case 5:
//         return (
//           <div className='flex gap-1 text-[12px] text-green'>
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//               <FaStar />
//           </div>
//         )
//         default:
//         return null;
//       }
//   }
  
//   {
//   return ( 
//       <div className='px-4 mt-5  border border-gray-200 rounded-xl max-w-[400px]'>
//           <div>
//             <Image
//             className='w-full h-auto'
//             src={image}
//             width={200}
//             height={300}
//             alt='title'
//             />
//           </div>

//            <div className='space-y-2 py-2 '>
//           <h1 className='text-green font-semibold uppercase'>{name} default name</h1>
//           <p className='text-gray-600 max-w-[150px]'>{description } beautiful scenery</p>
//           <div>{generateRating(rating)}</div>
//           </div>
        
//           <div className='font-bold flex gap-2'>
//             {price}
//             <del className='text-gray-500 font-normal'>
              
//             {(Number(price) + 50).toFixed(2)}

//             </del>
//           </div>
//       </div>

      
     
//   )
// }
// }

// export default ProductCard