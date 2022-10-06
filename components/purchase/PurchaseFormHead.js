import React from 'react'

function PurchaseFormHead({suppliers, billno, billInfo, sellectDate, sellectSupplier, submitBill}) {
 
  return (
    <div>
           <div className='flex justify-between   '>
              {/*left side  */}
              <div className='flex w-9/12 space-x-5  '>
                <div className='flex w-1/2 flex-col space-y-5'>
                  <div className='flex justify-between items-start  w-full '>
                      <label htmlFor="billNo" className='w-28 text-lg text-gray-500 ' >Bill No.</label>
                      <input type="number" name='billNo' placeholder='billNo' value={billno} disabled="true"
                          className="flex-1 border-1 border-blue-400 focus:outline-none p-1 text-center
                          shadow-md  rounded-md text-lg"
                      />
                    </div>
                    <div className='flex justify-between items-center  w-full '>
                      <label htmlFor="Date" className='w-28 text-lg text-gray-500 ' >Date</label>
                      <input type="date" name='Date' placeholder='Date' value={billInfo.date} 
                          className="flex-1 border-blue-400 focus:outline-none p-1 text-center
                          shadow-md border-1 rounded-md text-lg"
                          onChange={(e)=>sellectDate(e)}
                      />
                    </div>
                </div>
                <div className='flex w-1/2 flex-col space-y-5'>

                    <div className='flex justify-between items-center  w-full  '>
                      <label htmlFor="supplier" className='w-28 text-lg text-gray-500 ' >Supplier</label>
                      <select name='supplier' placeholder='supplier' value={billInfo.supplier} 
                              onChange={(e)=>sellectSupplier(e)}
                              className=" sales-select flex-1 border-1 border-blue-400 focus:outline-none p-2 text-center
                              shadow-md  rounded-md text-lg"
                          >
                              <option value=""></option>
                              {suppliers.map((supplier, index)=>{
                                  return (
                                      <option key={index} value={supplier.name}>{supplier.name}</option>
                                  )
                              })}
                      </select>
                    </div>

                    <div className='flex justify-between items-center  w-full '>
                      <label htmlFor="UserName" className='w-28 text-lg text-gray-500 ' >User Name</label>
                      <input type="text" name='UserName' placeholder='UserName' value={"Admin"} 
                          className="flex-1 border-blue-400 focus:outline-none p-1 text-center
                          shadow-md border-1 rounded-md text-lg"
                      />
                    </div>
                </div>  
              </div>
              {/* right side */}
              <div className='flex w-44 justify-center space-x-3 items-center mr-10 '>
                <button className='flex items-center justify-center h-4 w-4 p-4 rounded-full border-1 border-gray-400
                  shadow-md bg-green-500 text-slate-50 hover:bg-green-600 '
                  onClick={()=>submitBill()}
                  >
                    <i className="fas fa-plus"></i>
                </button>
                <button className='flex items-center justify-center h-4 w-4 p-4 rounded-full border-1 border-gray-400
                  shadow-md bg-blue-400 text-slate-100 text-lg hover:bg-orange-400 '>
                    <i className="fas fa-print"></i>
                </button>
              </div>
           </div>
    </div>
  )
}

export default PurchaseFormHead