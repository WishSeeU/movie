import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import MovieTemplate from "./components/MovieTemplate";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const getMovieList = async () => {
    const movieData = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?page=$"
    );
    console.log(movieData); // 동기화
  };
  const prevPage = () => {};
  const nextPage = () => {};
  return (
    <div className="App">
      <MovieTemplate />
      <button onClick={prevPage}>-</button>
      <button onClick={nextPage}>+</button>
      <button onClick={getMovieList}>데이터 요청</button>
    </div>
  );
}

export default App;
