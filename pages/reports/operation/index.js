import React,{ useState, useEffect} from 'react'
import Loading from '../../../components/Loading'
import Details from '../../../components/operation/Details'
import OperationRepControls from '../../../components/operation/OperationRepControls'
import { verifyPermission } from '../../../utils/verifyLogin'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../../firebase/init-firebase'

function Operation() {
  // verifyPermission()
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
      .filter((bill)=>bill.type === 'sales'))})
    .then((res)=>{setLoading(false)})
    .catch(error => console.log(error.message))
}

function prepareData(){
  for(let i = 0; i < Bills.length; i++){
    const {details} = {...Bills[i]}
    
    for(let i = 0; i < details.length; i++ ){
      NewArray.push({...details[i]})
    }
  }
}

let salesTotal = 0;
let salesCost = 0;

function calculate(){
  for(let i = 0; i < MyArray.length; i++){
    salesTotal = salesTotal + MyArray[i].qty * MyArray[i].salesPrice
    salesCost = salesCost + MyArray[i].qty * MyArray[i].purchasePrice
  }
}

calculate()

useEffect(()=>{
  prepareData()
  setMyArray(NewArray)
},[Bills])



return (
    <div className='page-container bg-blue-800 text-white p-2 '>
       
        {loading && <Loading/>}
        <div className='flex justify-start items-start space-x-2 '>
            <div className='flex items-center pt-2 justify-center text-3xl text-white '>
            <i className="fas fa-balance-scale-right"></i>
            </div>
            <h1 className='text-white '>Operation Report ...</h1>
        </div>
        <div className='p-2 border rounded-md shadow-md h-full overflow-auto'>
          <OperationRepControls updatecriteria={updateCriteria} refresh={getData} /><hr />
          <Details salesTotal={salesTotal} salesCost={salesCost} expenses={0}/>
        </div>
    </div>
  )
}

export default Operation