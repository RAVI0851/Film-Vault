import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import Footer from "./components/Footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";

 

function App() {


  const [watchList,SetWatchList] = useState([]);

  let addToWatchList = (movie)=>{

    let newWatchList = [...watchList,movie]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    SetWatchList(newWatchList)
    console.log(watchList);
    
  }

  let removeFromWatchList = (movie)=>{
    let filteredWatchList = watchList.filter((cur_movie)=>{
       return cur_movie.id!=movie.id
    })
    SetWatchList(filteredWatchList)
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
    console.log(watchList)
  }

  useEffect(()=>{
   let localStorageMovies= localStorage.getItem('moviesApp')
   if(localStorageMovies){
    SetWatchList(JSON.parse(localStorageMovies))
   }
  },[]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/> <Movies watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} /></>} />
          <Route path="/Watchlist" element={<Watchlist watchList={watchList} removeFromWatchList={removeFromWatchList} SetWatchList={SetWatchList} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
