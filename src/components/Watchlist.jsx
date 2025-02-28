import React, { useEffect, useState } from "react";
import genres from "../Utilities/genres"

function Watchlist({ watchList,removeFromWatchList,SetWatchList }) {

  const [Search,setSearch] = useState('')
  const [Genre , setGenre] = useState(['All genres'])
  const [curGenre,setCurGenre] = useState('All genres')

  useEffect((movie)=>{
    let temp = watchList.map((movie)=>{
      return genres[movie.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenre(['All genres',...temp])
    console.log(Genre);
    
  },[watchList])

  let handlegenre = (genre)=>{
    setCurGenre(genre)
  }

  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  
  let ascendSort = ()=>{
    let ascendWatchList = watchList.sort((a,b)=>
       a.vote_average - b.vote_average
  )
    SetWatchList([...ascendWatchList])
  }

  let descendSort = ()=>{
    let descendWatchList= watchList.sort((a,b)=>b.vote_average - a.vote_average)
    SetWatchList([...descendWatchList])
  }

  let popularitySort = ()=>{
    let popularitySortedWatchList = watchList.sort((a,b)=>b.popularity-a.popularity)
    SetWatchList([...popularitySortedWatchList])
  }
  const handleSort = (e)=>{
    const selected_val = e.target.value;
    if(selected_val==="high"){
      descendSort()
      console.log("descend");
      
    }
    else if(selected_val==="low"){
      ascendSort()
      console.log("ascend");
    }
    else if(selected_val==="pop"){
      popularitySort()
    }
  }

  return (
    <>
      <div className="flex items-center gap-3 justify-center mt-6 ">
       {Genre.map((genre)=>{
         return <button onClick={()=>handlegenre(genre)} className={curGenre==genre?"bg-blue-500 h-[3rem] w-[8rem] rounded-xl text-white text-center":"bg-gray-500 h-[3rem] w-[8rem] rounded-xl text-white text-center"}>
          {genre}
        </button>
        })}
      </div>

      <div className="flex justify-center items-center h-[10rem]  text-white gap-7">
        <input
          type="text"
          className="bg-gray-400 h-[3rem] w-[18rem] px-4 outline-none"
          placeholder="Search for movies" onChange={handleSearch} value={Search}
        />
        <div className="h-[3rem] items-center p-1  hover:border hover:bg-gray-500 hover:text-white rounded-xl text-black flex hover:cursor-pointer">
        <div className="" ><i  class="fa fa-arrow-up" aria-hidden="true"></i></div>
        <div><i  class="fa fa-arrow-down" aria-hidden="true"></i></div>
          <select name="Sort" id="" onChange={handleSort}>
            <option disabled selected>Sort by</option>
            <option value="high">Ratings(High to low)</option>
            <option value="low">Ratings(Low to High)</option>
            <option value="pop">Popularity</option>
            {/* <option value="year">Release Year</option> */}
          </select>
        </div>
      </div>
      <div className="max-w-screen m-6  bg-gray-200">
        <table className=" border-gray-50 text-center w-full gap-1.5">
          <thead className="">
            <tr className=" shadow-md w-full">
              <th className="">Name</th>
              <th className="flex gap-2 justify-center">
               <div>Ratings</div> 
                </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="border-gray-50">
            {watchList.filter((movie)=>{
              if (curGenre=='All genres') {
                return true
              } else {
                return genres[movie.genre_ids[0]]===curGenre;
              }
              
            }).filter((movie)=>{
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
                <td>{genres[movie.genre_ids[0]]}</td>
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
