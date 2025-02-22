import React from 'react'
import MovieCard from './MovieCard'

function Movies() {
  return (
    <div>
      <div className='p-5'>
        <h1 className=' m-2 border-2 rounded-2xl text-2xl font-black text-center'>Trending Movies</h1>
        <div className='flex flex-wrap '>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        </div>
      </div>
    </div>
  )
}

export default Movies