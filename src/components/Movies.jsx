import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function nextPage() {
     setPageNo(pageNo => pageNo + 1);
  }
  

  function prevPage() {
    if(pageNo>1){
      setPageNo(pageNo => pageNo - 1);
    }
  }

  useEffect(() => {
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/popular?api_key=c9faaad8733e99dd34704cf8744eb72b&language=en-US&page=${pageNo}

`
      )
      .then(function (res) {
        //console.log(res.data.results);
         setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="p-5">
        <h1 className=" m-2 border-2 rounded-2xl text-2xl font-black text-center">
          Trending Movies
        </h1>
        <div className="flex flex-wrap ">
          {movies.map((movie) => (
            <MovieCard title={movie.title} poster={movie.poster_path} />
           ))}
        </div>
      </div>
      <Pagination nextPage={nextPage} prevPage={prevPage} pageNo={pageNo}/>
    </div>
  );
}

export default Movies;


//API-KEY=c9faaad8733e99dd34704cf8744eb72b
