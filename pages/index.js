import React, {useEffect, useState} from 'react'
import Loading from '../components/Loading'
import {useRouter} from 'next/router'
import { fetchUserData } from '../firebase/actions'
import { encrypt, today } from '../utils/verifyLogin'



export default function Login() {
  const [UserCode , setUserCode] = useState("")
  const [UserPass , setUserPass] = useState('')
  const [DataValidation, setDataValidation] = useState(true)
  const [loading , setLoading] = useState(false)
  

  const router = useRouter()

  function viewErrorMsg(){
    setDataValidation(false)
    setTimeout(()=>{setDataValidation(true)},2000)
  }
  let userInfo ;

  const getUserInfo = (e)=>{userInfo = e }

  const login = async (e)=>{
    e.preventDefault()
    if (!UserCode || !UserPass){return  viewErrorMsg() } // check if user code & pass has been entering
     setLoading(true)
     await fetchUserData(UserCode, getUserInfo) // fetch user data and validate password
     .then(()=>{verify() })
     .catch(error => console.log(error.message)) 
    }

    function verify(){
      if(UserPass === userInfo[0].data.Pass){  
        encrypt(userInfo, today) // encrypt user information,set session date & save it in session storage
        router.push(`/main`)
      }else{ setLoading(false), setUserCode(""), setUserPass("") ,viewErrorMsg() }
    }
    

    return (
      <div className=' h-full w-full text-gray-100 bg-gradient-to-br from-blue-700 via-blue-400 to-blue-200 '>
      
      {loading && <Loading/>}
      
      {!loading && 
      <div className='w-96 md:max-w-md flex flex-col items-start ml-32 mt-14'>
      <h1 className=' text-yellow-400 text-2xl'>Login Page</h1>
      
      <form method='post' className=' flex flex-col items-start w-full pl-8 '>
        <div className=' flex w-full  space-x-2 flex-row
        items-center border-b-2 border-gray-200 '>
        <input 
          type="text" required id="user" placeholder="Enter Code"
          className='p-2 placeholder:text-gray-300 w-full mt-1 text-left bg-inherit focus:outline-none text-lg'
            value={UserCode}
            onChange={(e)=>setUserCode(e.target.value)}
          />
        </div>
        <hr/>
        <div className=' flex w-full space-x-2 flex-row
        items-center border-b-2 border-gray-100 '>
        <input 
          type="password" required id="pass" placeholder="Enter Password"
          className='p-1 w-full mt-1 text-left  placeholder:text-gray-300 bg-inherit focus:outline-none text-lg'
            value={UserPass}
            onChange={(e)=>setUserPass(e.target.value)}
          />
        </div>
        {!DataValidation && <p className=' text-yellow-200 text-xl font-semibold transition-colors duration-100 '>Wrong Data</p>}
          <button
          onClick={login}
          className=" w-full mt-8 bg-gradient-to-tr
            from-blue-800 via-blue-200 to-orange-400 p-2 rounded-full items-center text-gray-500 
          font-bold shadow-xl mb-11 transition-all hover:text-gray-600 hover:border"
          >
           Login
          </button>
      </form>
    </div>
    }
    </div>
)
}

Login.getLayout = function getLayout(page){
    return (
        page
    )
}



