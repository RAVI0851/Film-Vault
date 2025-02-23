import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `
https://api.themoviedb.org/3/movie/popular?api_key=c9faaad8733e99dd34704cf8744eb72b&language=en-US&page=1

`
      )
      .then(function (res) {
        //console.log(res.data.results);
         setMovies(res.data.results);
      });
  }, []);

  return (
    <div>
      <div className="p-5">
        <h1 className=" m-2 border-2 rounded-2xl text-2xl font-black text-center">
          Trending Movies
        </h1>
        <div className="flex flex-wrap ">
          {movies.map((movie) => (
            <MovieCard title={movie.original_title} poster={movie.poster_path} />
           ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
//c9faaad8733e99dd34704cf8744eb72b
