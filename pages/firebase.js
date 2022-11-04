import React,{useState, useEffect} from 'react'
import {doc, getDocs, collection, onSnapshot, deleteDoc, addDoc} from 'firebase/firestore'
import {db} from '../firebase/init-firebase' 
import { async } from '@firebase/util'


const pages = [
  {type:'Forms',   pageName:'Sales', path:'/sales'},
  {type:'Forms',   pageName:'Purchase', path:'/purchase'}, 
  {type:'Forms',   pageName:'User Page', path:'/userpage'}, 
  {type:'Forms',   pageName:'Users Coding', path:'/masterData/users'}, 
  {type:'Forms',   pageName:'Item Coding', path:'/masterData/items/itemcoding'}, 
  {type:'Forms',   pageName:'Edit Items', path:'/masterData/items/edititems'}, 
  {type:'Reports', pageName:'Inventory', path:'/reports/inventory'}, 
  {type:'Reports', pageName:'Operation', path:'/reports/operation'},
  {type:'Reports', pageName:'Sales-Purchase', path:'/reports/sales-purchase/[id]'},
]

const users = [
  {
    Code:"123",
    Pass:"123",
    Name:"ahmed" , 
    Dep:"Continuos Improvement",
    Title:"Programmer",
    Image:"", 
    Pages:[
      {type:'Forms',   pageName:'Sales', path:'/sales'},
      {type:'Forms',   pageName:'Purchase', path:'/purchase'}, 
      {type:'Forms',   pageName:'User Page', path:'/userpage'}, 
      {type:'Forms',   pageName:'Users Coding', path:'/masterData/users'}, 
      {type:'Forms',   pageName:'Item Coding', path:'/masterData/items/itemcoding'}, 
      {type:'Forms',   pageName:'Edit Items', path:'/masterData/items/edititems'}, 
      {type:'Reports', pageName:'Inventory', path:'/reports/inventory'}, 
      {type:'Reports', pageName:'Operation', path:'/reports/operation'},
      {type:'Reports', pageName:'Sales-Purchase', path:'/reports/sales-purchase/[id]'},
    ]},
    {
      Code:"456",
      Pass:"456",
      Name:"Muhammad" , 
      Dep:"Engineering",
      Title:"Eng",
      Image:"", 
      Pages:[
        {type:'Forms',   pageName:'Sales', path:'/sales'},
        {type:'Forms',   pageName:'Purchase', path:'/purchase'}, 
        {type:'Forms',   pageName:'User Page', path:'/userpage'}, 
        {type:'Reports', pageName:'Inventory', path:'/reports/inventory'}, 
        {type:'Reports', pageName:'Operation', path:'/reports/operation'},
        {type:'Reports', pageName:'Sales-Purchase', path:'/reports/sales-purchase/[id]'},
      ]},
      {
        Code:"789",
        Pass:"789",
        Name:"Jory" , 
        Dep:"Quality",
        Title:"Doctor",
        Image:"", 
        Pages:[
          {type:'Forms',   pageName:'User Page', path:'/userpage'}, 
          {type:'Reports', pageName:'Inventory', path:'/reports/inventory'}, 
          {type:'Reports', pageName:'Operation', path:'/reports/operation'},
          {type:'Reports', pageName:'Sales-Purchase', path:'/reports/sales-purchase/[id]'},
        ]},
        {
          Code:"000",
          Pass:"000",
          Name:"Tamim" , 
          Dep:"Hr",
          Title:"Responsible",
          Image:"", 
          Pages:[
            {type:'Forms',   pageName:'User Page', path:'/userpage'}, 
            {type:'Reports', pageName:'Inventory', path:'/reports/inventory'}, 
            {type:'Reports', pageName:'Sales-Purchase', path:'/reports/sales-purchase/[id]'},
          ]},
        
]


function firebase() {
// console.log(customers)
    function handleSubmit(e){
        e.preventDefault()
        const dataRef = collection(db , 'pages')
        for(let i = 0; i < users.length; i++){
            addDoc(dataRef, users[i])
            .then(res =>{
                alert('done')
            }).catch(error => console.log(error.message))
        }
    }


  return (
    <div className=' w-full flex justify-center items-center space-x-4'>
        <h1 className=''>fire base</h1>
        <hr />
        <button 
            onClick={handleSubmit} 
            className=' flex items-center p-3 bg-blue-400 text-lg '>upload</button>
    </div>
  )
}

export default firebase