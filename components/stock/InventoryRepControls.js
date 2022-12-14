import React,{ useState,useEffect } from 'react'

function InventoryRepControls({updateCriteria, refresh, exportExcel}) {

  const [Criteria, setCriteria] = useState()

  useEffect(()=>{
    updateCriteria(Criteria)
  })

  return (
    <div className='flex justify-between items-start'>
          <div className='flex justify-start items-center space-x-1 w-full '>
              <label htmlFor="todate" className='w-28 text-lg text-gray-700 ' >To Date</label>
              <input type="date" name='todate' placeholder='todate' value={Criteria} 
                  className=" bg-gray-100 focus:outline-none p-2 text-center
                  shadow-md border-1 border-blue-500 rounded-md text-lg"
                  onChange={(e)=>setCriteria(e.target.value)}
              />
          </div>
          <div className='flex w-44 justify-center space-x-3 items-center mr-10 '>
                <button className='flex items-center justify-center h-4 w-4 p-4 
                  text-2xl  text-gray-400 hover:text-blue-600 hover:rotate-180 ease-in-out duration-400'
                  onClick={()=>refresh()}
                  >
                    <i className="fas fa-sync-alt"></i>
                </button>
                <button className='flex items-center justify-center h-4 w-4 p-4 
                  text-2xl  text-gray-400 hover:text-green-600 '
                  onClick={()=>exportExcel()}
                  >
                   <i className="fas fa-file-export"></i>
                </button>
                <button className='flex items-center justify-center h-4 w-4 p-4 
                  text-2xl  text-gray-400 hover:text-green-600 '>
                   <i className="fas fa-print"></i>
                </button>
        </div>


    </div>
  )
}

export default InventoryRepControls