import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Loading from '../../../components/Loading'
import SalesRepControls from '../../../components/sales/SalesRepControls'
import SalesRepDetails from '../../../components/sales/SalesRepDetails'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../../firebase/init-firebase'
import {handleExportExcel} from '../../../firebase/actions'
import { verifyPermission } from '../../../utils/verifyLogin'


function SalesReport() {
  const router = useRouter()
  verifyPermission(router)
  
  const type = router.query.id

    const [loading, setLoading] = useState(false)
    const [Criteria, setCriteria] = useState({})
    const [Bills, setBills] = useState([])

    let NewArray = []
    const [MyArray, setMyArray] = useState([])

    const updateCriteria = (e)=>{
      setCriteria(e)
    }

    const getData = async ()=>{
      if(!Criteria.start || !Criteria.end){
        alert("Pls Enter Period Date")
        return
      }
      setLoading(true)
      let billsRef = collection(db , 'bills')
      let q = query(billsRef, where("date", ">=" , Criteria.start), where("date", "<=", Criteria.end))

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
        billsInfo.map((info)=>(info.data))
        .filter((bill)=>bill.type === type))})
      .then((res)=>{setLoading(false)})
      .catch(error => console.log(error.message))
  }


function prepareData(){
  for(let i = 0; i < Bills.length; i++){
    const {date, billno, customer, username, details} = {...Bills[i]}
    
    for(let i = 0; i < details.length; i++ ){
      NewArray.push({date, billno, customer, username, ...details[i]})
    }
  }
}

let tot = 0;

function setTotal(){
  for(let i = 0; i < MyArray.length; i++){
    tot = tot + MyArray[i].qty * MyArray[i].salesPrice
  }
  return tot
}

setTotal()

// export to excel
function exportExcel(){
  handleExportExcel(MyArray, type, Criteria.start, Criteria.end)
} 


useEffect(()=>{
  prepareData()
  setMyArray(NewArray)
},[Bills])

useEffect(()=>{setMyArray([])},[type])


  return (
    <div className='page-container  '>

      {loading && <Loading/>}
      <div className='flex justify-start items-start space-x-2 '>
            <div className='flex items-center pt-2 justify-center text-3xl text-green-500 '>
            <i className="fas fa-book-open"></i>
            </div>
            <h1 className='text-green-500 capitalize '>{type} Report ...</h1>
      </div>

      
      <div className=' flex flex-col  p-2 border rounded-md w-full shadow-md h-full overflow-hidden'>
        <SalesRepControls updatecriteria={updateCriteria} refresh={getData} exportexcel={exportExcel}/><hr />

        <div className='relative  w-full h-full overflow-scroll '>
          <SalesRepDetails MyArray={MyArray} type={type}/>
        </div>

        <div className=' text-2xl text-blue-600 font-bold p-2 bg-gray-300 w-full shadow-md border-1 border-blue-400 rounded-md '>
          Total : <span className='text-orange-500 '>
            {type === "sales" && -tot}
            {type === "purchase" && tot}  
            $</span> 
        </div>
      </div>
    </div>
  )
}

export default SalesReport