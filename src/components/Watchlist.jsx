import React, { useEffect, useState } from "react";
import genres from "../Utilities/genres"

function Watchlist({ watchList,removeFromWatchList,SetWatchList }) {

  const [Search,setSearch] = useState('')
  const [Genre , setGenre] = useState(['All genres'])
  const [curGenre,setCurGenre] = useState('All genres')

  useEffect(()=>{
    let temp = watchList.map((movie)=>{
      return movie.genres[0]
    });
    temp = new Set(temp)
    setGenre(['All genres',...temp])
    console.log(temp);
    
  },[watchList])

  let handlegenre = (genre)=>{
    setCurGenre(genre)
  }

  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  
  let ascendSort = ()=>{
    let ascendWatchList = watchList.sort((a,b)=>
       a.averageRating - b.averageRating
  )
    SetWatchList([...ascendWatchList])
  }

  let descendSort = ()=>{
    let descendWatchList= watchList.sort((a,b)=>b.averageRating - a.averageRating)
    SetWatchList([...descendWatchList])
  }

  let popularitySort = ()=>{
    let popularitySortedWatchList = watchList.sort((a,b)=>b.numVotes-a.numVotes)
    SetWatchList([...popularitySortedWatchList])
  }

  //Sorting based on ratings,,popularity
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
      <div className="flex items-center gap-3 justify-center mt-6 flex-wrap ">
       {Genre.map((genre)=>{
         return <button onClick={()=>handlegenre(genre)} className={curGenre==genre?"bg-blue-500 h-[3rem] w-[8rem] hover:cursor-pointer rounded-xl text-white text-center":"bg-gray-500 h-[3rem] w-[8rem] rounded-xl text-white text-center"}>
          {genre}
        </button>
        })}
      </div>

      <div className="flex justify-center items-center h-[10rem]  text-white gap-7 flex-wrap">
        <input
          type="text"
          className="bg-gray-400 h-[3rem] w-[18rem] px-4 outline-none"
          placeholder="Search for movies" onChange={handleSearch} value={Search}
        />
        <div className="h-[3rem] items-center p-1  hover:border hover:bg-gray-500 hover:text-white rounded-xl text-black flex hover:cursor-pointer">
        <div className="" ><i  class="fa fa-arrow-up" aria-hidden="true"></i></div>
        <div><i  class="fa fa-arrow-down" aria-hidden="true"></i></div>
          <select name="Sort" id="" onChange={handleSort} className="rounded hover:bg-black">
            <option disabled selected>Sort by</option>
            <option value="high">Ratings(High to low)</option>
            <option value="low">Ratings(Low to High)</option>
            <option value="pop">Popularity</option>
            {/* <option value="year">Release Year</option> */}
          </select>
        </div>
      </div>
      <div className=" flex w-full m-6  bg-gray-200 overflow-x-auto">
        <table className=" border-gray-50 text-center min-w-[700px] whitespace-nowrap w-full gap-1.5">
          <thead className="whitespace-nowrap gap-1">
            <tr className=" shadow-md w-full gap-1">
              <th className="">Name</th>
              <th className="">
               <div className="m-1">Ratings</div> 
                </th>
              <th className="m-2">Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="border-gray-50">
            {watchList.filter((movie)=>{
              if (curGenre=='All genres') {
                return true
              } else {
                return movie.genres[0]===curGenre;
              }
              
            }).filter((movie)=>{
              return movie.originalTitle?.toLowerCase().includes(Search.toLowerCase())
            }).map((movie) => (
              <tr className="">
                <td className="flex items-center text-center">
                  <img
                    src={`${movie.primaryImage}`}
                    className="h-[6rem] w-[10rem] m-2 "
                    alt="poster"
                  />
                  <h1 className="">{movie.originalTitle}</h1>
                </td>
                <td>{movie.averageRating}</td>
                <td>{movie.numVotes}</td>
                <td>{movie.genres[0]}</td>
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
