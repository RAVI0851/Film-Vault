import React from 'react'
//import { nextPage, prevPage } from './Movies'

function Pagination({nextPage,prevPage,pageNo}) {
  return (
    <div className='flex justify-center items-center mt-5 p-4 bg-gray-500 font-black gap-3'>
        
        <div className='hover:cursor-pointer' onClick={()=>{prevPage()}}><i className="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div className='hover:cursor-pointer' onClick={()=>{nextPage()}}><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
