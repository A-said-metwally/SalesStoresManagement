import React, { useEffect, useState } from 'react'

function BillData({data}) {

  const [Date , setDate]=useState("")
  const [Customer , setCustomer]=useState("")
  const [Id , setId]=useState("")

useEffect(() => {
  setDate(()=>data.length > 0 ? data[0].date : '')
  setCustomer(()=>data.length > 0 ? data[0].customer : '')
  setId(()=>data.length > 0 ? data[0].id : '')

}, [data])

  return (
    <div className='flex space-x-2 mt-5'>
        <input 
            type="date" 
            value={Date}
            onChange={()=>setDate(e.target.value)}
            placeholder=''
            className='p-2 bg- bg-gray-500 text-gray-100 text-lg text-center outline-none border w-1/6 shadow-md'
            />
        <input 
            type="text"
            value={Customer} 
            onChange={()=>setCustomer(e.target.value)}
            placeholder='Enter Customer Name'
            className='p-2 bg-gray-500 text-gray-100 text-lg text-center outline-none border w-1/6 shadow-md'
            />
        <input 
            type="number" 
            value={Id} 
            onChange={()=>setId(e.target.value)}
            placeholder='Bill No.'
            className=' disabled p-2 bg-gray-500 text-gray-100 text-lg text-center outline-none border w-1/6 shadow-md'
            />

    </div>
  )
}

export default BillData

