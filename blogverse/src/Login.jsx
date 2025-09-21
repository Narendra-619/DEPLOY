import React from 'react'

import { Eye, EyeOff, Key, Mail } from 'lucide-react'
import NavBar from './NavBar'
const Login = () => {
  return (
    <div className='w-screen flex flex-col items-center min-h-screen bg-purple-100 sm:px-2 md:px-8 3xl:px-16'>
      <NavBar />
  <div className='w-[90%] md:w-1/3 flex flex-col items-center mt-10 bg-white border-1 border-gray-300 rounded-2xl shadow-2xl sm:w-full 3xl:w-1/2 sm:mt-2 md:mt-10 3xl:mt-20'>
        <h1 className='mt-5 text-xl font-bold sm:text-lg md:text-2xl 3xl:text-4xl sm:mt-2 md:mt-8 3xl:mt-16'>Login</h1>
        <p className='text-sm text-gray-700 sm:text-xs md:text-base 3xl:text-xl'>Access your account</p>
        <form action="" className='w-[80%] my-5 h-100 sm:w-full md:w-2/3 3xl:w-1/2 sm:my-2 md:my-8 3xl:my-16'>
          <div className='w-[95%] mb- sm:w-full md:w-2/3 3xl:w-1/2 sm:mb-1 md:mb-4 3xl:mb-8'>
            <p className='text-sm text-gray-700 font-semibold pb- sm:text-xs md:text-base 3xl:text-xl'>Email Address</p>
            <Mail className='flex relative top-9 left-2 text-gray-400 sm:top-2 md:top-6 3xl:top-12 sm:left-1 md:left-4 3xl:left-8' />
            <input className='border-1 border-gray-300 bg-gray-50 w-full rounded-md py-3 px-9 focus:outline-none focus:border-black text-sm focus:border-1.8 duration-200 sm:py-1 sm:px-2 md:py-4 md:px-6 3xl:py-8 3xl:px-12 sm:text-xs md:text-base 3xl:text-xl' type="text" placeholder='email.com' />
          </div>
          <div className='w-[95%] sm:w-full md:w-2/3 3xl:w-1/2'>
            <div className='relative'>
              <p className='text-sm text-gray-700 font-semibold pb-1.5 sm:text-xs md:text-base 3xl:text-xl'>Password
                <Key className='absolute text-gray-400 mt-4 sm:mt-1 md:mt-6 3xl:mt-12' />
                <Eye className="absolute right-0 mr-2 mt-4 sm:mr-1 md:mr-4 3xl:mr-8 sm:mt-1 md:mt-6 3xl:mt-12" />
              </p>
            </div>
            <input className='border-1 border-gray-300 bg-gray-50 w-full rounded-md py-3 px-9 focus:outline-none focus:border-black focus:border-1.8 text-sm duration-200 sm:py-1 sm:px-2 md:py-4 md:px-6 3xl:py-8 3xl:px-12 sm:text-xs md:text-base 3xl:text-xl' type="text" placeholder='password' />
          </div>
          <div className='flex justify-between mt-4 sm:mt-1 md:mt-6 3xl:mt-12'>
            <div className='flex gap-1 sm:gap-0.5 md:gap-2 3xl:gap-4'>
              <input type="checkbox" className='sm:h-3 sm:w-3 md:h-6 md:w-6 3xl:h-10 3xl:w-10' />
              <p className='text-sm text-gray-400 font-semibold sm:text-xs md:text-base 3xl:text-xl'>Remember me</p>
            </div>
            <div className=''>
              <p className='text-sm text-blue-600 font-semibold hover:cursor-pointer sm:text-xs md:text-base 3xl:text-xl'>Forgot Password?</p>
            </div>
          </div>
          <button className='w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 duration-200 sm:py-1 md:py-4 3xl:py-8 sm:mt-1 md:mt-6 3xl:mt-12'>Sign In</button>
          <div className='w-full flex justify-center my-4 border-1 border-gray-200 sm:my-1 md:my-8 3xl:my-16'></div>

          <p className='text-sm text-center text-gray-700 sm:text-xs md:text-base 3xl:text-xl'>Don't have an account?<span className='text-blue-600 font-semibold hover:cursor-pointer sm:text-xs md:text-base 3xl:text-xl'>Create one here</span></p>
        </form>
      </div>
    </div>
  )
}

export default Login