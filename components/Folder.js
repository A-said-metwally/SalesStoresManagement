import React from 'react'

export default function Folder() {
  return (
    <div className='flex border-b border-gray-300 pt-2 '>
        {/* new */}
        <div className='w-2/9 box relative '>
            <div className='flex flex-col h-full w-full items-center justify-between pl-2 pr-2 '>
                <div className='flex flex-1 justify-between'>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-pl-2 pr-2'>
                        <i className="fas fa-folder text-yellow-500 text-3xl"></i>
                        <p className=' leading-5 text-center pt-1'>New<br/>Floder</p>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-folder-open text-orange-500 text-3xl"></i>
                        <p className=' leading-5 text-center pt-1'>New Search<br/>Folder</p>
                    </div>
                </div>
                <p  className='leading-2 m-0'>New</p>
            </div>
        </div>

        {/* actions */}
        <div className='box relative'>
            <div className='flex flex-col h-full justify-between items-center pl-2 pr-2'>
                <div className='flex justify-center items-center space-x-4'>
                    <div className=' flex flex-col items-center hover:bg-blue-200 cursor-pointer'>
                        <i className="fas fa-folder-minus text-green-400 text-3xl"></i>
                        <p className=' leading-5 text-center text-gray-600 pt-2 font-semibold'>Rename<br/>Folder</p>
                    </div>
                    <div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-flag-checkered text-yellow-500 text-lg"></i>
                            <p className=' leading-6  '>Copy Folder</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-share text-yellow-600 text-lg"></i>
                            <p className=' leading-6 '>Move Folder</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-folder-plus text-yellow-500 text-lg"></i>
                            <p className=' leading-6'>Delete Folder</p>
                        </div>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Actions</p>
            </div>
        </div>

        {/* Clean up */}
        <div className='w-2/9 box relative '>
            <div className='flex flex-col h-full w-full items-center justify-between pl-2 pr-2 '>
                <div className='flex flex-1 justify-between'>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-pl-2 pr-2'>
                        <i className="fas fa-book-reader text-green-400 text-3xl"></i>
                        <p className=' leading-5 text-center pt-1'>Mark All<br/>as Read</p>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-pencil-ruler text-blue-300 text-3xl"></i>
                        <p className=' leading-5 text-center pt-1'>Run Rules<br/>Now</p>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-sort-alpha-down text-gray-700 text-3xl"></i>
                        <p className=' leading-5 text-center pt-1'>Show All<br/>Folders A to Z</p>
                    </div>
                    <div className='flex flex-col items-start justify-between ml-3'>
                        <div className=' flex justify-start items-start space-x-2 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-broom text-yellow-500 text-lg"></i>
                            <p className=' leading-3  '>Clean Up Folders</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-backspace text-blue-500 text-lg"></i>
                            <p className=' leading-3 '>Delete All</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-trash-alt text-red-500 text-lg"></i>
                            <p className=' leading-3 '>Recover Deleted Items</p>
                        </div>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Clean Up</p>
            </div>
        </div>

    </div>
  )
}
