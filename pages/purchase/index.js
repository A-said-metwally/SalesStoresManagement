import React,{useState, useEffect} from 'react'
import Loading from '../../components/Loading'
import PurchaseFormControls from '../../components/purchase/PurchaseFormControls'
import PurchaseFormHead from '../../components/purchase/PurchaseFormHead'
import PurchaseInputData from '../../components/purchase/PurchaseInputData'
import PurchaseTable from '../../components/purchase/PurchaseTable'
import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import {db} from '../../firebase/init-firebase'

import { fetchItems, fetchBills, fetchSuppliers } from '../../firebase/actions'



function Index() {
  const [loading, setLoading] = useState(false)
  
// master data states
  const [Items, setItems] = useState([])
  const [Suppliers, setSuppliers] = useState([])
  const [Bills, setBills] = useState([])

  let No = Bills.length + 1;

// functions to change state
    const loadItems = (e)=>setItems(e)
    const loadSuppliers = (e)=>setSuppliers(e)
    const loadBills = (e)=>setBills(e)


  // fetch main data
  const fetchMasterData = async ()=>{
    await fetchItems(loadItems)
    await fetchSuppliers(loadSuppliers)
    await fetchBills(loadBills).then(()=>setLoading(false))
}

const [NewBill, setNewBill] = useState({
    billno:0,
    date:'',
    type:"purchase",
    supplier:"",
    customer:"",
    username:"admin",
    details:[],
    payment:0
})

let tot = 0;
const [Total, setTotal] = useState(0)
    
const sellectDate = (e)=>{setNewBill({...NewBill, date:e.target.value , billno:No })}
const sellectSupplier = (e)=>{setNewBill({...NewBill, supplier:e.target.value, billno:No })}
const sellectItem = (e)=>{setNewBill({...NewBill, details:[...NewBill.details, e]})}
const setPayment = (e)=>{setNewBill({...NewBill, payment:e })}


const removeItem = (e)=>{
    setNewBill({...NewBill, details:[...NewBill.details.filter((item)=>item.id !== e)]})
}

const submitBill = ()=>{
    const {date, supplier, details } = {...NewBill}
    if(date && supplier && details.length > 0){
        setLoading(true)
        // push new item
        const billRef = collection(db, "bills")
        addDoc(billRef, NewBill)
        .then(()=>{
            setNewBill({
                billno:No,
                date:'',
                type:"purchase",
                supplier:"",
                customer:"",
                username:"admin",
                details:[],
                payment:0
            })
        })
        .then(()=>fetchMasterData())
        .then(()=>setLoading(false))
    }else{
        alert('Pls Complete Data')
    }
}

useEffect(()=>{
    setTotal(()=>{
        const data = NewBill.details;
        for(let i = 0; i < data.length; i++){
            tot = tot + data[i].qty * data[i].salesPrice
        }
        return tot
        })

})
useEffect(()=>{fetchMasterData()},[])



  return (
      <div className='page-container '>

        {loading && <Loading/>}
          <div className='flex justify-start items-start space-x-2 '>
            <div className='flex items-center pt-2 justify-center text-3xl text-orange-400 '>
              <i className="fas fa-shopping-bag"></i>
            </div>
            <h1 className='text-blue-500 '>Purchase Form ...</h1>
          </div>
          <div className='flex flex-col p-2 border rounded-md w-full shadow-md h-full overflow-hidden'>
            
            <PurchaseFormHead
                suppliers={Suppliers} 
                billno={No} 
                billInfo={NewBill}
                sellectDate={sellectDate}
                sellectSupplier={sellectSupplier}
                submitBill={submitBill}
            /><hr/>
          
            <PurchaseInputData 
                items={Items}
                sellectItem={sellectItem}
            /><hr/>

            <div className='flex justify-between flex-1 h-full  overflow-hidden bg-gray-50 '>
                <div className=' w-9/12 h-full overflow-scroll rounded-md border-1 border-gray-400'>
                  <PurchaseTable data={NewBill.details} removeItem={removeItem}/>
                </div>

                <div className='w-3/12 pl-3 pt-1 pr-3 ml-3 h-full rounded-md border-1 border-orange-500 shadow-md'>
                  <PurchaseFormControls total={Total} payment={NewBill.payment} setpayment={setPayment}   />
                </div>
            </div>
          </div>
      </div>
  )
}

export default Index