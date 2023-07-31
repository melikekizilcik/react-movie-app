import React from "react";

//import style
import "./movieitem.css";

const MovieItem = ({ id, movieTitle }) => {
  return (
    <div className="movie-item">
      <p className="movie-item-title">{movieTitle}</p>
    </div>
  );
};

export default MovieItem;
