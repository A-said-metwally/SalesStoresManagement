import React,{useState, useEffect} from 'react'

function SalesRepControls({updatecriteria, refresh}) {

  const [Criteria, setCriteria] = useState({start:"", end:""})

  useEffect(()=>{
    updatecriteria(Criteria)
  })

  return (
    <div className='flex w-full justify-between items-start p-2'>
        <div className='flex  space-x-3'>
            <div className='flex justify-start items-center space-x-1 w-full '>
                <label htmlFor="from" className='w-28 text-lg text-gray-700 ' >From Date</label>
                <input type="date" name='from' placeholder='from' value={Criteria.start} 
                    className="flex-1 bg-gray-100 focus:outline-none p-2 text-center
                    shadow-md border-1 border-blue-500 rounded-md text-lg"
                    onChange={(e)=>setCriteria({...Criteria, start:e.target.value})}
                />
            </div>
            <div className='flex justify-start items-center space-x-1 w-full '>
                <label htmlFor="to" className='w-28 text-lg text-gray-700 ' >To Date</label>
                <input type="date" name='to' placeholder='to' value={Criteria.end} 
                    className="flex-1 bg-gray-100 focus:outline-none p-2 text-center
                    shadow-md border-1 border-blue-500 rounded-md text-lg"
                    onChange={(e)=>setCriteria({...Criteria, end:e.target.value})}
                />
            </div>
        </div>
        <div className='flex w-44 justify-center space-x-3 items-center mr-10 '>
                <button className='flex items-center justify-center h-4 w-4 p-4 
                  text-2xl  text-gray-400 hover:text-blue-600 hover:rotate-180 ease-in-out duration-500'
                  onClick={()=>refresh()}
                  >
                    <i className="fas fa-sync-alt"></i>
                </button>
                <button className='flex items-center justify-center h-4 w-4 p-4 
                  text-2xl  text-gray-400 hover:text-green-600 '>
                   <i className="fas fa-file-export"></i>
                </button>
        </div>

    </div>
  )
}

export default SalesRepControls