//import react
import React from "react";

//import redux toolkit
import { useSelector } from "react-redux";

//import components
import MovieItem from "../movie-item/MovieItem";

const MovieList = () => {
  const movies = useSelector((state) => state.movie.moviesArray);
  return (
    <div className="movie-list">
      {movies.map((movie, index) => {
        return (
          <MovieItem key={index} id={movie?.id} movieTitle={movie?.title} />
        );
      })}
    </div>
  );
};

export default MovieList;
