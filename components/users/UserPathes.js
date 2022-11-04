import React from 'react'

function UserPath({path}) {
  return (
        <div className='flex items-center pl-1 pr-1 space-x-2 border-green-400 border-1 rounded-md'>
            <span className='text-lg leading-none '>{path}</span>
            <button><i className="fas fa-trash text-red-500 leading-none cursor-pointer hover:scale-110"></i></button>
        </div>
  )
}

export default UserPath