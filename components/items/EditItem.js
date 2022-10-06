import React,{useState} from 'react'
import Confirm from '../Confirmation'

function EditItem({item}) {
    const [ShowEdit, setShowEdit] = useState(false)

    const [ShowConfirm, setShowConfirm] = useState(false) 

    const ViewConfirm = ()=>{
        setShowConfirm(true)
    }

    const CancelEdit = ()=>{
        setShowConfirm(false)
    }

  return (
    <div className=' '>

        {!ShowEdit && 
        <div className='flex justify-between items-center space-y-4 text-lg border-b-2'>
            <tr className='flex-1'>{item.ItemCode}</tr>
            <tr className='flex-1'>{item.ItemName}</tr>
            <tr className='flex-1'>{item.Unit}</tr>
            <tr className='flex-1'>{item.PurchasePrice}</tr>
            <tr className='flex-1'>{item.SalesPrice}</tr>
            <tr className='flex-1'>
                <i 
                    className="far fa-edit text-blue-500 text-2xl hover:scale-125
                    hover:text-red-500 cursor-pointer"
                    onClick={()=>setShowEdit(!ShowEdit)}
                ></i>                
            </tr>                
        </div>
        }
        {ShowEdit &&
            <div className='flex justify-between items-center space-x-2 pt-2 text-lg border-b-2'>
                <tr className='flex-1'>
                    <input type="text" value={item.ItemCode}
                    className='w-full outline-none border-1 text-center border-blue-400 p-1 rounded-md shadow-md' disabled="true"  />
                </tr>
                <tr className='flex-1'>
                <input type="text" value={item.ItemName}
                    className='w-full outline-none border-1 text-center border-blue-400 p-1 rounded-md shadow-md'   />
                </tr>
                <tr className='flex-1'>
                    <input type="text" value={item.Unit}
                    className='w-full outline-none border-1 text-center border-blue-400 p-1 rounded-md shadow-md' />
                </tr>
                <tr className='flex-1'>
                    <input type="text" value={item.PurchasePrice}
                    className='w-full outline-none border-1 text-center border-blue-400 p-1 rounded-md shadow-md' />
                </tr>                
                <tr className='flex-1'>
                    <input type="text" value={item.SalesPrice}
                    className='w-full outline-none border-1 text-center border-blue-400 p-1 rounded-md shadow-md' />
                </tr>
                <tr className='flex-1'>
                    <i 
                        className="far fa-save text-green-500 text-2xl hover:scale-125
                        hover:text-red-500 cursor-pointer"
                        onClick={()=>{ViewConfirm()}}
                    ></i>                
                </tr>                
            </div>
        }
        {/* confirmation box  */}
        {ShowConfirm && <Confirm   cancel={CancelEdit}/>}
        
    </div>
)
}

export default EditItem