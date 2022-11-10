import { useRouter } from 'next/router'
import React from 'react'
import { verifyPermission } from '../../utils/verifyLogin'

function Edit() {
const router = useRouter()
verifyPermission(router)

  return (
    <div>Edit</div>
  )
}

export default Edit