import styled from "styled-components";
import Slick from "./Slick";
import { useQuery } from "@tanstack/react-query";
import { IGetMoviesResult, getMovies } from "../api";
import { makeImagePath } from "../utilities";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Wrapper = styled.div`
  margin-top: 100px;
  padding: 0 60px;
`;
const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

interface ICategory {
  text: string;
}

const SliderItem = styled.div<{ bgphoto: string }>`
  background-color: white;
  height: 160px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  /* background-repeat: no-repeat; */
  background-position: center center;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  /* width: 100%;
  img {
    max-width: 100%;
    height: auto;
  } */
`;

const Categories = ({ text }: ICategory) => {
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: getMovies,
  });
  return (
    <Wrapper>
      <CategoryTitle>{text}</CategoryTitle>
      <Slick>
        {data?.results.map((movie) => (
          <SliderItem
            key={movie.id}
            bgphoto={makeImagePath(movie.backdrop_path, "w500")}
          >
            {/* <img src={movie.backdrop_path} alt={movie.title} /> */}
          </SliderItem>
        ))}
      </Slick>
    </Wrapper>
  );
};

export default Categories;
