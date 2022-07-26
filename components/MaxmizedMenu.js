import React from 'react'

function MaxmizedMenu() {
  return (
    <div className='w-40'>
            {/* favorites */}
            <div className=' text-gray-500 space-x-2 border-b-2
             border-gray-400 pb-2 hover:bg-blue-200 cursor-pointer'>
              <i className='fa-solid fa-caret-right'></i>
              <span>Favorites</span>
            </div>

            {/* user accont */}
            <div className='flex  items-center space-x-2 text-gray-500
             w-full overflow-hidden mt-3'>
              <i className='fa-solid fa-caret-down -rotate-45'></i>
              <span>ahmed1071722@gmail.com</span>
            </div>

            {/* controls items */}
            <div className='flex  items-center space-x-2 mt-3 text-gray-600 hover:bg-blue-100 cursor-pointer'>
              <i className='fa-solid fa-caret-right text-gray-300 '></i>
              <span>Inbox</span>
              <span className=' text-blue-600 font-bold'>{2}</span>
            </div>

            <div className='flex  items-center space-x-2 mt-2 text-gray-600 hover:bg-blue-100 cursor-pointer'>
              <i className='fa-solid fa-caret-right text-gray-300 '></i>
              <span>Send Items</span>
            </div>

            <div className='flex  items-center space-x-2 mt-2 text-gray-600 hover:bg-blue-100 cursor-pointer'>
              <i className='fa-solid fa-caret-right text-gray-300 '></i>
              <span>Deleted</span>
              <span className=' text-red-600 font-bold'>{9}</span>
            </div>

            <div className='flex  items-center space-x-2 mt-2 text-gray-600 hover:bg-blue-100 cursor-pointer'>
              <i className='fa-solid fa-caret-right text-gray-300 '></i>
              <span>Archieved</span>
            </div>
    </div>
  )
}

export default MaxmizedMenu