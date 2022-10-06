import React,{useEffect, useState} from 'react'

function Confirm({cancel}) {

  const [show, setShow] = useState(false)


  useEffect(()=>{
    setShow(true)
  },[])

  return (
    <div>        
          <div className='confirm absolute top-0 left-0 h-screen w-screen
            z-10 flex items-center justify-center '>
              <div 
                className={`${show && 'confirm-box'} flex justify-center items-center space-x-6 w-0 h-0 overflow-hidden shadow-md
                rounded-md bg-gradient-to-br from-blue-500 via-green-500 to-gray-400 transition-all duration-500`} >
              <button 
                className='p-3 bg-gray-300 rounded-md flex justify-center items-center font-semibold
               text-green-600 text-lg shadow-lg border-1 border-gray-300 hover:bg-green-400 hover:text-white
                '>Confirm Changes</button>
              <button 
                className='p-3 bg-gray-300 rounded-md flex justify-center items-center font-semibold
                 text-red-500 text-lg shadow-lg border-1 border-gray-300 hover:bg-red-500 hover:text-white'
                 onClick={()=>{cancel()}}
                 >Cancel</button>
            </div>
          </div>          
    </div>
  )
}

export default Confirm