import React from 'react'
import {} from '@heroicons/react/outline'

function Home() {
  return (
    <div className='flex border-b border-gray-300 pt-2 '>
        {/* New */}
        <div className='box relative  '>
            <div className='flex flex-col h-full justify-between items-center pl-2 pr-2 '>
                <div className='flex justify-center '>
                    <div className=' flex flex-col items-center hover:bg-blue-200 cursor-pointer '>
                        <i className="fas fa-envelope-open text-green-400 text-3xl"></i>
                        <p className='w-1/2 leading-5 text-center pt-1'>New Email</p>
                    </div>
                    <div className=' flex flex-col items-center hover:bg-blue-200 cursor-pointer '>
                        <i className="fas fa-compass text-orange-400 text-3xl"></i>
                        <p className='w-1/2 leading-5 text-center pt-1'>New Items</p>
                    </div>
                </div>
                <p  className='leading-2 m-0'>New</p>
            </div>
        </div>
    {/* Delete */}
        <div className='box relative'>
            <div className='flex flex-col h-full justify-between items-center pl-2 pr-2'>
                <div className='flex justify-center items-center space-x-4'>
                    <div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-flag-checkered text-yellow-500 text-lg"></i>
                            <p className=' leading-6  '>Ignore</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-share text-blue-500 text-lg"></i>
                            <p className=' leading-6 '>Clean Up</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-times text-red-600 text-lg"></i>
                            <p className=' leading-6'>Junk</p>
                        </div>
                    </div>
                    <div className=' flex flex-col items-center hover:bg-blue-200 cursor-pointer'>
                        <i className="far fa-edit text-red-500 text-3xl"></i>
                        <p className=' leading-5 text-center text-red-600 pt-2 font-semibold'>Delete</p>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Delete</p>
            </div>
        </div>
        {/* Respond */}
        <div className='w-2/9 box relative '>
            <div className='flex flex-col h-full w-full items-center justify-between pl-2 pr-2 '>
                <div className='flex flex-1 justify-between'>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-pl-2 pr-2'>
                        <i className="fas fa-comment-dots text-blue-500 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>Reply</p>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-book-open text-orange-700 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>Reply All</p>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-arrow-circle-right text-gray-500 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>Forward</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <div className=' flex justify-start items-start space-x-2 hover:bg-blue-200 cursor-pointer mb-3'>
                            <i className="fas fa-birthday-cake text-yellow-500 text-lg"></i>
                            <p className=' leading-3  '>Meeting</p>
                        </div>
                        <div className=' flex justify-between items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-share text-blue-500 text-lg"></i>
                            <p className=' leading-3 '>More</p>
                        </div>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Respond</p>
            </div>
        </div>

        {/* Quick Steps */}
        <div className='box relative'>
            <div className='flex flex-col h-full justify-between items-center pl-2 pr-2'>
                <div className='flex justify-center items-center space-x-6 border-1 border-gray-400 pl-1 pr-1 pt-1'>
                    <div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-book-open text-yellow-500 text-lg"></i>
                            <p className=' leading-6  '>Access Data Col</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-square-full text-gray-700 text-lg"></i>
                            <p className=' leading-6 '>Team Email</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-ellipsis-h text-red-600 text-lg"></i>
                            <p className=' leading-6'>{'Reply & DElete'}</p>
                        </div>
                    </div>
                    <div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-share text-red-400 text-lg"></i>
                            <p className=' leading-6  '>To Manager</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-thumbs-up text-green-700 text-lg"></i>
                            <p className=' leading-6 '>Done</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="far fa-edit text-purple-600 text-lg"></i>
                            <p className=' leading-6'>Create New</p>
                        </div>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Quick Steps</p>
            </div>
        </div>

        {/* More */}
        <div className='w-2/9 box relative '>
            <div className='flex flex-col h-full w-full items-center justify-between pl-2 pr-2 '>
                <div className='flex flex-1 justify-between'>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-pl-2 pr-2'>
                        <i className="fas fa-table text-yellow-600 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>Move</p>
                        <i className="fas fa-caret-down text-gray-700 text-md leading-3"></i>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-bell text-orange-500 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>Rules</p>
                        <i className="fas fa-caret-down text-gray-700 text-md leading-3"></i>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-user-friends text-green-500 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>OneNote</p>
                        <i className="fas fa-caret-down text-white text-md leading-3"></i>
                    </div>
                </div>
                <p  className='leading-2 m-0'>More</p>
            </div>
        </div>

        {/* tags */}
        <div className='w-2/9 box relative '>
            <div className='flex flex-col h-full w-full items-center justify-between pl-2 pr-2 '>
                <div className='flex flex-1 justify-between'>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-pl-2 pr-2'>
                        <i className="fas fa-home text-gray-400 text-3xl"></i>
                        <p className='leading-4 text-center pt-1'>Unread/<br/>Read</p>
                        <i className="fas fa-caret-down text-gray-700 text-md leading-3"></i>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-bell text-amber-900 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>Categories</p>
                        <i className="fas fa-caret-down text-gray-700 text-md leading-3"></i>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-info-circle text-lime-800 text-3xl"></i>
                        <p className='leading-4 text-center pt-1'>Follw<br/>Up</p>
                        <i className="fas fa-caret-down text-gray-700 text-md leading-3"></i>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Taggs</p>
            </div>
        </div>
        {/* translate */}
        <div className='box relative '>
            <div className='flex flex-col h-full w-full items-center justify-between pl-2 pr-2 '>
                <div className=' flex flex-col items-center hover:bg-blue-200 cursor-pointer '>
                    <i className="fab fa-github-square text-green-600 text-5xl"></i>
                    <p className=' leading-4 text-center pt-1'>Translate<br/>Message</p>
                </div>
                <p  className='leading-2 m-0'>Translate</p>
            </div>
        </div>

    </div>
  )
}

export default Home