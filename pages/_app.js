import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Footer from '../components/mainapp/Footer'
import Header from '../components/mainapp/Header'
import Menu from '../components/mainapp/Menu'
import '../styles/globals.css'
import Head from '../utils/head'
import { verifySession } from '../utils/verifyLogin'


function MyApp({ Component, pageProps }) {
  

  if (Component.getLayout){
    return Component.getLayout(
      <div className='flex flex-col h-screen overflow-hidden'>
        <Head title="Sales_Store_App"/>
        <main className='flex justify-between  h-screen w-screen overflow-hidden'>
          <Component {...pageProps} />    
        </main>
      </div>
    )
  }

  verifySession()
  

  return (
      <div className='flex flex-col h-screen overflow-hidden'>
        <Head title="Sales_Store_App"/>
        <Header/>
        <main className='flex justify-between relative pt-2 h-screen w-screen overflow-hidden'>
          <Menu/>
          <Component {...pageProps} ver={verifySession()}  />    
        </main>
        {/* <Footer/> */}
      </div>
  )
  
}


export default MyApp
