import React from "react";

//import style
import "./movieitem.css";

//import redux toolkit
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../store/reducers/movieSlice";

const MovieItem = ({ id, movieTitle }) => {
  const dispatch = useDispatch();

  return (
    <div className="movie-item">
      <p className="movie-item-title">{movieTitle}</p>
      <button onClick={() => dispatch(deleteMovie(id))}>Sil</button>
    </div>
  );
};

export default MovieItem;
