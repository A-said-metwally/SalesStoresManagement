import React from 'react'
import { useState } from 'react'
import Loading from '../../../components/Loading'
import Details from '../../../components/operation/Details'
import OperationRepControls from '../../../components/operation/OperationRepControls'

function Operation() {
  const [loading, setLoading] = useState(false)
  const [Criteria, setCriteria] = useState({})

  const updateCriteria = (e)=>{
    setCriteria(e)
  }

return (
    <div className='page-container bg-blue-800 text-white p-2 '>
       
        {loading && <Loading/>}
        <div className='flex justify-start items-start space-x-2 '>
            <div className='flex items-center pt-2 justify-center text-3xl text-white '>
            <i className="fas fa-balance-scale-right"></i>
            </div>
            <h1 className='text-white '>Operation Report ...</h1>
        </div>
        <div className='p-2 border rounded-md shadow-md h-full overflow-auto'>
          <OperationRepControls updatecriteria={updateCriteria} /><hr />
          <Details/>
        </div>
    </div>
  )
}

export default Operation