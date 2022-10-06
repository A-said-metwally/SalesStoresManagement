import React from 'react'

function SalesTable({data, removeItem}) {
  return (
    <div>
        <table className='sales-table w-full border'>
            <thead className='w-full bg-blue-400 text-white text-center'>
            <tr className='flex justify-between  p-2 text-lg font-semibold '>
                <td className='flex-1'>Id</td>
                <td className='flex-1'>Item Name</td>
                <td className='flex-1'>Unit</td>
                <td className='flex-1'>Price</td>
                <td className='flex-1'>Qty</td>
                <td className='flex-1'>Total</td>
                <td className='flex-1'>Del</td>
            </tr>
            </thead>
            <tbody >
              {data.map((d, index)=>(
                <tr key={index} className='flex justify-between  p-2 text-md font-semibold text-center hover:bg-gray-200 '>
                  <td className='flex-1'>{index + 1}</td>
                  <td className='flex-1'>{d.itemName}</td>
                  <td className='flex-1'>{"Each"}</td>
                  <td className='flex-1'>{d.qty}</td>
                  <td className='flex-1'>{d.salesPrice}</td>
                  <td className='flex-1'>{d.qty * d.salesPrice} $</td>
                  <td className='flex-1 '>
                    <button className='w-full flex items-center justify-center text-red-500 text-2xl rounded-lg
                     hover:scale-125  hover:font-bold'
                     onClick={()=>removeItem(d.id)}
                     >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>                
                </tr>
              ))}
            </tbody>
        </table>

    </div>
  )
}

export default SalesTable