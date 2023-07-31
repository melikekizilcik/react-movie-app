//import react
import React from "react";

//import components
import MovieCardHeader from "./movie-card-header/MovieCardHeader";
import MovieCardBody from "./movie-card-body/MovieCardBody";
import MovieCardFooter from "./movie-card-footer/MovieCardFooter";

//import style
import "./moviecard.css";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <MovieCardHeader />
      <MovieCardBody />
      <MovieCardFooter />
    </div>
  );
};

export default MovieCard;
