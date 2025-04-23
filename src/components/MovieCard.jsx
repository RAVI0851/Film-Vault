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
      className="w-[17rem] h-[40vh] bg-center bg-cover flex border flex-col justify-between items-end rounded-xl hover:scale-110 duration-300 hover:cursor-pointer m-2 relative"
      style={{
        backgroundImage: `url(${poster})`,
      }}
    >
      {doesContain(movie) ?
      <div
        onClick={() => removeFromWatchList(movie)}
        className="bg-gray-500 h-[1.4rem] w-[1.4rem] rounded-2xl m-4 relative group"
      >
        &#10060;
        <span className="absolute -top-10 left-0 -translate-x-1/2 opacity-transition duration-200 rounded whitespace-nowrap px-2 py-1.5 opacity-0 group-hover:opacity-100 bg-blue-600 text-white">
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rotate-45"></span>
        Remove from WatchList</span>
      </div>
      :
      <div
        onClick={() => addToWatchList(movie)}
        className="bg-gray-500 h-[1.4rem] w-[1.4rem] rounded-2xl m-4 relative group"
      >
        &#128525;
        <span className="absolute -top-10 left-0 -translate-x-1/2 opacity-transition duration-200 rounded whitespace-nowrap px-2 py-1.5 opacity-0 group-hover:opacity-100 bg-blue-600 text-white">
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rotate-45"></span>
        Add to WatchList</span>
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
