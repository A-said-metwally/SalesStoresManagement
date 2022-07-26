import { data } from 'autoprefixer';
import React,{useState} from 'react'
import Content from '../components/Content';
import Home from '../components/Home';
import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';
import Head from '../head'



function Main() {

  return (
    <div className='flex flex-col h-screen'>
      <Head title="Main Page" />
      <MainHeader />  
      <Content/>
    </div>
  )
}

export default Main