import React from 'react'

function Details() {
  return (
    <div className='flex flex-col space-y-6 items-center justify-center pt-6'>
        <div className='flex w-1/2 items-center border-white p-3 text-3xl space-x-5 font-bold border-3 rounded-md'>
            <span className='w-1/3'>Total Sales</span>
            <p>5000 $</p>
        </div>
        <div className='flex w-1/2 items-center border-white p-3 text-3xl space-x-5 font-bold border-3 rounded-md'>
            <span className='w-1/3'>Sales Cost</span>
            <p>3000 $</p>
        </div>
        <div className='flex w-1/2 items-center border-white p-3 text-3xl space-x-5 font-bold border-3 rounded-md'>
            <span className='w-1/3'>Expenses</span>
            <p>500 $</p>
        </div>
        <div className='flex w-1/2 items-center border-white p-3 text-3xl space-x-5 font-bold border-3 rounded-md'>
            <span className='w-1/3'>Profit</span>
            <p>1500 $</p>
        </div>
    </div>
  )
}

export default Details