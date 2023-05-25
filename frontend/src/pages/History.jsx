import React from 'react'

import Navbar from '../components/Navbar'

const History = () => {
  return (
    <>
        <Navbar />
        <div className="mt-[9vh] w-full h-[91vh] px-[100px] py-[30px]">
            <h3 className='mb-3'>History</h3>
            <div className="w-full flex flex-wrap gap-5">
                <div 
                    className="w-[49%] h-[50px] px-[15px] py-[5px] bg-green-500 flex justify-between items-center
                    rounded-md"
                >
                    <p className='text-[#eee] font-medium'>fdsoihafhhhkh</p>
                    <p className='text-[14px] text-white font-semibold'>Completed</p>
                </div>
                <div 
                    className="w-[49%] h-[50px] px-[15px] py-[5px] bg-green-500 flex justify-between items-center
                    rounded-md"
                >
                    <p className='text-[#eee] font-medium'>fdsoihafhhhkh</p>
                    <p className='text-[14px] text-white font-semibold'>Pending</p>
                </div>
                <div 
                    className="w-[49%] h-[50px] px-[15px] py-[5px] bg-green-500 flex justify-between items-center
                    rounded-md"
                >
                    <p className='text-[#eee] font-medium'>fdsoihafhhhkh</p>
                    <p className='text-[14px] text-white font-semibold'>Completed</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default History