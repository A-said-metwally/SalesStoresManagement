import Link from 'next/link'
import React, { useEffect , useState } from 'react'
import SubHeader from './SubHeader'

function MainHeader() {
  const [ActiveMenu , setActiveMenu] = useState("home")
  
  const click = (e)=>{
    const btns = document.getElementsByClassName("menu-btn")
    for(let i = 0; i< btns.length; i++){
      btns[i].classList.remove("active")
    }
    e.target.classList.add("active") 
    setActiveMenu(e.target.value)
  }



  return (
    <div className=''>
      <div className='flex border-b border-gray-300'>
        <Link href="/file">
          <button
            value="file"
            className='pt-2 pb-2 pl-4 pr-4 mr-1 bg-blue-700 text-white'
          >FILE</button>
        </Link>

        <button
          value="home"
          onClick={click}
          className=' menu-btn active relative pt-2 pb-2 pl-4 pr-4 hover:text-blue-500  '
        >HOME</button>

        <button
          value="sendrecieve"
          onClick={click}
          className='menu-btn  relative pt-2 pb-2 pl-4 pr-4 hover:text-blue-500'
        >Send / Recieve</button>

        <button
          value="folder"
          onClick={click}
          className='menu-btn  relative pt-2 pb-2 pl-4 pr-4 hover:text-blue-500'
        >FOLDER</button>

        <button
          value="view"
          onClick={click}
          className='menu-btn  relative pt-2 pb-2 pl-4 pr-4 hover:text-blue-500'
        >VIEW</button>
      </div>
      
      <SubHeader ActiveMenu={ActiveMenu}/>
  </div>

  )
}

export default MainHeader