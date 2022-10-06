import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='  flex items-center p-2 w-screen  bg-gray-100 shadow-md '>
        <ul className='flex mb-0 space-x-6 text-gray-500 text-lg font-semibold '>
            <li><Link href="/"><a className=' no-underline'>Home</a></Link></li>
            <li><Link href="/"><a className=' no-underline'>View</a></Link></li>
            <li><Link href="/"><a className=' no-underline'>Edit</a></Link></li>
            <li><Link href="/"><a className=' no-underline'>Settings</a></Link></li>
        </ul> 
    </div>
  )
}

export default Header