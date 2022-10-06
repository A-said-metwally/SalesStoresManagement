import React from 'react'

function Footer() {
  return (
    <div className='flex items-center space-x-4 p-2 '>
        <p className=' font-semibold'>Powered <span className='text-orange-500'>by Ahmed Said</span></p>
        <div className=' flex justify-center items-center space-x-3'>
            <i className="fas fa-phone-alt text-blue-500"></i>
            <span className='font-semibold text-orange-500'>01210610717</span>
        </div>
    </div>
  )
}

export default Footer