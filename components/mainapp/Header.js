import Link from 'next/link'
import React,{useState} from 'react'
import { useEffect } from 'react'
import secureLocalStorage from 'react-secure-storage'

function Header() {

  const [View, setView] = useState(false)
  const [UserImg, setUserImg] = useState(null)


  const getData = ()=>{
    let decryptedData = secureLocalStorage.getItem('sessionInfo') // get decrypted data from secure local storage
    let userInfo = decryptedData.userInfo[0].data
    setUserImg(userInfo.Image)
}
useEffect(()=>{
  getData()
},[])

  return (
    <div className='  flex items-center p-2 w-screen  bg-gray-100 shadow-md ' >
        <Link href='/userpage'>
          <img src={UserImg} alt="user image" className=' rounded-full h-12 w-12 cursor-pointer ml-4 hover:scale-105'/>
        </Link>
        <ul className='flex mb-0 space-x-6 text-gray-500 text-lg font-semibold '>
            <li><Link href="/main"><a className=' no-underline'>Home</a></Link></li>
            <li><Link href="/"><a className=' no-underline'>View</a></Link></li>
            <li><Link href="/"><a className=' no-underline'>Edit</a></Link></li>
            <li onClick={()=>setView(!View)} >
              <div className=' relative'>
                <a className=' no-underline cursor-pointer'>Settings</a>
                <div className={`${View? 'block': 'hidden'}  absolute z-20 top-12 right-18 w-52 border-1 border-gray-300
                 rounded-md shadow-md bg-gray-100`} >
                  <ul className='p-2 text-blue-500 leading-8 '>
                    <li className='p-1 rounded-md hover:bg-gray-300 cursor-pointer'>
                      <Link href="/"><a className=' no-underline'>Language Settings</a></Link>
                    </li>
                    <li className='p-1 rounded-md hover:bg-gray-300 cursor-pointer'>
                      <Link href="/users"><a className=' no-underline'>View Users</a></Link>
                    </li>
                    <li className='p-1 rounded-md hover:bg-gray-300 cursor-pointer'>
                      <Link href="/"><a className=' no-underline'>Master Data</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
        </ul> 
    </div>
  )
}

export default Header