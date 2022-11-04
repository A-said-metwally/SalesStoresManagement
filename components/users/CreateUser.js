import { PlusCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import { useState } from 'react'
import UserPath from './UserPathes'

function CreateUser({close}) {
    const [Paths , setPaths] = useState([])
    
  return (
    <div className='  mb-12 border-blue-400 bg-gray-200 border-1 rounded-md p-3 shadow-md'>
        <form action="post" >
            <div className='flex items-center space-x-2  '>
                <div className='flex flex-col'>
                    <label htmlFor="userCode">Code</label>
                    <input 
                        type="number" placeholder='code' name='userCode'
                        className='p-2 border-gray-400 border-1 rounded-md focus:outline-none text-blue-500 text-lg font-semibold w-20'
                        />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="userName">User Name</label>
                    <input 
                        type="text" placeholder='user name' name='userName'
                        className='p-2 border-gray-400 border-1 rounded-md focus:outline-none text-blue-500 text-lg font-semibold'
                        />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" placeholder='password' name='password'
                        className='p-2 border-gray-400 border-1 rounded-md focus:outline-none text-blue-500 text-lg font-semibold'
                        />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="department">Department</label>
                    <input 
                        type="text" placeholder='Department' name='department'
                        className='p-2 border-gray-400 border-1 rounded-md focus:outline-none text-blue-500 text-lg font-semibold'
                        />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" placeholder='title' name='title'
                        className='p-2 border-gray-400 border-1 rounded-md focus:outline-none text-blue-500 text-lg font-semibold'
                        />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="pages">Pages</label>
                    <select name='pages' placeholder='pages'  
                        //   onChange={(e)=>sellectCustomer(e)}
                        className='p-2 border-gray-400 border-1 rounded-md focus:outline-none text-blue-500 text-lg font-semibold'
                        >
                            <option value=""></option>
                            <option value="sales">sales</option>
                            <option value="purchase">purchase</option>
                            {/* {customers.map((customer, index)=>{
                                return (
                                    <option key={index} value={customer.name}>{customer.name}</option>
                                )
                            })} */}
                    </select>
                </div>
            </div>

            <div className='flex justify-between items-center mt-2'>
                {/* user permissions */}
                <div className=''>
                    <div>
                        {Paths.length > 0 && <span className='text-lg text-green-500 font-semibold'>Selected Pages</span>}
                    </div>
                    <div className='flex items-center space-x-2'>
                        {Paths.map((path, index)=>{
                            return(
                                <UserPath key={index} path={path}/>                
                            )
                        })}
                    </div>
                </div>
                <div className='flex items-center space-x-1 mr-10'>
                    <button className='text-gray-100 bg-blue-500 rounded-md p-2 shadow-md cursor-point mr-10er '>Submit</button>
                    <button className='text-gray-100 bg-red-500 rounded-md p-2 shadow-md cursor-pointer '
                        onClick={()=>close()}
                    >Cancle</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CreateUser