import Link from 'next/link'
import React,{useState} from 'react'
import NavBar from '../components/navbar'
import Head from '../head'



function Main({}) {

  return (
    <div className='flex flex-col h-screen'>
        <Head title="Ahmed Said" />
        <NavBar/>
    </div>
  )
}

export default Main