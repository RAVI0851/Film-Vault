// import React, { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";
// import axios from "axios";
// import Pagination from "./Pagination";

// function Movies({watchList,addToWatchList,removeFromWatchList}) {
//   const [movies, setMovies] = useState([]);
//   const [pageNo, setPageNo] = useState(1);

//   function nextPage() {
//      setPageNo(pageNo => pageNo + 1);
//   }
  

//   function prevPage() {
//     if(pageNo>1){
//       setPageNo(pageNo => pageNo - 1);
//     }
//   }

//   useEffect(() => {
//     axios
//       .get(
//         `
// https://api.themoviedb.org/3/movie/popular?api_key=c9faaad8733e99dd34704cf8744eb72b&language=en-US&page=${pageNo}

// `
//       )
//       .then(function (res) {
//         //console.log(res.data.results);
//          setMovies(res.data.results);
//       });
//   }, [pageNo]);

//   return (
//     <div>
//       <div className="p-5">
//         <h1 className=" m-2 border-2 rounded-2xl text-2xl font-black text-center">
//           Trending Movies
//         </h1>
//         <div className="flex flex-wrap ">
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} title={movie.title} poster={movie.poster_path} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList} />
//            ))}
//         </div>
//       </div>
//       <Pagination nextPage={nextPage} prevPage={prevPage} pageNo={pageNo}/>
//     </div>
//   );
// }

// export default Movies;


//API-KEY=c9faaad8733e99dd34704cf8744eb72b
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ watchList, addToWatchList, removeFromWatchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

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
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://imdb236.p.rapidapi.com/imdb/top250-movies',
        headers: {
          'x-rapidapi-key': '18f06ddb7fmsh678ee94df9c8155p106b2ajsnb504764c9a6e',
          'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        setMovies(response.data);
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
        <div className="flex flex-wrap">
          {displayedMovies?.map((movie) => (
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
