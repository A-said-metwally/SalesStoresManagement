import React, { useState } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'

function Box({el, fun , status}) {


  return (
        <div className=' flex w-1/3 h-36 items-center p-1
            justify-center  group'
            onClick={()=>fun(el)}
            >
            <div className=' relative h-full w-full flex items-center overflow-hidden 
            justify-center bg-slate-200 cursor-pointer hover:scale-105  '>
            <img src={`/${el}.jpg`} className="h-full w-full cursor-pointer"/>
          
              <div className='flex items-center justify-center absolute top-0 left-0 w-full h-full  bg-gray-400
               group-hover:hidden '>
                  <QuestionMarkCircleIcon className='h-16 w-16 text-blue-600'/>
              </div>            

            </div>
        </div>
  )
}

export default Box