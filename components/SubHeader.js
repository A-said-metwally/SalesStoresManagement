import React,{useState , useEffect} from 'react'
import Folder from './Folder'
import Home from './Home'
import SendRecieve from './SendRecieve'

function SubHeader({ActiveMenu}) {
    const [Menu , setMenu] = useState("")
    const [View, setView] = useState(true)

    const hideNavBar = ()=>{
        setView(!View)
    }

    useEffect(()=>{
        setMenu(ActiveMenu)
        setView(true)
    },[ActiveMenu])


    return (
        <div className= 'relative' >

            <div className={`${!View ? 'hidden transition duration-300': null}`}>
                {Menu === "home" && <Home/>}
                {Menu === "sendrecieve" && <SendRecieve/>}
                {Menu === "folder" && <Folder/>}
                
            </div>

            <button className=' absolute bottom-0 right-3 z-10 p-1 hover:bg-blue-200' onClick={hideNavBar}>
                <i className={`fas ${View ? "fa-chevron-up" : "fa-chevron-down"} text-md text-gray-600`}></i>
            </button>
        </div>
  )
}

export default SubHeader