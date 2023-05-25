import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../assets/img1.jpeg'

const Hero = () => {
  return (
    <div className='mt-[9vh] w-full h-[91vh] flex flex-wrap px-[100px]'>
      <div className="flex-1 flex flex-col justify-center">
        <h3 className='text-green-500 font-bold text-[40px] uppercase'>
          Garbage
        </h3>
        <h3 className='text-gray-600 font-bold text-[40px] uppercase mt-[-10px]'>
          Collection
        </h3>
        <p
          className='font-medium text-[14px] mt-[10px] text-slate-400'
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Repellendus dolore omnis quis autem molestiae. 
          Velit laborum veniam accusantium enim aliquam.
        </p>
        <Link to='/book'>
          <button
            className='px-[20px] py-[7px] bg-green-500 w-[150px] mt-[25px] rounded-md text-white font-semibold
            text-[18px] hover:bg-[#eee] hover:text-green-500'
          >
            Book
          </button>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <img src={img1} className='w-[900px]' />
      </div>
    </div>
  )
}

export default Hero