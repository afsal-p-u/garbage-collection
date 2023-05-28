import React from 'react'

const View = ({ item, setView }) => {
    delete item.__v

  return (
    <div className='absolute top-[10vh] left-0 bg-[#eeeeeea9] h-[90vh] w-[100%] flex items-center justify-center'>
        <div className="w-[400px] min-h-[50px] p-[30px] bg-white flex flex-col gap-[10px] rounded-md shadow-sm">
            {Object.keys(item).map((list, i) => (
                <div className="flex items-center justify-between bg-[#eee] px-[15px] py-[7px]" key={i}>
                    <small className='text-[13px]'>{list}</small>
                    <p className='text-[13px] font-medium'>{item[list]}</p>
                </div>
            ))}

            <div className="mt-[20px] flex justify-center">
                <button
                    className='px-[20px] py-[5px] text-[14px] font-semibold rounded-md bg-[#eee]'
                    onClick={() => setView(null)}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
  )
}

export default View