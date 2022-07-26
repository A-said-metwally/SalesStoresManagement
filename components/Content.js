import React,{useEffect, useState} from 'react'
import Controls from './Controls'
import Conversation from './Conversation'
import MaxmizedMenu from './MaxmizedMenu'
import Message from './Message'
import MessageControls from './MessageControls'
import MessageHeader from './MessageHeader'
import MinimizedMenu from './MinimizedMenu'
import SearchBox from './SearchBox'
import {conversations} from '../data'

function Content() {
  const[ViewPan , setViewPan] = useState(true)
  const dates = ["2021-07-05","2021-07-04","2021-07-03","2021-07-01"]

  const [Messages , setMessages] = useState()
  const [Dates , setDates] = useState()

  useEffect(()=>{
    console.log(conversations)
  })

  return (
    <div className='flex flex-1 overflow-hidden  pt-2'>
        {/* start left side */}
        <div className='  bg-gray-50  h-full border-r-2 border-gray-300 p-2 '>
          
          <div className={`${ViewPan? 'text-right' : 'text-center' }`}  onClick={()=>setViewPan(!ViewPan)}>
            <i className={`fa-solid ${ViewPan? 'fa-angle-left' : 'fa-angle-right'} hover:bg-blue-200 cursor-pointer`}></i>
          </div>

           { ViewPan ? <MaxmizedMenu /> : <MinimizedMenu /> }
           
        </div>
        {/* end left side */}



        {/* start mid side */}
        <div className=' w-3/12  max-h-full border-r-2 border-gray-300 p-2 overflow-auto'>
          <SearchBox />
          <Controls />
          {dates.map((date , id)=>{
            return  (
              <Message date={date} key={id}/>
            )
          })}
        </div>
        {/* end mid side */}



        {/* right side */}
        <div className='flex flex-col relative w-full max-h-full pt-2 pl-4 pr-3 overflow-auto'>
            <MessageControls/>
            <MessageHeader/>
            <Conversation/>
        </div>

    </div>
  )
}

export default Content