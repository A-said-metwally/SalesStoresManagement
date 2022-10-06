import React,{useState, useEffect} from 'react'

function Main({}) {

  const [Loading, setLoading] = useState(false)

  useEffect(()=>{},[])

        return(
          <div className='flex flex-1 overflow-hidden '>
            <img src="/1.webp" 
              className=" pr-2  w-full h-full rounded-md" 
              alt="background img" />
         </div>
        )
}

export default Main