import React,{useState, useEffect} from 'react'

function PurchaseFormControls({total, payment, setpayment}) {

  return (
    <div className=' h-full pb-3'>
      <form className="flex flex-col space-y-4 h-full ">
          <div className='flex  flex-col h-1/3'>
              <label htmlFor="total" className=' w-28 text-xl font-semibold text-gray-700 ' >Total</label>
              <input type="number" name='total' placeholder='total' value={total} 
                  className="flex-1 border-2 border-blue-400 focus:outline-none p-2   text-center
                  shadow-md  rounded-md text-2xl"
              />
          </div>
          <div className='flex flex-col h-1/3'>
              <label htmlFor="payment" className='w-28 text-xl font-semibold text-gray-700 ' >Payment</label>
              <input type="number" name='payment' placeholder='payment' value={payment} 
                  className="flex-1 border-2 border-blue-400 focus:outline-none p-2   text-center
                  shadow-md  rounded-md text-2xl"
                  onChange={(e)=>{ setpayment(parseInt(e.target.value))}}
              />
          </div>
          <div className='flex flex-col h-1/3'>
              <label htmlFor="remained" className='w-28 text-xl font-semibold text-gray-700 ' >Remaind</label>
              <input type="number" name='remained' placeholder='remained' value={total - payment} 
                  className="flex-1 border-2 border-blue-400 focus:outline-none p-2   text-center
                  shadow-md  rounded-md text-2xl"
              />
          </div>
      </form>
    </div>
  )
}

export default PurchaseFormControls