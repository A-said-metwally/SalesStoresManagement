import React from 'react'

function MessageControls() {
  return (
    <div>
        <div className='flex space-x-4'>
            <div className='flex items-center  space-x-2 text-gray-500 hover:bg-blue-200 cursor-pointer'>
              <i className='fa-solid fa-envelope  '></i>
              <p className=' mb-0 text-lg'>Reply</p>
            </div>
            <div className='flex items-center  space-x-2 text-gray-500 hover:bg-blue-200 cursor-pointer'>
              <i className='fa-solid fa-envelopes-bulk  '></i>
              <p className=' mb-0 text-lg'>Reply All</p>
            </div>
            <div className='flex items-center  space-x-2 text-gray-500 hover:bg-blue-200 cursor-pointer'>
              <i className='fa-solid fa-share-from-square '></i>
              <p className=' mb-0 text-lg'>Forward</p>
            </div>
        </div>
    </div>
  )
}

export default MessageControls