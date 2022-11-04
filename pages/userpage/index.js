import Head from 'next/head'
import React,{useEffect, useState} from 'react'
import secureLocalStorage from 'react-secure-storage'

function UserPage() {
const [userData, setUserData] = useState()
const [PassForm, setPassForm] = useState(false)
const [UserImg, setUserImg] = useState(null)
const [ImageUpload, setImageUpload] = useState(null)
const [ShowSaveBtn, setShowSaveBtn] = useState(false)



function SellectImg(){
    let imgSelector = document.getElementById("imgPicker")
    imgSelector.click()
}

const addImage = (e)=>{
    const reader = new FileReader
    if(e.target.files[0]){
        setImageUpload(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
        setUserImg(readerEvent.target.result)
        setShowSaveBtn(true)
    }
}

const getData = ()=>{
    let decryptedData = secureLocalStorage.getItem('sessionInfo') // get decrypted data from secure local storage
    let userInfo = decryptedData.userInfo[0].data
    setUserData(userInfo),
    setUserImg(userInfo.Image)
}

useEffect(()=>{
    getData()
},[])

  return (
    <div className='flex justify-center w-full h-full '>
        <div className=' bg-gray-200 p-4 rounded-md shadow-md w-full h-full overflow-scroll'>
            <div className='flex flex-col justify-center items-start '>
                <div className='flex space-x-8 justify-start'>
                    
                    <div className='flex flex-col'>
                        <img className='w-52 h-52 rounded-full shadow-md' src={UserImg}/>
                        {ShowSaveBtn && 
                            <button className=' text-blue-700 font-semibold
                            cursor-pointer mt-2 p-2 rounded-md hover:bg-gray-200'>
                                Save Changes 
                            </button>
                       }
                    </div>

                    <div className=' '>
                        <h1 className=' p-2 text-gray-500 text-xl font-bold'>{userData?.Name}</h1>
                        <p className=' p-2 text-blue-600 text-md font-bold'>{userData?.Title}</p>
                        <p className=' p-2 text-gray-500 text-md font-bold'>{userData?.Dep} </p>
                        <p className=' p-2 text-gray-500 text-md font-bold '>Permissions : 
                            <span className=" text-blue-500">( {userData?.Pages.map(page => page.pageName).join(" - ")} )</span> 
                        </p>
                        <div className='flex justify-start mt-6 space-x-8 '>
                                <button 
                                    className=' bg-gray-100 rounded-md shadow-md 
                                    hover:bg-blue-600 hover:text-white cursor-pointer
                                    p-2 text-lg'
                                    onClick={()=>{setPassForm(false) , SellectImg()}}
                                    >
                                Change User Image
                                </button>
                                <button 
                                    className=' bg-gray-100 rounded-md shadow-md 
                                hover:bg-blue-600 hover:text-white cursor-pointer
                                p-2 text-lg'
                                onClick={()=>setPassForm(true)}
                                >
                                Change Pass   
                                </button>
                        
                        </div>
                        <input 
                            onChange={addImage}
                            type="file" 
                            className=' hidden' 
                            placeholder='Select Image' 
                            id="imgPicker" 
                        />
                        
                        
                        <form 
                            className= {`${PassForm ? "flex transition-all duration-100"
                                : " hidden"} 
                                border-gray-400 shadow-md rounded-md p-2 flex-col w-96 mt-8 border-2`}>
                            <lable className=" text-md text-blue-600 font-semibold">Current Pass</lable>
                            <input 
                                className='p-1 mt-1 mb-2  text-lg
                                focus:outline-none focus:border-green-300 
                                border-4 rounded-md ' 
                                type="password" 
                                placeholder='Enter Current Password' />
                            
                            <lable className=" text-md text-blue-600 font-semibold">New Pass</lable>
                            <input 
                                className='p-1 mt-1 mb-2  text-lg
                                focus:outline-none focus:border-green-300 
                                border-4 rounded-md ' 
                                type="password" 
                                placeholder='Enter New Pass' />
                            
                            <lable className=" text-md text-blue-600 font-semibold">Retype Pass</lable>
                            <input 
                                className='p-1 mt-1 mb-2  text-lg
                                focus:outline-none focus:border-green-300 
                                border-4 rounded-md ' 
                                type="password" 
                                placeholder='Retype New Pass' />
                               
                            <button 
                                className=' text-lg text-blue-600 rounded-lg mt-2
                                font-bold p-2 cursor-pointer hover:bg-blue-500 hover:text-white '
                                >
                                Save Changes 
                            </button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default UserPage

