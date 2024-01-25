import React from "react";
import styled from "styled-components";

const MovieCard = ({ imgUrl, title, year, runTime }) => {
  return (
    <CardWrapper>
      <ImgUrl>
        <img src={imgUrl} />
      </ImgUrl>
      <Title>{title}</Title>
      <Year>개봉년도&nbsp;{year}</Year>
      <RunTime>상영시간&nbsp;{runTime}</RunTime>
    </CardWrapper>
  );
};

export default MovieCard;

const CardWrapper = styled.div`
  width: 250px;
  height: 350px;
  border: 1px solid grey;
  overflow: hidden;
  margin: 10px;
`;

const ImgUrl = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
`;

const Year = styled.div`
  font-size: 17px;
  padding: 10px;
`;

const RunTime = styled.div`
  font-size: 17px;
  padding: 10px;
`;
