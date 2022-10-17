import React from 'react'

function SalesRepDetails({MyArray, type}) {
  return (
    <div>
          <table className='sales-table w-full border'>
            <thead className='sticky top-0 left-0 w-full bg-blue-400 text-white text-center shadow-md'>
            <tr className='flex justify-between  p-2 text-lg font-semibold '>
                <td className='flex-1'>Bill No</td>
                <td className='flex-1'>Date</td>
                <td className='flex-1'>Customer</td>
                <td className='flex-1'>Item Name</td>
                <td className='flex-1'>Price</td>
                <td className='flex-1'>Qty</td>
                <td className='flex-1'>Total</td>
            </tr>
            </thead>
            <tbody >
              {MyArray.map((b, index)=>(
                <tr key={index} className='flex justify-between border-b p-2 text-md font-semibold text-center hover:bg-gray-200 '>
                  <td className='flex-1'>{b.billno}</td>
                  <td className='flex-1'>{b.date}</td>
                  <td className='flex-1'>{b.customer}</td>
                  <td className='flex-1'>{b.itemName}</td>                
                  <td className='flex-1'>{b.salesPrice}</td>
                  <td className='flex-1'>
                    {type === "sales" && -b.qty}
                    {type === "purchase" && b.qty}
                  </td>
                  <td className='flex-1'>
                    {type === "sales" && -b.qty * b.salesPrice} 
                    {type === "purchase" && b.qty * b.salesPrice} 
                  $</td>
                </tr>
              ))}
            </tbody>
        </table>

    </div>
  )
}

export default SalesRepDetails