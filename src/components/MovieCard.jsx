import React from "react";

function MovieCard({ title, poster, movie, addToWatchList ,watchList,removeFromWatchList}) {
  let doesContain = (movie) => {
      for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movie.id) {
        console.log(watchList)
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="w-[11rem] h-[40vh] bg-center bg-cover flex border flex-col justify-between items-end rounded-xl hover:scale-110 duration-300 hover:cursor-pointer m-1"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster})`,
      }}
    >
      {doesContain(movie) ?
      <div
        onClick={() => removeFromWatchList(movie)}
        className="bg-gray-500 h-[1.4rem] w-[1.4rem] rounded-2xl m-4"
      >
        &#10060;
      </div>
      :
      <div
        onClick={() => addToWatchList(movie)}
        className="bg-gray-500 h-[1.4rem] w-[1.4rem] rounded-2xl m-4"
      >
        &#128525;
      </div>}
      <div className="w-full">
        {" "}
        <h1 className="text-2xl text-white bg-gray-900 w-full text-center opacity-45">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default MovieCard;
