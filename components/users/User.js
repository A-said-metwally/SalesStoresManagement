import React from 'react'



function User({id, Code , Name, Pass, Dep, Title, Image , Pages}) {
  return (
    <div className=' bg-gray-100  p-1 mb-4 border-b-2 border-b-orange-400  rounded-md shadow-md'>
        <div className='flex items-center'>
            <img src={Image} alt="Name" 
                className=' h-16 w-16 rounded-full 
                shadow-md mr-6  ' 
            />
            <div className='w-full'>
                <div className=' flex w-full justify-between items-center mt-2'>
                    <div className=' flexl w-full  p-1'>
                        <h1 className=' text-sm text-gray-500 font-bold capitalize '>
                            <span className='text-blue-500'>Code : </span>{Code}
                        </h1>
                    </div>
                    <div className=' flexl w-full  p-1'>
                        <h1 className=' text-sm text-gray-500 font-bold capitalize '>
                            <span className='text-blue-500'>Name : </span>{Name}
                        </h1>
                    </div>
                    <div className=' flexl w-full  p-1'>
                        <h1 className=' text-sm text-gray-500 font-bold capitalize '>
                            <span className='text-blue-500'>Pass : </span>{Pass}
                        </h1>
                    </div>
                    <div className=' flexl w-full  p-1'>
                        <h1 className=' text-sm text-gray-500 font-bold capitalize '>
                            <span className='text-blue-500'>Dep : </span>{Dep}
                        </h1>
                    </div>
                    <div className=' flex w-full  p-1'>
                        <h1 className=' text-sm text-gray-500 font-bold capitalize '>
                            <span className='text-blue-500'>Tilte : </span>{Title}
                        </h1>
                    </div>

                    <div className=' flex w-full  p-1 space-x-3'>
                        <button 
                        onClick={()=>console.log(id)}
                        className=' bg-blue-600 text-white p-2 cursor-pointer
                        text-sm rounded-md border-1 hover:border-orange-500'
                        >Edit Pages</button>
                        <button 
                        className=' bg-red-600 text-white p-2 cursor-pointer
                        text-sm rounded-md border-1 hover:border-orange-500'
                        >Del</button>
                    </div>
                </div>
                <div className=''>
                    <div className=' flex w-full'>
                        <h1 className=' text-sm text-gray-500 font-bold capitalize '>
                            <span className='text-blue-500'>Pages : </span>
                                {Pages.map(page => { return page.pageName}).join("  -  ")}
                        </h1>
                    </div>        
                </div>       
            </div>
        </div> 
    </div>
  )
}

export default User