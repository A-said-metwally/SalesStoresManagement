import React from 'react'

function Details({salesTotal, salesCost, expenses}) {
  return (
    <div className='flex flex-col space-y-6 items-center justify-center pt-6'>
        <div className='flex w-1/2 items-center border-white p-3 text-3xl space-x-5 font-bold border-3 rounded-md'>
            <span className='w-1/3'>Total Sales</span>
            <p>{-salesTotal} $</p>
        </div>
        <div className='flex w-1/2 items-center border-white p-3 text-3xl space-x-5 font-bold border-3 rounded-md'>
            <span className='w-1/3'>Sales Cost</span>
            <p>{-salesCost} $</p>
        </div>
        <div className='flex w-1/2 items-center border-white p-3 text-3xl space-x-5 font-bold border-3 rounded-md'>
            <span className='w-1/3'>Expenses</span>
            <p>{expenses} $</p>
        </div>
        <div className='flex w-1/2 items-center border-white p-3 text-3xl space-x-5 font-bold border-3 rounded-md'>
            <span className='w-1/3'>Profit</span>
            <p>{((salesTotal - salesCost) * -1) - expenses} $</p>
        </div>
    </div>
  )
}

export default Details