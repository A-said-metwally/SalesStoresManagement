import React,{useEffect, useState} from 'react'
import InventoryRepControls from '../../../components/stock/InventoryRepControls'
import InventoryRepDetails from '../../../components/stock/InventoryRepDetails'
import Loading from '../../../components/Loading'

function Index() {
    const [loading, setLoading] = useState(false)

  return (
    <div className='page-container '>

     {loading && <Loading/>}
     <div className='flex justify-start items-start space-x-2 '>
            <div className='flex items-center pt-2 justify-center text-3xl text-green-500 '>
            <i className="fas fa-warehouse"></i>
            </div>
            <h1 className='text-green-500 '>Inventory Report ...</h1>
      </div>
      <div className='flex flex-col p-2 border rounded-md w-full shadow-md h-full overflow-hidden'>
        <InventoryRepControls/> <hr />
        
        <div className='relative  w-full h-full overflow-scroll '>
          <InventoryRepDetails/>
        </div>

        <div className='flex items-center space-x-24 text-2xl text-blue-600 font-bold p-2 bg-gray-300 w-full shadow-md border-1 border-blue-400 rounded-md '>
         <div>
            Items Count : <span className='text-orange-500 '>1000 Item</span> 
         </div>
         <div>
            Stock Amount : <span className='text-orange-500 '>52000 $</span> 
         </div>
        </div>

      </div>
    </div>
  )
}

export default Index