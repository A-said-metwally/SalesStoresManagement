import { useEffect,useState } from 'react'
import Head from 'next/head'
import {RefreshIcon ,TrendingUpIcon, TrendingDownIcon} from '@heroicons/react/outline'
import Box from '../components/Box'

export default function Home() {

  const myArray = [1,2,3,4,5,6,1,2,3,4,5,6]
  const [NewArray , setNewArray] = useState([])
  const RandomArray = []
  const indexs = []
  
  
  let counter = 0
  const [ValidTries , setValidTries ] = useState(0)
  const [FaildTries , setFaildTries ] = useState(0)

  let Box1 = 0
  let Box2 = 0

  const select = (e)=>{
    if(ValidTries + FaildTries === 6) return alert("pls refresh")
    if(counter < 2){
      counter = counter +  1 
      counter === 1 
      ? Box1 = e
      :counter === 2
      ? Box2 = e
      : null
    }else{
      counter = 1
       Box1 = 0
       Box2 = 0
    }

    if(counter === 2){
      Box1 === Box2 
      ? setValidTries(ValidTries + 1) 
      : setFaildTries(FaildTries + 1)
    }
  }

// refresh game
  const random = ()=>{
    setValidTries(0) 
    setFaildTries(0)

    RandomArray.length = 0
    for(let i = 0; i < 100 ; i++){
      if (RandomArray.length === 12) break
      const index = Math.floor(Math.random() * 12)
      if(indexs.indexOf(index) === -1){
        RandomArray.push(myArray[index])
        indexs.push(index)
      }else{
        continue
      }
    }

    setNewArray(RandomArray)

  }



  useEffect(()=>{
    random()   
  },[])
  

  return (

      <div className='flex justify-center'>
        <Head>
          <title>Memory Game</title>
        </Head>

        <div className='flex flex-col lg:w-2/4 md:w-3/4 sm:w-full h-screen '> 
          <div className='p-1 w-full' >
            <div className='flex p-1 justify-between items-center border-4 border-blue-400'>
              <h1 className='font-bold text-blue-600 text-lg'>Hello : Ahmed</h1>
              <div className='flex space-x-6'>
                <div className='flex space-x-12 mr-6'>
                  <h1 className=' font-bold text-lg text-green-500'>Valid Tries : {ValidTries}</h1>
                  <h1 className=' font-bold text-lg text-red-500'>Wrong Tries : {FaildTries}</h1>
                </div>
                  <RefreshIcon 
                    onClick={random}
                    className="h-8 w-8 text-blue-600 hover:rotate-180 transition ease-in-out duration-500 cursor-pointer
                    hover:text-green-500  "                
                  /> 
                
              </div>
            </div>
          </div>
          
          <div className=' flex flex-wrap justify-center mt-5'>
            {NewArray.map((el ,id)=>{
              return (
                <Box el={el} key={id} fun={select} array={NewArray}  />
              )
            })}
          </div>

            {ValidTries + FaildTries === 6 && 
              <div className=' absolute top-0 left-0 w-screen h-screen bg-gray-100
                flex items-center justify-center' onClick={random}>
               { ValidTries > 3 
                ? <TrendingUpIcon className='h-56 w-56 text-green-400 animate-pulse duration-150'/>
                : <TrendingDownIcon className='h-56 w-56 text-red-400 animate-pulse duration-150'/>
                }
              </div>
            } 

          </div>
      </div>
  )
}

