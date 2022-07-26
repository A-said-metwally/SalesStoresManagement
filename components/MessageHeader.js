import React from 'react'

function MessageHeader() {
  return (
    <div className='mt-3 pb-2'>
      
      <div className='flex space-x-5'>
        <img src="/user.jpg" alt="accountImg" className='h-20 w-20 shadow-lg border' />
        <div>
          <span>Mon 25-Jul-2022 11:00 AM</span>
          <p className='mb-0 text-2xl text-gray-600'>Ahmed Said</p>
          <p className='mb-0 text-xl text-gray-600'>Re: Mail title  - Conversation</p>
        </div>
      </div>

      <div className='border-b-2 border-gray-300'>
        <div className='flex space-x-4 mt-2'>
          <b>To</b>
          <span>Amr Ismail </span>
        </div>
        <div className='flex space-x-4'>
          <b>CC</b>
          <span>Muhammad Basha;Ahmed Said; Ashraf Ezzat; Mahmoud El Nemr </span>
        </div>
      </div>

      <div className='flex space-x-3 items-center mt-1 border-b-2 border-b-gray-300 pb-1'>
          <div className='flex items-center space-x-2 bg-gray-200 pl-2 pr-2 hover:bg-gray-300 cursor-pointer'>
              <i className='fa-solid fa-envelope text-yellow-500'></i>
              <span>Message</span>
          </div>
          <div className='flex items-center space-x-2 bg-gray-200 pl-2 pr-2 hover:bg-gray-300 cursor-pointer'>
              <i className='fa-solid fa-envelope text-yellow-500'></i>
              <span>Attachments</span>
          </div>
      </div>

    </div>
  )
}

export default MessageHeader