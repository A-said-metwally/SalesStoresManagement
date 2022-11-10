import { useRouter } from 'next/router'
import React from 'react'
import { verifyPermission } from '../../../utils/verifyLogin'

function AddUser() {
const router = useRouter()
verifyPermission(router)

  return (
    <div>AddUser</div>
  )
}

export default AddUser