import React, { useState } from 'react'

function MessageDetails() {
const[Reading, setReading] = useState(false)

  return (
    <div>
        <div className='flex items-center group space-x-2 mt-2 border-b-2
        border-b-gray-300 h-20 hover:bg-blue-200 cursor-pointer'>
        <div 
            className={`hover:bg-blue-400 cursor-pointer w-4 h-full
             ${Reading ? 'bg-blue-500' : null} `}
            onClick={()=>setReading(!Reading)}>
        </div>
        <div className=' flex flex-col flex-1 justify-center pt-3 overflow-hidden h-full pb-3'>
            <p className=' font-semibold'>Ahmed Said</p>
            <p className=' '><span className='font-semibold'>RE: </span>message details</p>
            <p className=' '><span className='font-semibold'>From:</span> Muhammad</p>
        </div>
        <div className=' flex flex-col items-center'>
            <i className='fa-solid fa-paperclip text-gray-500'></i>
            <spa>8:32 AM</spa>
        </div>
        <div>
            <i className='fa-solid fa-xmark text-slate-50 group-hover:text-red-600 
            p-2 text-2xl cursor-pointer'></i>                
        </div>
        </div>
    </div>
  )
}

export default MessageDetails