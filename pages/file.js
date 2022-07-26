import Link from 'next/link'
import React from 'react'
import Head from '../head'

function File() {
  return (
    <div className='flex'>
      <Head title="File Page" />
        {/* left section */}
        <div className='w-40 bg-blue-600  pt-4 h-screen'>
            <Link href="/">
                <i className='far fa-arrow-alt-circle-left pl-3 text-slate-50  
                 text-4xl rounded-full  hover:opacity-70 cursor-pointer mb-3' ></i>
            </Link>
            <ul className='w-full p-0 '>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full bg-blue-500 hover:bg-blue-700 cursor-pointer'>Info</li>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full hover:bg-blue-700 cursor-pointer'>{`Open & Export`}</li>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full hover:bg-blue-700 cursor-pointer'>Save As</li>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full hover:bg-blue-700 cursor-pointer'>Save Attachments</li>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full hover:bg-blue-700 cursor-pointer'>Print</li>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full hover:bg-blue-700 cursor-pointer'><hr/></li>
            </ul>
            <ul className='w-full p-0 '>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full hover:bg-blue-700 cursor-pointer'>Office Account</li>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full hover:bg-blue-700 cursor-pointer'>Options</li>
                <li className='text-md text-slate-50 pl-3 pr-2 pt-2 pb-2 w-full hover:bg-blue-700 cursor-pointer'>Exit</li>
            </ul>


        </div>

        {/* right section */}
        <div className=' flex flex-1'>
            
            <div className='w-2/3 h-screen p-5'>
                {/* Account Information */}
                <h1 className=' text-gray-700 leading-5 font-normal'>Account Information</h1>

                <div className='flex justify-between items-center border border-gray-500 w-full p-1 mt-5
                    hover:bg-blue-200 cursor-pointer'>
                    <i className='fas fa-sync text-3xl text-blue-500 p-2 '></i>
                    <div className='flex flex-col flex-1 justify-center'>
                        <Link href="ahmed1071722@gmail.com" >
                            <a className="p-1 no-underline text-gray-600 leading-3">ahmed1071722@gmail.com</a>
                        </Link>
                        <span className=" pl-1">Microsoft Exchange</span>
                    </div>
                    <i className='fas fa-caret-down text-gray-600 pr-2'></i>
                </div>

                {/* Add Account */}
                <div className='flex justify-start items-center space-x-2 w-32 p-1
                     border border-gray-500 mt-1 hover:bg-blue-200 cursor-pointer'>
                    <i className='fas fa-plus text-green-600 '></i>
                    <span className="">Add Account</span>
                </div>

                {/* Account Settings */}
                <div className='flex justify-between pl-1 mt-3'>
                    <div className='flex flex-col items-center justify-center border border-gray-500 w-28 h-28 hover:bg-blue-200'>
                        <i className='fas fa-user text-blue-400 text-4xl pb-2 '></i>
                        <span className=" leading-4 text-gray-600">Account<br/>Settings</span>
                    </div>
                    <div className='flex flex-1 pl-4 '>
                        <div className='flex flex-col itmes-start'>
                            <h1 className='text-xl text-gray-600 leading-5'>Account and Social Network Settings</h1>
                            <span className=" leading-5 text-gray-600">Change settings for this account or set up more
                                connections
                            </span>
                            <ul className='pl-3 li-square'>
                                <li >
                                    Access this account on the web<br/>
                                    <a href="">https://outlook.office365.com</a>
                                </li>
                                <li >
                                    Connect to social network
                                </li>
                            </ul>
                        </div>
                    </div>                    
                    <div className='text-center'>
                        <div className='border-1 border-gray-400 p-2 h-32 w-32 mt-8'>
                            <div className='border-1 border-gray-400 p-1 w-full h-full'>
                                <img src="/user.jpg" alt="userimg" className='w-full h-full'/>
                            </div>
                        </div>
                        <span className="text-blue-600">Change</span>
                    </div>
                </div>
                
                {/* automatic replies */}
                <div className='flex justify-between pl-1 mt-1'>
                    <div className='flex flex-col items-center justify-center border border-gray-500 w-28 h-28 hover:bg-blue-200'>
                        <i className='fas fa-book-open text-yellow-400 text-4xl pb-2 '></i>
                        <span className=" leading-4 text-gray-600 text-center">Automatic<br/>Replies</span>
                    </div>
                    <div className='flex flex-1 flex-col items-start pl-4'>
                        <h1 className='text-xl text-gray-600 leading-4'>Automatic Replies (Out of Office)</h1>
                        <span className=" leading-4 text-gray-600">Change settings for this account or set up more
                            connections
                        </span>
                    </div>
                </div>

                {/* mailbox clean up */}
                <div className='flex justify-between pl-1 mt-3'>
                    <div className='flex flex-col items-center justify-center border border-gray-500 w-28 h-28 hover:bg-blue-200'>
                        <i className='fas fa-broom text-red-400 text-4xl pb-2 '></i>
                        <span className=" leading-4 text-gray-600 text-center">Cleanup<br/>Tools</span>
                    </div>
                    <div className='flex flex-1 flex-col items-start pl-4'>
                        <h1 className='text-xl text-gray-600 leading-4'>Mailbox Cleanup</h1>
                        <span className=" leading-4 text-gray-600">Change settings for this account or set up more
                            connections
                        </span>
                    </div>
                </div>


            </div>
        </div>

    </div>
  )
}

export default File