import styled from "styled-components";
import MovieCard from "./MovieCard";
const MovieList = ({ movieList }) => {
  console.log(movieList);
  return (
    <>
      <CardContainer>
        {movieList.map((movieList) => (
          <MovieCard
            imgUrl={movieList.background_image}
            title={movieList.title}
            year={movieList.year}
            runTime={movieList.runtime}
          />
        ))}
      </CardContainer>
    </>
  );
};
export default MovieList;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 300px;
  margin-right: 300px;
`;
