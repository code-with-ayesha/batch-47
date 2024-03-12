"use client"
import React, {useState} from 'react'

const Quantity= ()=> {
const [num, setnum]=useState(1);
  
  return (
    <div className='flex gap-x-2 items-center'>
      {/* Minus */}
      <button  onClick={() =>{
         setnum(num <= 1 ? 1: num - 1)
         }}
      className='w-6 h-6 border rounded-full center'>-</button>
      {/* Number */}
      <span className='text-sm'>{num}</span>
      
      {/* Plus */}
      <button className='w-6 h-6 border rounded-full center'
       onClick={() =>{
         setnum(num + 1)
         }}
         >
            +
            </button>
      
     
      
      
    </div>
  )
}

export default Quantity;

// export const OperationButton = () => {
// return(
// <div className='border h-6 w-6 rounded-full center'>-</div>
// )
// };



