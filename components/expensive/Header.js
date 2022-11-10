import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center w-full'>
        <div className='flex justify-between items-center '>
            <label htmlFor="Date" className='w-20 text-lg text-gray-500 ' >Date</label>
            <input type="date" name='Date' placeholder='Date' 
                className="flex-1 border-blue-400 focus:outline-none p-1 text-center
                shadow-md border-1 rounded-md text-lg"
                // onChange={(e)=>sellectDate(e)}
            />
        </div>
        {/* right side */}
        <div className='flex w-44 justify-center space-x-3 items-center mr-10 '>
            <button className='flex items-center justify-center h-4 w-4 p-4 rounded-full border-1 border-gray-400
                shadow-md bg-green-500 text-slate-50 hover:bg-green-600 '
                // onClick={()=>submitBill()}
                >
                <i className="fas fa-plus"></i>
            </button>
            <button className='flex items-center justify-center h-4 w-4 p-4 rounded-full border-1 border-gray-400
                shadow-md bg-blue-400 text-slate-100 text-lg hover:bg-orange-400 '>
                <i className="fas fa-print"></i>
            </button>
        </div>


    </div>
  )
}

export default Header