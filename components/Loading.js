import React from 'react'

function Loading() {
  return (
    <div>        
            <div className='overlay absolute top-0 left-0 h-screen w-screen
            z-10 flex items-center justify-center '>
            <p className='text-4xl text-white '>Loading ....</p>
            </div>          
    </div>
  )
}

export default Loading