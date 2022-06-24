import React, { useEffect, useState } from 'react'
import {
  ArrowCircleDownIcon ,
   PhoneIcon , 
   CalendarIcon
  } from '@heroicons/react/outline'


function Print() {

  const [Data, setData] = useState({})
  const [BillTotal, setBillTotal] = useState(0)


useEffect(() => {
  let data = sessionStorage.getItem("billData")
   data = JSON.parse(data)
   setData(data.billdata)
   setBillTotal(data.total)

  // window.print()
},[])
console.log(Data, BillTotal)

  return (
    <div className=' flex items-start justify-center mt-5'>
      <div className='lg:w-1/3 w-full p-4 flex flex-col 
      items-center border border-gray-500 rounded-md'>
        {/* header */}
        <header className=' flex flex-col items-center mb-5 w-full'>
          <img className=' w-20 h-20 shadow-lg rounded-full mb-3' src='/logo2.jpg' alt="logo" />
          <h1 className=' text-xl text-blue-500'>Company Brand Name</h1>
          <h2 className='text-lg'>Adress Egy - 201 St</h2>
          <h2 className='flex text-lg'> <PhoneIcon className=' h-6 w-6 mr-3 text-gray-700'/>00201210610717</h2>
        </header>

        {/*bill details */}
        <div className='w-full flex justify-center'>
         <h2 className='flex text-lg'> <CalendarIcon className=' h-6 w-6 mr-3 text-gray-700'/>23-06-2022</h2>
        </div>

        {/* bill items */}
        <div className=' w-full'>
          <table className=' w-full border  '>
            <thead>
              <tr className=' text-center border border-blue-400 bg-gray-500 text-gray-100 '>
                <th className='p-2'>#</th>
                <th className='text-left '>Item</th>
                <th>Unit</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Data.transaction?.map((T , id)=>{
                return (
                    <tr key={id} className=' text-center  border border-red-800 text-lg '>
                                        <td className=' pl-2 pr-2 pt-3 pb-3'>{id + 1}</td>
                          <td className='text-left '>{T.name}</td>
                          <td>Each</td>
                          <td>{T.qty}</td>
                          <td>{T.price}</td>
                          <td>{T.price * T.qty }</td>
                    </tr>
                )
              })}
            </tbody>
         </table>
       </div>

        {/*footer  */}
        <footer className=' mt-5'>
              <h1 className=' text-xl text-gray-600 font-bold'>Total : {BillTotal}$</h1>
              <h1 className=' text-lg text-gray-600'>Thank You ..</h1>
        </footer>
      </div>
    </div>
  )
}

export default Print