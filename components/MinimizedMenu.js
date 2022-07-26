import React from 'react'

function MinimizedMenu() {
  return (
    <div className='flex flex-col items-center mt-4 w-11 h-screen '>
        <button className='btn-test text-gray-500'>Inbox <span className='text-blue-600'>{2}</span></button>
        <button className='btn-test text-gray-500'>Send</button>
        <button className='btn-test text-gray-500'>Deleted <span className='text-red-600'>{9}</span> </button>
        <button className='btn-test text-gray-500'>All Folders</button>
    </div>
)
}

export default MinimizedMenu