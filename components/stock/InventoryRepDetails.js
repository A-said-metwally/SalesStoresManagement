import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function InventoryRepDetails({stock}) {
//   const [Stock , setStock] = useState([])

//   useEffect(()=>{
//     setStock(stock)
//   })
// console.log(Stock)
  return (
    <div>
        <table className='sales-table w-full border'>
            <thead className='sticky top-0 left-0 w-full bg-blue-400 text-white text-center shadow-md'>
            <tr className='flex justify-between  p-2 text-lg font-semibold '>
                <td className='flex-1'>Code</td>
                <td className='flex-1'>Item Name</td>
                <td className='flex-1'>Unit</td>
                <td className='flex-1'>Available Stock</td>
                <td className='flex-1'>Price</td>
                <td className='flex-1'>Amount</td>
                <td className='flex-1'>Status</td>
            </tr>
            </thead>
            <tbody >
              {stock.map((s, index)=>(
                <tr key={index}  className='flex justify-between border-b p-2 text-md font-semibold text-center hover:bg-gray-200 '>
                  <td className='flex-1'>{s.ItemCode}</td>
                  <td className='flex-1'>{s.ItemName}</td>
                  <td className='flex-1'>{s.Unit}</td>
                  <td className='flex-1'>{s.Qty}</td>                
                  <td className='flex-1'>{s.PurchasePrice}</td>
                  <td className='flex-1'>{s.PurchasePrice * s.Qty}</td>
                  <td className='flex-1'>
                   {s.Qty <= s.MinStock && <i className="fas fa-arrow-down text-red-600"></i>}
                   {s.Qty >= s.MaxStock && <i className="fas fa-arrow-up text-green-600"></i>}
                   {s.Qty >= s.MinStock && s.Qty <= s.MaxStock && <i className="fas fa-arrow-right text-blue-600"></i>}
                  </td>
                </tr>
             ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default InventoryRepDetails