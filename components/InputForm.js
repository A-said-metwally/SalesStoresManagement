import React, { useEffect, useState } from 'react'
import {SalesData} from '../data/Sales'

function InputForm({data}) {
  
  // const [Sales , setSales] = useState(data[0])

  useEffect(()=>{

  },[])
  
  return (
    <div className=" col-span-4  pr-3 max-h-screen overflow-scroll ">

    <table className=' w-full border  '>
      <thead>
        <tr className=' text-center border border-blue-400 bg-gray-500 text-gray-100 '>
          <th className='p-2'>#</th>
          <th className='text-left '>Item</th>
          <th>Unit</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data[0]?.transaction.map((T , id)=>{
          if(data[0]?.transaction.length === 1 ) return
          return (
              <tr key={id} className=' text-center  border border-red-800 text-lg '>
                                  <td className=' pl-2 pr-2 pt-3 pb-3'>{id + 1}</td>
                    <td className='text-left '>{T.name}</td>
                    <td>Each</td>
                    <td>{T.qty}</td>
                    <td>{T.price}</td>
                    <td>{T.price * T.qty }</td>
                    <td>
                        <button
                        className=' bg-red-400 text-white p-2 
                        rounded-md cursor-pointer hover:bg-red-600 hover:scale-105'
                        >
                        Del
                        </button>
                    </td>
              </tr>
          )
        })}
      </tbody>
    </table>
    <div className=' flex items-center justify-center text-orange-500
      text-2xl font-bold p-9
    '>{data[0]?.transaction.length === 1 && <h1>Pls Add Items</h1>}</div>
    </div>
  )
}

export default InputForm