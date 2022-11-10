import React, { useEffect, useState } from 'react'
import User from '../components/users/User'
import {PlusCircleIcon} from '@heroicons/react/outline'
import { fetchAllUsersData } from '../firebase/actions'
import CreateUser from '../components/users/CreateUser'
import { useRouter } from 'next/router'
import { verifyPermission } from '../utils/verifyLogin'


function UsersPage() {
const router = useRouter()
verifyPermission(router)


const [Users, setUsers] = useState([])
const [ShowCreationForm, setShowCreationForm] = useState(false)
  
const fetchUsers = (e)=>setUsers(e)

const CloseCreationForm = ()=>setShowCreationForm(false)

  useEffect(() => {
    fetchAllUsersData(fetchUsers)
  },[])
    

  return (
    <div className='w-full h-full'>
        <div className='h-full overflow-scroll'>
            <div className=' flex justify-between items-center p-2 '>
                <h1 className=' text-green-600 text-3xl font-bold'>Users Information</h1>
                <PlusCircleIcon className='mr-10 h-10 w-10 text-green-600 cursor-pointer hover:scale-105'
                 onClick={()=>setShowCreationForm(true)}/>
            </div>
                {ShowCreationForm && <CreateUser close={CloseCreationForm}/>}
            <div className=''>
              {Users.map((user, index) =>{
                return(
                  <User key={user.id} id={user.id} {...user.data}/>
                )
              } )}
            </div>
        </div>
    </div>
  )
}

export default UsersPage

