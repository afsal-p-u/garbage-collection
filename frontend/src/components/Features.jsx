import React from 'react'

import img1 from '../assets/f1.jpeg'
import img2 from '../assets/f2.jpg' 
import img3 from '../assets/f3.jpg'

const Features = () => {
  return (
    <div className='w-full min-h-[55vh] px-[100px] py-[25px] pb-[40px] bg-[#eee]' id='features'>
        <h3 className='text-center text-[30px] font-semibold text-green-500'>
            Features
        </h3>

        <div className="mt-[40px] flex gap-[81px] flex-wrap">
            <div 
                className="w-[300px] h-[310px] bg-white p-[15px] rounded-md cursor-pointer shadow-sm 
                hover:shadow-lg"
            >
                <div className="w-full h-[65%]">
                    <img src={img1} alt="" className='w-full h-full' />
                </div>

                <h3 className='mt-3 mb-2 text-[17px] font-semibold text-green-500'>Online Booking</h3>
                <p className='text-[12px] break-words text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dignissimos!
                </p>
            </div>

            <div 
                className="w-[300px] h-[310px] bg-white p-[15px] rounded-md cursor-pointer shadow-sm 
                hover:shadow-lg"
            >
                <div className="w-full h-[65%]">
                    <img src={img2} alt="" className='w-full h-full' />
                </div>

                <h3 className='mt-3 mb-2 text-[17px] font-semibold text-green-500'>24/7 Support</h3>
                <p className='text-[12px] break-words text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dignissimos!
                </p>
            </div>

            <div 
                className="w-[300px] h-[310px] bg-white p-[15px] rounded-md cursor-pointer shadow-sm 
                hover:shadow-lg"
            >
                <div className="w-full h-[65%]">
                    <img src={img3} alt="" className='w-full h-full' />
                </div>

                <h3 className='mt-3 mb-2 text-[17px] font-semibold text-green-500'>Fast Pickup</h3>
                <p className='text-[12px] break-words text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dignissimos!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Features