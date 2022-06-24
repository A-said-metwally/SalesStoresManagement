import React , {useState} from 'react'
import {Items} from '../data/items'

function MainList() {
  const [Categories , setCategories] = useState(()=>{
    let allCat = Items.map(i => {
      return i.category
      })
    return [...new Set(allCat)]
    }
  )

  return (
    <div className=" flex flex-col col-span-1 ">
      {Categories.map((cat , id) =>{
        return (
            <button 
            key={id}
            className=" bg-purple-500 p-2 mb-3 rounded-md text-white 
            text-lg shadow-lg cursor-pointer hover:scale-x-150 border hover:border-red-500"
            >
              {cat}
            </button>
        )
      })}
    </div>
  )
}

export default MainList