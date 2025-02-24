import React from "react";

function MovieCard({ title, poster }) {
  return (
    <div
      className="w-[11rem] h-[40vh] bg-center bg-cover flex items-end justify-center border rounded-xl hover:scale-110 duration-300 hover:cursor-pointer m-1"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster})`,
      }}
    >

      <div className="bg-gray-200 ">
        &#128525;
      </div>

     <div className="mt-0"> <h1 className='text-2xl text-white bg-gray-900 w-full text-center opacity-45'>{title}</h1></div>
    </div>
  );
}

export default MovieCard;
