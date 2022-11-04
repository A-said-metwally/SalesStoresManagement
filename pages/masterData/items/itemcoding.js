import React,{useState, useEffect} from 'react'
import {getDocs, addDoc, collection} from 'firebase/firestore'
import {db} from '../../../firebase/init-firebase'
import Loading from '../../../components/Loading'
import { fetchItems } from '../../../firebase/actions'
import { verifyPermission } from '../../../utils/verifyLogin'

function ItemCoding() {
// verifyPermission()
const [loading, setLoading] = useState(true)

const [Items, setItems] = useState(null)
const ItemCode = Items?.length + 1


const [NewItem, setNewItem] = useState({
    ItemCode,
    ItemName:"",
    Unit:"",
    PurchasePrice:"",
    SalesPrice:"",
    MinStock:"",
    MaxStock:""
})

const addNew = ()=>{
    const {ItemName, Unit, PurchasePrice, SalesPrice} = {...NewItem}
    if(ItemCode && ItemName && Unit && PurchasePrice && SalesPrice){
        setLoading(true)
        // push new item
        const dataRef = collection(db , 'items')
        addDoc(dataRef, NewItem)
        .then(()=>{ setLoading(false)} )
        .then(()=>{
            setNewItem({
                ItemCode,
                ItemName:"",
                Unit:"",
                PurchasePrice:"",
                SalesPrice:"",
                MinStock:"",
                MaxStock:""
                })
                ItemCode += 1
        })
        .catch(error => console.log(error.message))

        }else{
            alert("Please Complete Data")
        }
    }

const loadItems = (e)=>setItems(e)

const fetchMasterData = async ()=>{
    await fetchItems(loadItems)
    .then(()=>{setLoading(false)})
    }


useEffect(()=>{
    fetchMasterData()
},[])


  return (
    <div className='page-container'>
       
        {loading && <Loading/>}
        <div className='flex justify-start items-start space-x-2 '>
            <div className='flex items-center pt-2 justify-center text-3xl text-green-500 '>
            <i className="fas fa-database"></i>
            </div>
            <h1 className='text-green-500 '>Item Coding ...</h1>
        </div>
        <div className='p-2 border rounded-md shadow-md h-full overflow-auto'>

            <div className=' w-1/2 mr-auto p-4 '>
                    <div className='flex justify-start items-center space-x-1 w-full '>
                        <label htmlFor="itemCode" className='w-36 text-lg text-gray-700 ' >Item Code</label>
                        <input type="number" name='itemCode' placeholder='itemCode' value={ItemCode} disabled="true"
                            className="flex-1 bg-gray-100 focus:outline-none p-2 text-center
                            shadow-md border-1 border-blue-500 rounded-md text-lg"
                        />
                    </div>
                    <div className='flex justify-start items-center space-x-1 w-full mt-4'>
                        <label htmlFor="itemName" className='w-36 text-lg text-gray-700 '  >Item Name</label>
                        <input type="text" name='itemName' placeholder='item Name' value={NewItem.ItemName} 
                            onChange={(e)=>setNewItem({...NewItem, ItemName:e.target.value })}
                            className="flex-1 bg-gray-100 focus:outline-none p-2 text-center
                            shadow-md border-1 border-blue-500 rounded-md text-lg"
                        />
                    </div>
                    <div className='flex justify-start items-center space-x-1 w-full mt-4'>
                        <label htmlFor="unit" className='w-36 text-lg text-gray-700 ' >Unit</label>
                        <select name='unit' placeholder='unit' value={NewItem.Unit} 
                            onChange={(e)=>setNewItem({...NewItem, Unit:e.target.value })}
                            className="unit-select flex-1 bg-gray-100 focus:outline-none p-2 text-center
                            shadow-md border-1 border-blue-500 rounded-md text-lg"
                            
                        >
                            <option value=""></option>
                            <option value="Each">Each</option>
                            <option value="KG">KG</option>
                            <option value="Carton">Carton</option>
                            <option value="Pack">Pack</option>
                            <option value="Meter">Meter</option>
                    </select>
                    </div>
                    <div className='flex justify-start items-center space-x-1 w-full mt-4'>
                        <label htmlFor="PurchasingPricing" className='w-36 text-lg text-gray-700 ' >Purchasing Price</label>
                        <input type="number" name='PurchasingPricing' placeholder='PurchasingPricing' value={NewItem.PurchasePrice} 
                            onChange={(e)=>setNewItem({...NewItem, PurchasePrice:e.target.value })}
                            className="flex-1 bg-gray-100 focus:outline-none p-2 text-center
                            shadow-md border-1 border-blue-500 rounded-md text-lg"
                        />
                    </div>
                    <div className='flex justify-start items-center space-x-1 w-full mt-4'>
                        <label htmlFor="SalesPricing" className='w-36 text-lg text-gray-700 ' >Sales Price</label>
                        <input type="number" name='SalesPricing' placeholder='SalesPricing' value={NewItem.SalesPrice} 
                            onChange={(e)=>setNewItem({...NewItem, SalesPrice:e.target.value })}
                            className="flex-1 bg-gray-100 focus:outline-none p-2 text-center
                            shadow-md border-1 border-blue-500 rounded-md text-lg"
                        />
                    </div>
                    <div className='flex justify-start items-center space-x-1 w-full mt-4'>
                        <label htmlFor="Min Stock" className='w-36 text-lg text-gray-700 ' >Min Stock</label>
                        <input type="number" name='Min Stock' placeholder='Min Stock' value={NewItem.MinStock} 
                            onChange={(e)=>setNewItem({...NewItem, MinStock:e.target.value })}
                            className="flex-1 bg-gray-100 focus:outline-none p-2 text-center
                            shadow-md border-1 border-blue-500 rounded-md text-lg"
                        />
                    </div>
                    <div className='flex justify-start items-center space-x-1 w-full mt-4'>
                        <label htmlFor="Max Stock" className='w-36 text-lg text-gray-700 ' >Max Stock</label>
                        <input type="number" name='Max Stock' placeholder='Max Stock' value={NewItem.MaxStock} 
                            onChange={(e)=>setNewItem({...NewItem, MaxStock:e.target.value })}
                            className="flex-1 bg-gray-100 focus:outline-none p-2 text-center
                            shadow-md border-1 border-blue-500 rounded-md text-lg"
                        />
                    </div>

                    <div className='flex justify-center items-center w-full mt-4 '>
                        <button 
                            className=' flex items-center justify-center pl-6 pr-6 pt-3 pb-3 bg-blue-600 hover:bg-green-500 text-white font-bold rounded-md shadow-md cursor-pointer hover:scale-105'
                            onClick={addNew}
                            >{'Save & New'}
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCoding