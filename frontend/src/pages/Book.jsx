import React from 'react'

import Navbar from '../components/Navbar'

const Book = () => {
  return (
    <>
        <Navbar />
        <div className="mt-[9vh] w-full h-[91vh] px-[100px] flex items-center justify-center">
            <div className="w-full bg-[#eee] min-h-[45vh] px-[70px] py-[15px] rounded-md shadow-sm">
                <h3 className='text-center py-[10px] text-[24px] font-semibold text-green-500'>
                    Book
                </h3>
                <div className="mt-[20px] flex flex-wrap gap-5">
                    <div className="flex flex-col w-[300px]">
                        <label 
                            htmlFor=""
                            className='text-gray-500 text-[12px] mb-1'
                        >
                            Name
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Name'
                            className='px-[10px] py-[5px] text-[13px] border-[1px] border-gray-300'
                        />
                    </div>

                    <div className="flex flex-col w-[300px]">
                        <label 
                            htmlFor=""
                            className='text-gray-500 text-[12px] mb-1'
                        >
                            Pick Up Location
                        </label>
                        <input 
                            type="text" 
                            name="pickUpLocation" 
                            placeholder='Pick Up Location'
                            className='px-[10px] py-[5px] text-[13px] border-[1px] border-gray-300'
                        />
                    </div>

                    <div className="flex flex-col w-[300px]">
                        <label 
                            htmlFor=""
                            className='text-gray-500 text-[12px] mb-1'
                        >
                            Address
                        </label>
                        <input 
                            type="text" 
                            name="address" 
                            placeholder='Address'
                            className='px-[10px] py-[5px] text-[13px] border-[1px] border-gray-300'
                        />
                    </div>

                    <div className="flex flex-col w-[300px]">
                        <label 
                            htmlFor=""
                            className='text-gray-500 text-[12px] mb-1'
                        >
                            Contact
                        </label>
                        <input 
                            type="number" 
                            name="contact" 
                            placeholder='Contact Number'
                            className='px-[10px] py-[5px] text-[13px] border-[1px] border-gray-300'
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end mt-3">
                    <button
                        className='px-[20px] py-[6px] rounded-md bg-green-500 text-[#eee] font-medium
                        hover:bg-white hover:text-green-500'
                    >Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Book