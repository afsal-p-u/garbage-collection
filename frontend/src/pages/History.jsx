import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'

const History = () => {
    const { user, setUser } = useContext(AuthContext)

    const [data, setData] = useState(null)

    useEffect(() => {
        const getHistory = () => {
            axios.get(`${import.meta.env.VITE_SERVER_URL}/book/user/${user.user}`, {
                headers: {
                    token: user.token,
                }
            }).then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
                setUser(null)
            })
        }

        getHistory()
    }, [])
  return (
    <>
        <Navbar />
        <div className="mt-[9vh] w-full h-[91vh] px-[100px] py-[30px]">
            <h3 className='mb-3'>History</h3>
            <div className="w-full flex flex-wrap gap-5">
                {data?.map((item, i) => (
                    <div 
                        className="w-[49%] h-[50px] px-[15px] py-[5px] bg-green-500 flex justify-between items-center
                        rounded-md"
                        key={i}
                    >
                        <p className='text-[#eee] font-medium'>{item._id}</p>
                        <p 
                            className={`text-[14px] font-semibold 
                            ${item.status === 'pending' ? 'text-black' : 'text-white'}`}
                        >
                            {item.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default History