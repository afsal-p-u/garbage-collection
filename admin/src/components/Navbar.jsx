import React from 'react'
import { useAuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { setAdmin } = useAuthContext()

    const handleLogout = () => {
        setAdmin(null)
    }

  return (
    <div className='w-full h-[10vh] bg-[#eee] px-[100px] flex items-center justify-between'>
        <h3 className='font-semibold'>Garbage Collection Admin</h3>
        <button
            className='px-[20px] py-[5px] bg-white rounded-md text-[13px] font-semibold'
            onClick={handleLogout}
        >
            Logout
        </button>
    </div>
  )
}

export default Navbar