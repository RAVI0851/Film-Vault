
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import Skeleton from "./Skeleton";

function Movies({ watchList, addToWatchList, removeFromWatchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 25;

// To display only the current page's movies
const displayedMovies = movies.slice(
  (pageNo - 1) * itemsPerPage,
  pageNo * itemsPerPage
);

const totalPages = 10;
  function nextPage() {
    if(pageNo<totalPages) setPageNo((page) => page + 1);
  }

  function prevPage() {
    if (pageNo > 1) {
      setPageNo((page) => page - 1);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies',
        headers: {
          'x-rapidapi-key': '18f06ddb7fmsh678ee94df9c8155p106b2ajsnb504764c9a6e',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setMovies(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="p-5">
        <h1 className="m-2 border-2 rounded-2xl text-2xl font-black text-center">
          Popular Movies
        </h1>
        <div className="flex flex-wrap justify-center">
          {isLoading 
          ?Array.from({length:25}).map((_,i)=><Skeleton key={i}/>)
          :displayedMovies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              title={movie.originalTitle}
              poster={movie.primaryImage}
              addToWatchList={addToWatchList}
              watchList={watchList}
              removeFromWatchList={removeFromWatchList}
            />
          ))}
        </div>
      </div>
      <Pagination nextPage={nextPage} prevPage={prevPage} pageNo={pageNo} />
    </div>
  );
}

export default Movies;
