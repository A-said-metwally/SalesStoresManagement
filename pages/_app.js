import Footer from '../components/mainapp/Footer'
import Header from '../components/mainapp/Header'
import Menu from '../components/mainapp/Menu'
import '../styles/globals.css'
import Head from '../utils/head'


function MyApp({ Component, pageProps }) {
  
  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }

  return (
      <div className='flex flex-col h-screen overflow-hidden'>
        <Head title="Sales_Store_App"/>
        <Header/>
        <main className='flex justify-between relative pt-2 h-screen w-screen overflow-hidden'>
          <Menu/>
          <Component {...pageProps} />    
        </main>
        {/* <Footer/> */}
      </div>
  )
  
}


export default MyApp
