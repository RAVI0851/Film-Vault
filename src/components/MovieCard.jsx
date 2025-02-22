import React from 'react'

function MovieCard() {
  return (
    <div className='w-[11rem] h-[40vh] bg-center bg-cover flex items-end justify-center border rounded-xl hover:scale-110 duration-300 hover:cursor-pointer m-1' style={{backgroundImage:`url(https://th.bing.com/th/id/OIP.Yk1EgVgC7B49-lPscg3e6wHaKe?rs=1&pid=ImgDetMain)`}}>
        <h1 className='text-center text-white'>Joker</h1>
    </div>
  )
}

export default MovieCard