import React,{useState, useEffect} from 'react'
import {doc, getDocs, collection, onSnapshot, deleteDoc, addDoc} from 'firebase/firestore'
import {db} from '../firebase/init-firebase' 
import { async } from '@firebase/util'

function firebase() {
// console.log(customers)
    function handleSubmit(e){
        e.preventDefault()
        const dataRef = collection(db , 'suppliers')
        // for(let i = 0; i < suppliers.length; i++){
        //     addDoc(dataRef, suppliers[i])
        //     .then(res =>{
        //         // console.log("done", res)
        //         alert('done')
        //     }).catch(error => console.log(error.message))
        // }
    }


  return (
    <div className=' w-full flex justify-center items-center space-x-4'>
        <h1 className=''>fire base</h1>
        <hr />
        <button 
            onClick={handleSubmit} 
            className=' flex items-center p-3 bg-blue-400 text-lg '>upload</button>
    </div>
  )
}

export default firebase