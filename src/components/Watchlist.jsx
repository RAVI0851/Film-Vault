import React, { useState } from "react";
//import watchList from 'movies.jsx'

function Watchlist({ watchList,removeFromWatchList,SetWatchList }) {

  const [Search,setSearch] = useState('')


  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  
  let ascendSort = ()=>{
    let ascendWatchList = watchList.sort((a,b)=>
       b.vote_average - a.vote_average
  )
    SetWatchList([...ascendWatchList])
  }

  let descendSort = ()=>{
    let descendWatchList= watchList.sort((a,b)=>a.vote_average - b.vote_average)
    SetWatchList([...descendWatchList])
  }

  return (
    <>
      <div className="flex items-center gap-3 justify-center mt-6 ">
        <button className="bg-blue-500 h-[3rem] w-[8rem] rounded-xl text-white text-center">
          All Genres
        </button>
        <button className="bg-gray-500 h-[3rem] w-[8rem] rounded-xl text-white text-center">
          Action
        </button>
        <button className="bg-gray-500 h-[3rem] w-[8rem] rounded-xl text-white text-center">
          crime
        </button>
      </div>

      <div className="flex justify-center items-center h-[10rem]  text-white">
        <input
          type="text"
          className="bg-gray-400 h-[3rem] w-[18rem] px-4 outline-none"
          placeholder="Search for movies" onChange={handleSearch} value={Search}
        />
      </div>
      <div className="max-w-screen m-6  bg-gray-200">
        <table className=" border-gray-50 text-center w-full gap-1.5">
          <thead className="">
            <tr className=" shadow-md w-full">
              <th className="">Name</th>
              <th className="flex gap-2 justify-center">
                <div ><i onClick={descendSort} class="fa fa-arrow-up" aria-hidden="true"></i></div>
               <div>Ratings</div> 
               <div><i onClick={ascendSort} class="fa fa-arrow-down" aria-hidden="true"></i></div>
                </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="border-gray-50">
            {watchList.filter((movie)=>{
              return movie.title.toLowerCase().includes(Search.toLowerCase())
            }).map((movie) => (
              <tr className="">
                <td className="flex items-center text-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="h-[6rem] w-[10rem] m-2 "
                    alt="poster"
                  />
                  <h1 className="">{movie.title}</h1>
                </td>
                <td>{movie.vote_average}</td>
                <td>{movie.popularity}</td>
                <td>History</td>
                <td className="font-bold text-2xl text-red-400 text-center hover:cursor-pointer" onClick={()=>{removeFromWatchList(movie)}} >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
