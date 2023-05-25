import React, { useContext, useState } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const [inputs, setInputs] = useState(null)

  const { setUser } = useContext(AuthContext)

  const handleChange = (e) => {
    setInputs((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, inputs).then((res) => {
      setUser(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-[91vh] mt-[9vh] px-[100px] flex items-center justify-center">
        <div className="w-[390px] min-h-[47vh] bg-green-500 px-[40px] rounded-md shadow-md">
          <h4 className='text-white text-center py-[30px] text-[20px] font-semibold'>Login</h4>

          <div className="flex flex-col mb-2">
            <label htmlFor="" className='text-[12px] mb-1 text-[#eee]'>Email</label>
            <input 
              type="email" 
              placeholder='Email Address' 
              className='px-[10px] py-[5px] text-[13px]'
              name='email'
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mb-2">
            <label htmlFor="" className='text-[12px] mb-1 text-[#eee]'>Password</label>
            <input 
              type="password" 
              placeholder='Password' 
              className='px-[10px] py-[5px] text-[13px]'
              name='password'
              required
              onChange={handleChange}
            />
          </div>

          <div className="mt-7 flex justify-center">
            <button
              className='px-[20px] py-[5px] bg-[#eee] rounded-md text-[14px] font-medium hover:bg-[#fff]
              hover:text-green-500'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login