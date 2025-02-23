import React from 'react'

function Banner() {
  return (
    <div className='w-full h-[30rem] bg-cover flex items-end justify-center' style={{backgroundImage:'url(https://th.bing.com/th/id/OIP.EbrqaqaX7opSisginB2BBQHaEo?rs=1&pid=ImgDetMain)'}}>
      <div className='border-0.5px w-full items-center flex justify-center p-4 opacity-45'>
        <h1 className='text-2xl text-white bg-gray-900 w-full text-center '>Avengers</h1>
      </div>
    </div>
  )
}

export default Banner