import React from 'react'


function InventoryRepDetails() {
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
              {/* {MyArray.map((b, index)=>( */}
                <tr  className='flex justify-between border-b p-2 text-md font-semibold text-center hover:bg-gray-200 '>
                  <td className='flex-1'>{'1'}</td>
                  <td className='flex-1'>{'Sugar'}</td>
                  <td className='flex-1'>{'each'}</td>
                  <td className='flex-1'>{'21'}</td>                
                  <td className='flex-1'>{'10'}</td>
                  <td className='flex-1'>{'210'}</td>
                  <td className='flex-1'><i className="fas fa-chevron-up text-green-600"></i></td>
                </tr>
              {/* // ))} */}
            </tbody>
        </table>
      
    </div>
  )
}

export default InventoryRepDetails