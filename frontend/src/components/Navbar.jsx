import React, { useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext)

  return (
    <div 
      className='w-full h-[9vh] fixed top-0 bg-[#eee] flex items-center justify-between px-[100px] border-b-[1px]
      border-gray-200 shadow-md'
    >
        <div className="flex items-center">
            <h4 className='mr-1 font-semibold tracking-[1px] cursor-pointer text-[20px]'>
                <span className='text-green-500 text-[24px]'>G</span>arbage 
                <span className='mr-2'></span>
                <span className='text-green-500'>C</span>ollection
            </h4>
            <AiOutlineDelete size={20} className='text-green-500' />
        </div>
        <div className="flex items-center">
            <a 
              className='px-[20px] py-[5px] rounded-[10px] font-medium text-[16px] hover:text-green-500'
              href="/"
            >
              Home
            </a>
            <a
              className='px-[20px] py-[5px] rounded-[10px] font-medium text-[16px] hover:text-green-500'
              href="#features"
              >
              Features
            </a>

            {user && (
              <>
                <Link
                  className='px-[20px] py-[5px] rounded-[10px] font-medium text-[16px] hover:text-green-500'
                  to="/book"
                >
                  Book
                </Link>
                <Link
                  className='px-[20px] py-[5px] rounded-[10px] font-medium text-[16px] hover:text-green-500'
                  to="/history"
                >
                  History
                </Link>
              </>
            )}

            {user ? (
              <button
                className='px-[20px] py-[5px] rounded-[10px] font-medium text-[16px] bg-green-500 ml-[35px] text-white
                hover:bg-white hover:text-green-500'
                onClick={() => setUser(null)}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  className='px-[20px] py-[5px] rounded-[10px] font-medium text-[16px] hover:text-green-500'
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className='px-[20px] py-[5px] rounded-[10px] font-medium text-[16px] hover:text-green-500'
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
        </div>
    </div>
  )
}

export default Navbar