import React from "react";

//import components
import MovieForm from "../../movie/movie-form/MovieForm";
import MovieList from "../../movie/movie-list/MovieList";

const MovieCardBody = () => {
  return (
    <div className="movie-card-body">
      <MovieForm />
      <MovieList />
    </div>
  );
};

export default MovieCardBody;
