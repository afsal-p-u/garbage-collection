import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

import Navbar from '../components/Navbar'
import { useAuthContext } from '../context/AuthContext'
import View from '../components/View'

const Home = () => {
    const [data, setData] = useState(null)
    const [view, setView] = useState(null)

    const { admin } = useAuthContext()

    useEffect(() => {
        const getAllLists = () => {
            axios.get(`${import.meta.env.VITE_SERVER_URL}/book/pending`, {
                headers: {
                    token: admin.token
                }
            }).then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        getAllLists()
    }, [])

    const handleDelete = (e, id) => {
        e.preventDefault()

        axios.delete(`${import.meta.env.VITE_SERVER_URL}/book/${id}`, {
            headers: {
                token: admin.token
            }
        }).then((res) => {
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleCompleted = (e, id) => {
        e.preventDefault()

        axios.put(`${import.meta.env.VITE_SERVER_URL}/book/${id}`, { status: "completed" }, {
            headers: {
                token: admin.token
            }
        }).then((res) => {
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleView = (e, item) => {
        e.preventDefault()
        setView(item)
    }

    const _setView = (value) => {
        setView(value)
    }

  return (
    <>
        <Navbar />
        <div className='h-[90vh] w-full px-[50px] py-[20px]'>
            <div className="w-full min-h-[10vh] flex flex-wrap gap-x-[80px] gap-y-[20px]">
                {data?.map((item, i) => (
                    <div 
                        className="flex bg-[#eee] w-[550px] h-[60px] items-center justify-between px-[15px]
                        rounded-md"
                        key={i}
                    >
                        <h3 className='text-[13px]'>{item._id}</h3>
                        <div className="flex items-center gap-4">
                            <button 
                                className='px-[15px] py-[5px] rounded-md text-[12px] font-medium
                                bg-blue-400 text-white'
                                onClick={(e) => handleView(e, item)}
                            >
                                View
                            </button>
                            <button 
                                className='px-[15px] py-[5px] rounded-md bg-gray-50 text-[12px] font-medium'
                                onClick={(e) => handleCompleted(e, item._id)}
                            >
                                Mark Completed
                            </button>
                            <button 
                                className='px-[15px] py-[5px] rounded-md text-[12px] font-medium
                                bg-red-500 text-white'
                                onClick={(e) => handleDelete(e, item._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {view && (
            <View item={view} setView={_setView} />
        )}
    </>
  )
}

export default Home