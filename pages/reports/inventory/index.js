import React,{useEffect, useState} from 'react'
import InventoryRepControls from '../../../components/stock/InventoryRepControls'
import InventoryRepDetails from '../../../components/stock/InventoryRepDetails'
import Loading from '../../../components/Loading'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../../firebase/init-firebase'
import { fetchItems, handleExportExcel } from '../../../firebase/actions'


function Index() {
    const [loading, setLoading] = useState(false)
    const [Criteria, setCriteria] = useState()
    const [Items, setItems] = useState(null)
    const [Bills, setBills] = useState([])
    const [Inventory, setInventory]= useState([])

    const updateCriteria = (e)=>{setCriteria(e)}

    const loadItems = (e)=>setItems(e)

    const fetchMasterData = async ()=>{
        if(!Criteria) {  //  check that inventory date is selected
          alert ('Pls Enter Inventory Date')
          return
        }
        setLoading(true) // turn on loading 
        await fetchItems(loadItems) // fetch items
        .then(()=>fetchData())  // fetch bills to selected inventory date
        .then((res)=>{setLoading(false)})
      }

      const fetchData = async ()=>{
        let billsRef = collection(db , 'bills')
        let q = query(billsRef, where("date", "<=" , Criteria))
        await getDocs(q)
        .then(res => {
            let billsData = res.docs.map(doc =>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            ))
            return billsData
        })
        .then(billsInfo =>{setBills(
          billsInfo.map((info)=>(info.data)))})
        .catch(error => console.log(error.message))
      }

      let details = [];
      let stock = [];
      let amount = 0;


      function prepareData(){
        for(let i = 0; i< Bills.length; i++){
          Bills[i].details.map((detail)=>details.push(
            {
              itemName:detail.itemName,
              qty:detail.qty
            }
          ))
        }
      }


      const calcInventory = ()=>{
          let items = [... new Set(details.map((d)=>d.itemName)) ]
          for(let i = 0; i< items.length; i++){
            let tot = [];
            let currentItem = details.filter((d)=>d.itemName === items[i])
            let qtys = currentItem.map((item)=>item.qty)
            tot.push([...qtys].join('+'))
            let itemData = Items.filter((item)=>item.ItemName === items[i])
            stock.push(
              {
                "ItemCode":itemData[0].ItemCode,
                'ItemName':items[i],
                "Qty":eval(...tot),
                "Unit":itemData[0].Unit,
                "PurchasePrice":itemData[0].PurchasePrice,
                "MinStock":itemData[0].MinStock,
                "MaxStock":itemData[0].MaxStock
              })
            setInventory(stock)
          }
      }
      
      const calcAmount = ()=>{
        for(let i = 0; i<Inventory.length; i++){
          amount += Inventory[i].Qty * Inventory[i].PurchasePrice
        }
      }
      calcAmount()

      // export to excel
      function exportExcel(){
        handleExportExcel(Inventory, "Inventory Report", Criteria)
      } 


      useEffect(()=>{
        prepareData()
        calcInventory()
      },[Bills , Items])
      

          
  return (
    <div className='page-container '>

     {loading && <Loading/>}
     <div className='flex justify-start items-start space-x-2 '>
            <div className='flex items-center pt-2 justify-center text-3xl text-green-500 '>
            <i className="fas fa-warehouse"></i>
            </div>
            <h1 className='text-green-500 '>Inventory Report ...</h1>
      </div>
      <div className='flex flex-col p-2 border rounded-md w-full shadow-md h-full overflow-hidden'>
        <InventoryRepControls updateCriteria={updateCriteria} refresh={fetchMasterData} exportExcel={exportExcel} /> <hr />
        
        <div className='relative  w-full h-full overflow-scroll '>
          <InventoryRepDetails stock={Inventory}/>
        </div>

        <div className='flex items-center space-x-24 text-2xl text-blue-600 font-bold p-2 bg-gray-300 w-full shadow-md border-1 border-blue-400 rounded-md '>
         <div>
            Items Count : <span className='text-orange-500 '>{Inventory.length} Item</span> 
         </div>
         <div>
            Stock Amount : <span className='text-orange-500 '>{amount} $</span> 
         </div>
        </div>

      </div>
    </div>
  )
}

export default Index