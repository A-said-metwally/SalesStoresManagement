import React from 'react'
import {Items} from '../data/items'

function ItemsScreen({add}) {
  return (
    <div className=" col-span-7 flex flex-wrap max-h-screen overflow-scroll  ">
        {Items.map((item , id)=>{
          return (
            <div key={id} className=' w-1/4 pl-4 pr-4 pb-4'>
              <button
                className=' bg-gray-400 p-8 pb-14 pt-14  w-full text-white
                 text-2xl text-center rounded-md shadow-md
                 hover:bg-blue-700 hover:scale-105 cursor-pointer  '
                onClick={()=>add(item.name)}
              >
                {item.name}
              </button>
            </div>
          )
        })}
    </div>
  )
}

export default ItemsScreen