import React,{useState} from 'react'
import Link from 'next/link'

function MenuItems({icon, item, list}) {
    const [Show, setShow] = useState(false)
    
  return (
    <div className=' group'>
        <li 
            className='flex space-x-3 items-center p-2 text-lg font-semibold text-gray-600 hover:bg-gray-200
                hover:text-blue-700 hover:rounded-lg hover:border cursor-pointer '
            onClick={()=>{setShow(!Show)}}
        >
            <span className=' text-blue-500'>{icon}</span>
            <span className='hidden lg:flex md:flex'>{item}</span>
        </li>
        <div className= {`${!Show? 'hidden' : 'bloc'} `}>
            <ul>
                {list?.map((l, index)=>{
                    return (
                        <li className='p-1 text-lg hover:font-bold hover:bg-gray-200
                             rounded-md cursor-pointer' key={index} >
                            <Link href={l.link}>
                                <a
                                    className={`${l.color? l.color :'text-blue-500'} ${l.color? 'pl-3': null} `}
                                >{l.description}</a>
                            </Link>
                        </li>            
                    )
                })}
            </ul>
            <hr />
        </div>
    </div>
  )
}

export default MenuItems