import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import styled from "styled-components";

const MovieTemplate = ({}) => {
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    const data = await axios.get("https://yts.mx/api/v2/list_movies.json");
    setMovieList(data.data.data.movies);
  };

  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <>
      <MovieWrapper>
        <MovieList movieList={movieList} />
      </MovieWrapper>
    </>
  );
};
export default MovieTemplate;

const MovieWrapper = styled.div``;
