import React from "react";

//import style
import "./moviecardfooter.css";

//import redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../../../store/reducers/movieSlice";

const MovieCardFooter = () => {
  const movies = useSelector((state) => state.movie.moviesArray);
  const dispatch = useDispatch();

  return (
    <div className="movie-card-footer">
      <p>You've {movies?.length} movies in your watchlist</p>
      <button onClick={() => dispatch(deleteAll())}>Delete all</button>
    </div>
  );
};

export default MovieCardFooter;
