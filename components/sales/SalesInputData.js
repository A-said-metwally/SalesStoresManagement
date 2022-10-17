import React,{useState} from 'react'

function SalesInputData({items, sellectItem}) {

const [newItem, setNewItem] = useState({itemName:"", qty:0, salesPrice:0, purchasePrice:0}) 

const addItem = (e)=>{
    e.preventDefault()
    const {itemName, qty, salesPrice} = {...newItem}
    if(itemName && qty && salesPrice ){

        sellectItem({id:Math.random(), ...newItem})
        setNewItem({itemName:"", qty:0, salesPrice:0, purchasePrice:0})
    }else{
        alert("pls complete data")
    }
}
return (
    <div className='flex justify-between items-center'>
        <form className='sales_form mb-2 flex space-x-6 items-end' action="">
            <div className='flex flex-col '>
                <label htmlFor="item" className='w-28 text-lg text-gray-500 ' >Select Item</label>
                <select name='item' placeholder='item' value={newItem.itemName} 
                        onChange={(e)=>{
                            const i = e.target.value
                            setNewItem({
                            ...newItem,
                            itemName:i,
                            salesPrice:parseInt(items.find((item)=> item.ItemName === i).SalesPrice),
                            purchasePrice:parseInt(items.find((item)=> item.ItemName === i).PurchasePrice)
                        })}}
                        className="sales-select2  w-80 border-1 border-blue-400 focus:outline-none p-2 text-center
                        shadow-md  rounded-md text-lg"
                    >
                        <option value=""></option>
                        {items.map((item, index)=>{
                            return (
                                <option key={index} value={item.ItemName}>{item.ItemName}</option>
                            )
                        })}
                </select>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="qty" className='w-28 text-lg text-gray-500 ' >QTY.</label>
                <input type="number" name='qty' placeholder='qty' value={-newItem.qty} 
                    onChange={(e)=>setNewItem({...newItem, qty:-parseInt(e.target.value)})}
                    className="flex-1 border-1 border-blue-400 focus:outline-none p-2  text-center
                    shadow-md  rounded-md text-lg"
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="price" className='w-28 text-lg text-gray-500 ' >Price.</label>
                <input type="number" name='price' placeholder='price' value={newItem.salesPrice} 
                    onChange={(e)=>setNewItem({...newItem, salesPrice:parseInt(e.target.value)})}
                    className="flex-1 border-1 border-blue-400 focus:outline-none p-2  text-center
                    shadow-md  rounded-md text-lg"
                />
            </div>
            <button 
                className='items-btn flex items-center pl-5 pr-5 pt-3 pb-3  bg-blue-400  rounded-md
                text-yellow-200 font-bold text-lg shadow-md cursor-pointer hover:bg-green-600
                hover:border hover:border-green-600'
                onClick={addItem}
                >Add</button>
        </form>
    </div>
    
  )
}

export default SalesInputData