import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div>
        <nav className='flex items-center justify-between bg-gray-300 text-blue-400 shadow-md'>
            <h1 className=' text-xl font-bold pl-5'>
                <a href="#">NextAuth</a>
            </h1>
            <ul className='flex items-center space-x-5 pr-10 text-xl font-semibold'>
                <li className='pt-1'>
                    <Link href="/"><a className=' no-underline'>Home</a></Link>
                </li>
                <li className='pt-1'>
                    <Link href="/dashboard"><a>Dashboard</a></Link>
                </li>
                <li className='pt-1'>
                     <Link href="/blog"><a>Blog</a></Link>
                </li>
                <li className='text-orange-500 pt-1'>
                    <Link href="/api/auth/signin"><a>Sign In</a></Link>
                </li>
                <li className='text-orange-500 pt-1'>
                    <Link href="/api/auth/signout"><a>Sign Out</a></Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar