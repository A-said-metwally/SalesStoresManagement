import React from 'react'

function Controls() {
  return (
    <div className='flex justify-between p-2'>
        <button className='text-blue-500 leading-4 font-semibold'>All</button>
        <button className='text-gray-500 leading-4 font-semibold'>
        Unread <i className="fa-solid fa-caret-down ml-2"></i>
        </button>
        <button className='text-gray-500 leading-4 font-semibold'>
        Newest <i className="fa-solid fa-arrow-down-a-z ml-2"></i>
        </button>
    </div>
)
}

export default Controls