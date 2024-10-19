 
"use client"
import React, { useState } from "react"

const AuthForm = () => {

const [isLogin , setIslogin] = useState(true);

const toggleForm=()=>{
  setIslogin(!isLogin)
}

  return (
    <div className='mx-auto  flex justify-center items-center my-10 '  >
      {
        isLogin?(
      
      
        <div className='bg-slate-100 rounded-xl border shadow-xl  py-10 px-8'>
        
            <h1 className='text-green text-3xl font-bold my-2'>Login</h1>
            <h3 className='text-gray-500 '>Does not have an accoount yet?<button className='text-green inline-block my-2 font-semibold underline ml-1' onClick={toggleForm}>Sign Up </button> </h3>

            <label htmlFor="Email Address" className='font-semibold'>Email Addres</label><br></br>
              <input className='p-2 rounded-lg w-full my-2 focus:outline-none' type="text" placeholder='Enter your email' required/>

           <div className='flex justify-between'>
            <label htmlFor="Password" className='font-semibold'>Password</label>
            <a className='font-semibold text-green hover:underline' href="">Forgot password</a>
           </div>

           <input className='p-2 rounded-lg w-full my-2 focus:outline-none' type="password" placeholder='Enter a password' />
          <div className="my-3">
           <input type="checkbox" name="" id="" />
           <p className='inline-block ml-3'>Remember me </  p>
           </div>
           <button className='bg-green p-2 text-white rounded-3xl w-full font-semibold my-2'>Login</button>
           

        </div>
        ):
        (
         
        <div className='bg-slate-100 rounded-xl shadow-xl border  py-10 px-8'>

              <h1 className='text-green text-3xl font-bold my-2'>SignUp</h1>
              <h3 className='text-gray-500 '>Already Have Account?<button className='text-green inline-block my-2 font-semibold underline ml-1' onClick={toggleForm}>Login </button> </h3>

              <label htmlFor="Email Address" className='font-semibold'>Name</label><br></br>
                <input className='p-2 rounded-lg w-full my-2 focus:outline-none' type="text" placeholder="Enter your Name" required/>

              <label htmlFor="Email Address" className='font-semibold'>Email Addres</label><br></br>
                <input className='p-2 rounded-lg w-full my-2 focus:outline-none' type="text" placeholder='Enter your email' required/>

              <div className='flex justify-between'>
                <label htmlFor="Password" className='font-semibold'>Password</label>
                <a className='font-semibold text-green hover:underline' href="">Forgot password</a>
              </div>

            <input className='p-2 rounded-lg w-full my-2 focus:outline-none' type="password" placeholder='Enter a password' />
            <input className='p-2 rounded-lg w-full my-2 focus:outline-none' type="password" placeholder='confirm password ' />
            <div>

            <input type="checkbox" name="" id="" />
            <p className='inline-block ml-3'>Remember me </  p>
            </div>
            <button className='bg-green p-2 text-white rounded-3xl w-full font-semibold my-2'>SignUp</button>
            

          </div>
          



        )

}     
    </div>
  )
}

export default AuthForm
