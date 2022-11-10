import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import Header from '../components/expensive/Header'
import Loading from '../components/Loading'
import { verifyPermission } from '../utils/verifyLogin'

function Expensive() {
const router = useRouter()
verifyPermission(router)

 const [loading, setLoading] = useState(false)

  return (
    <div className='page-container pt-2'>

        {loading && <Loading/>}

        <div className=''>
            <Header/>
            <hr/>
        </div>
    </div>
  )
}

export default Expensive