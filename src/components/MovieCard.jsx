import React from "react";

function MovieCard({ title, poster }) {
  return (
    <div
      className="w-[11rem] h-[40vh] bg-center bg-cover flex items-end justify-center border rounded-xl hover:scale-110 duration-300 hover:cursor-pointer m-1"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster})`,
      }}
    >
      <h1 className="text-center text-white">{title}</h1>
    </div>
  );
}

export default MovieCard;
