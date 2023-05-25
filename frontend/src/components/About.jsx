import React from 'react'
import { AiFillTwitterSquare, AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const About = () => {
  return (
    <div className='w-full px-[100px] h-[9vh] flex items-center justify-between'>
        <div className="flex-1">
            <p className='text-black text-[13px]'>© Copyright 2023 Carbage Collector All Rights Reserved.</p>
        </div>

        <div className="flex-1 flex items-center justify-end">
            <AiFillTwitterSquare className='mr-[20px] text-black text-[25px] cursor-pointer' />
            <AiFillFacebook className='mr-[20px] text-black text-[25px] cursor-pointer' />
            <AiFillInstagram className='mr-[20px] text-black text-[25px] cursor-pointer' />
            <AiFillYoutube className='mr-[20px] text-black text-[25px] cursor-pointer' />
        </div>
    </div>
  )
}

export default About