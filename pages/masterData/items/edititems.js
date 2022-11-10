import React,{ useState, useEffect } from 'react'
import Loading from '../../../components/Loading'
import EditItem from '../../../components/items/EditItem'
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../../../firebase/init-firebase'
import { verifyPermission } from '../../../utils/verifyLogin'
import { useRouter } from 'next/router'

function EditItems() {
  const router = useRouter()
  verifyPermission(router)

    const [loading, setLoading] = useState(false)
    const [Items, setItems] = useState([])

    const getData = async ()=>{
      const itemsRef = collection(db, 'items')
  
      await getDocs(itemsRef)
      .then(res => {
          if(res === undefined) return
          let itemsData = res.docs.map(doc =>(
              {
                  id:doc.id,
                  data:doc.data()
              }
          ))
          return itemsData
      })
      .then(itemsData =>{
          setItems(itemsData.map((items)=> (items.data)))})
      .then((res)=>{setLoading(false)})
      }
    
      useEffect(()=>{
        getData()
      })


  return (
    <div className='page-container '>
    
        {loading && <Loading/>}

      <h1 className='text-orange-500 '>Edit Items ...</h1>
      <div className='flex flex-col  p-2 border rounded-md w-full shadow-md h-full overflow-hidden'>
        <div className='h-full w-full overflow-scroll'>
          <table className='w-full'>
            <thead>
              <tr className='flex justify-between items-center pt-2 pb-2 text-lg text-gray-500
               font-bold bg-gray-200 '>
                <td className='flex-1'>Item Code</td>
                <td className='flex-1'>Item Name</td>
                <td className='flex-1'>Unit</td>
                <td className='flex-1'>Purchase Price</td>
                <td className='flex-1'>Sales Price</td>
                <td className='flex-1'>Action</td>
              </tr>
            </thead>
            <tbody >
              {/* replace items with Items */}
              {Items.map((item, index)=>(
                <EditItem item={item} key={index}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EditItems