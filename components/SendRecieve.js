import React from 'react'

function SendRecieve() {
  return (
    <div className='flex border-b border-gray-300 pt-2 '>
        {/* send recieve all */}
        <div className='box relative'>
            <div className='flex flex-col h-full justify-between items-center pl-2 pr-2'>
                <div className='flex justify-center items-center space-x-4'>
                    <div className=' flex flex-col items-center hover:bg-blue-200 cursor-pointer'>
                        <i className="far fa-edit text-green-400 text-3xl"></i>
                        <p className=' leading-5 text-center text-gray-600 pt-2 font-semibold'>Send/Recieve<br/>All Folders</p>
                    </div>
                    <div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-flag-checkered text-yellow-500 text-lg"></i>
                            <p className=' leading-6  '>Update Folder</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-share text-yellow-600 text-lg"></i>
                            <p className=' leading-6 '>Send All</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-times text-yellow-500 text-lg"></i>
                            <p className=' leading-6'>Send/Recieve Groups</p>
                        </div>
                    </div>
                </div>
                <p  className='leading-2 m-0'>{`Send & Recieve`}</p>
            </div>
        </div>

        {/* download */}
        <div className='w-2/9 box relative '>
            <div className='flex flex-col h-full w-full items-center justify-between pl-2 pr-2 '>
                <div className='flex flex-1 justify-between'>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-pl-2 pr-2'>
                        <i className="fas fa-table text-yellow-600 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>Show<br/>Progress</p>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-bell text-orange-500 text-3xl"></i>
                        <p className=' leading-4 text-center pt-1'>Cancel<br/>All</p>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Download</p>
            </div>
        </div>

        {/* Server */}
        <div className='box relative'>
            <div className='flex flex-col h-full justify-between items-center pl-2 pr-2'>
                <div className='flex justify-center items-center space-x-4'>
                    <div className=' flex flex-col items-center hover:bg-blue-200 cursor-pointer'>
                        <i className="fas fa-compass text-green-400 text-3xl"></i>
                        <p className=' leading-5 text-center text-gray-600 pt-2 font-semibold'>Download<br/>Headers</p>
                    </div>
                    <div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fab fa-css3 text-yellow-500 text-lg"></i>
                            <p className=' leading-6  '>Mark to Download</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fas fa-code text-yellow-600 text-lg"></i>
                            <p className=' leading-6 '>Unmark to Download</p>
                        </div>
                        <div className=' flex justify-start items-start space-x-3 hover:bg-blue-200 cursor-pointer'>
                            <i className="fab fa-bootstrap text-yellow-500 text-lg"></i>
                            <p className=' leading-6'>Process Marked Headers</p>
                        </div>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Server</p>
            </div>
        </div>

        {/* Preferences */}
        <div className='w-2/9 box relative '>
            <div className='flex flex-col h-full w-full items-center justify-between pl-2 pr-2 '>
                <div className='flex flex-1 justify-between'>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-pl-2 pr-2'>
                        <i className="fas fa-paper-plane text-yellow-600 text-3xl"></i>
                        <p className=' leading-5 text-center pt-1'>Download<br/>Preferences</p>
                    </div>
                    <div className=' flex flex-col items-center justify-between hover:bg-blue-200 cursor-pointer pl-2 pr-2'>
                        <i className="fas fa-phone-alt text-orange-500 text-3xl"></i>
                        <p className=' leading-5 text-center pt-1'>Work<br/>Ofline</p>
                    </div>
                </div>
                <p  className='leading-2 m-0'>Preferences</p>
            </div>
        </div>


    </div>
  )
}

export default SendRecieve