import { SiteContextProvider } from '../context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }

  return (
    <SiteContextProvider>
      <Component {...pageProps} />
    </SiteContextProvider>
  )
  
}


export default MyApp
