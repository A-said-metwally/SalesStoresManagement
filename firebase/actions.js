import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../firebase/init-firebase'
import XLSX from 'xlsx'


const itemsRef = collection(db, 'items')
const customersRef = collection(db, 'customers')
const suppliersRef = collection(db, 'suppliers')
const billsRef = collection(db , 'bills')


// fetch items function
export const fetchItems = async (f)=>{
    await getDocs(itemsRef)
    .then(res => {
        let itemsData = res.docs.map(doc =>(
            {
                id:doc.id,
                data:doc.data()
            }
        ))
        return itemsData
    })
    .then(itemsInfo =>{f(itemsInfo.map((info)=>(info.data)))})
    .catch(error => console.log("items fetch error", error.message))
}

// fetch customers function
export const fetchCustomers = async (f)=>{
    await getDocs(customersRef)
    .then(res => {
        let customersData = res.docs.map(doc =>(
            {
                id:doc.id,
                data:doc.data()
            }
        ))
        return customersData
    })
    .then(customersInfo =>{f(customersInfo.map((info)=>(info.data)))})
    .catch(error => console.log("customer fetch error", error.message))
}

// fetch suppliers function
export const fetchSuppliers = async (f)=>{
    await getDocs(suppliersRef)
    .then(res => {
        let suppliersData = res.docs.map(doc =>(
            {
                id:doc.id,
                data:doc.data()
            }
        ))
        return suppliersData
    })
    .then(suppliersInfo =>{f(suppliersInfo.map((info)=>(info.data)))})
    .catch(error => console.log("customer fetch error", error.message))
}

// fetch bills function
export const fetchBills = async (f)=>{
    await getDocs(billsRef)
    .then(res => {
        let billsData = res.docs.map(doc =>(
            {
                id:doc.id,
                data:doc.data()
            }
        ))
        return billsData
    })
    .then(billsInfo =>{f(billsInfo.map((info)=>(info.data)))})
    .catch(error => console.log("bills fetch error", error.message))
}

// export excel
export const handleExportExcel = (data, title, fromDate, toDate)=>{
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(data);
  
    XLSX.utils.book_append_sheet(wb, ws, 'worksheet' )
    if(fromDate && toDate){
        XLSX.writeFile(wb, `${title} from ${fromDate} to ${toDate}.xlsx` )
    }else{
        XLSX.writeFile(wb, `${title} to ${fromDate}.xlsx` )
    }
  }
  