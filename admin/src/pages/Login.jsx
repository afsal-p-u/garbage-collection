import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '../context/AuthContext'

const Login = () => {
    const navigate = useNavigate()

    const [inputs, setInputs] = useState(null)

    const { setAdmin} = useAuthContext()

    const handleChange = (e) => {
        setInputs((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/admin`, inputs).then((res) => {
            setAdmin(res.data)
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        <div className="w-[400px] min-h-[200px] bg-[#eee] p-[20px] rounded-md ">
            <h3 className='text-[19px] text-center mb-[20px] font-semibold'>Login</h3>
            <div className="flex flex-col mb-[10px]">
                <label htmlFor="" className='mb-1 text-[12px]'>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address"
                    className='px-[10px] py-[5px] text-[13px]' 
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className='mb-1 text-[12px]'>Email</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    className='px-[10px] py-[5px] text-[13px]' 
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mt-[30px] flex justify-center">
                <button
                    className='px-[15px] py-[5px] bg-[#fff] rounded-md font-semibold text-[15px]'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login