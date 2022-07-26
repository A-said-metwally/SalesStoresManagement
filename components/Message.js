import React,{useState} from 'react'
import MessageDetails from './MessageDetails'

function Message({date}) {

  return (
    <div className=''>
        <div className='flex pl-2 items-center space-x-2 text-gray-600
         bg-gray-200 cursor-pointer hover:bg-gray-300'>
            <i className="fa-solid fa-caret-down -rotate-45"></i>
            <h3 className='text-sm'>{date}</h3>
        </div>
        <MessageDetails />
        <MessageDetails />
        <MessageDetails />
        <MessageDetails />
  </div>
)
}

export default Message