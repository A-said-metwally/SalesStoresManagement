import React,{useState, useEffect} from 'react'
import Loading from '../../components/Loading'
import SalesFormControls from '../../components/sales/SalesFormControls'
import SalesFormHead from '../../components/sales/SalesFormHead'
import SalesInputData from '../../components/sales/SalesInputData'
import SalesTable from '../../components/sales/SalesTable'

import {collection, getDocs, addDoc, Firebase} from 'firebase/firestore'
import {db} from '../../firebase/init-firebase'

import { fetchItems, fetchCustomers, fetchBills } from '../../firebase/actions'
import { verifyPermission } from '../../utils/verifyLogin'
import { useRouter } from 'next/router'



function Index() {
  const router = useRouter()
  verifyPermission(router)

  const [loading, setLoading] = useState(true)
  
// master data states
  const [Items, setItems] = useState([])
  const [Customers, setCustomers] = useState([])
  const [Bills, setBills] = useState([])

  let No = Bills.length + 1;

// functions to change state
    const loadItems = (e)=>setItems(e)
    const loadCustomers = (e)=>setCustomers(e)
    const loadBills = (e)=>setBills(e)


  // fetch main data
  const fetchMasterData = async ()=>{
    await fetchItems(loadItems)
    await fetchCustomers(loadCustomers)
    await fetchBills(loadBills).then(()=>setLoading(false))
}

const [NewBill, setNewBill] = useState({
    billno:0,
    date:'',
    type:"sales",
    supplier:"",
    customer:"",
    username:"admin",
    details:[],
    payment:0
})

let tot = 0;
const [Total, setTotal] = useState(0)
    
const sellectDate = (e)=>{setNewBill({...NewBill, date:e.target.value , billno:No })}
const sellectCustomer = (e)=>{setNewBill({...NewBill, customer:e.target.value, billno:No })}
const sellectItem = (e)=>{setNewBill({...NewBill, details:[...NewBill.details, e]})}
const setPayment = (e)=>{setNewBill({...NewBill, payment:e })}


const removeItem = (e)=>{
    setNewBill({...NewBill, details:[...NewBill.details.filter((item)=>item.id !== e)]})
}

const submitBill = ()=>{
    const {date, customer, details } = {...NewBill}
    if(date && customer && details.length > 0){
        setLoading(true)
        // push new item
        const billRef = collection(db, "bills")
        addDoc(billRef, NewBill)
        .then(()=>{
            setNewBill({
                billno:No,
                date:'',
                type:"sales",
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
              <i className="fas fa-cart-plus"></i>
            </div>
            <h1 className='text-blue-500 '>Sales Form ...</h1>
          </div>
          <div className='flex flex-col p-2 border rounded-md w-full shadow-md h-full overflow-hidden'>
            
            <SalesFormHead 
                customers={Customers} 
                billno={No} 
                billInfo={NewBill}
                sellectDate={sellectDate}
                sellectCustomer={sellectCustomer}
                submitBill={submitBill}
            /><hr/>
          
            <SalesInputData 
                items={Items}
                sellectItem={sellectItem}
            /><hr/>

            <div className='flex justify-between flex-1 h-full  overflow-hidden bg-gray-50 '>
                <div className=' w-9/12 h-full overflow-scroll rounded-md border-1 border-gray-400'>
                  <SalesTable data={NewBill.details} removeItem={removeItem}/>
                </div>

                <div className='w-3/12 pl-3 pt-1 pr-3 ml-3 h-full rounded-md border-1 border-orange-500 shadow-md'>
                  <SalesFormControls total={Total} payment={NewBill.payment} setpayment={setPayment}   />
                </div>
            </div>
          </div>
      </div>
  )
}

export default Index