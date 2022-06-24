import { useEffect,useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Input from '../components/InputForm'
import InputForm from '../components/InputForm'
import Items from '../components/Items'
import MainList from '../components/MainList'
import BillData from '../components/BillData'
import {SalesData} from '../data/Sales'

export default function Home() {

  const [Allbill , setAllbill] = useState(SalesData)
  
  const [BillNo ,setBillNo] = useState(Allbill.length + 1)

  const [Currentbill , setCurrentbill] = useState([])
  
  const [Total , setTotal] = useState(0)

 
  const Prev = ()=>{
    if(BillNo > 1){
      setBillNo(BillNo - 1)
      // setBillNo(Currentbill[0].id - 1)
    }
  }

  const Next = ()=>{
    if(BillNo < Allbill.length){
      setBillNo(Currentbill[0].id  + 1)
    }
  }
  
const New = ()=>{
  setCurrentbill(
    [{
      id : Allbill.length + 1,
      date : "2022-06-22",
      customer : "newCusotmer",
      transaction:[{}]
    }]
    )
  }

// clac bill total
let items = []

const Add = (e)=>{
  if(Currentbill.length === 0) {
    alert("Pls Press New")
    return}
 
  items.push({name:e, qty:1, price:50,}) 
  const newTransaction = [...Currentbill[0].transaction ,...items]
  setCurrentbill([{...Currentbill[0], transaction: newTransaction}] )

  // updata allbills api data 
    if(Allbill.find(bill => bill.id === BillNo ) === undefined){
      setAllbill([...Allbill ,Currentbill[0]])
      console.log("new bill has been added")
    }else{
      const originalArray = [...Allbill.filter((bill)=> {return bill.id !== parseInt(BillNo)})]
      originalArray.push(Currentbill[0])
      setAllbill([...originalArray])
      console.log("new bill has been updated")
      return Allbill
    }
}



let total = 0
function calcTotal(){
  if(Currentbill.length === 0) return
  let myArray = Currentbill[0].transaction 
  for(let i = 0; i < myArray.length; i++ ){
    const tot = (myArray[i].qty * myArray[i].price)
    total += tot > 0 ? tot : 0
  }
}

calcTotal()

const Print = ()=>{
  let myData = {
    "billdata":Currentbill[0],
    "total":total  
  }
  sessionStorage.setItem("billData" , JSON.stringify(myData))
  window.open("/print" ,"_blank" , "width = 400 , height = 700 , left = 300 , top = top", false)
}

useEffect(()=>{
  setCurrentbill(Allbill.filter(bill => bill.id === BillNo ) )
},[ BillNo ])

  return (

      <div className='py-2 pr-4 pl-4 max-h-screen overflow-hidden'>
        <Head>
          <title>Casher App</title>
        </Head>

        <Header prev={Prev} next={Next} New={New} print={Print} total={total} />
        
        <BillData data={Currentbill}/>
    
        <main className='grid grid-cols-12 mt-4  '>
            <InputForm data={Currentbill} />
            <Items add={Add} />
            <MainList />
        </main>

      </div>
  )
}

