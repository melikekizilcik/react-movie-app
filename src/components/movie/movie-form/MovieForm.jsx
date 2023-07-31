//import react
import React, { useState } from "react";

//import style
import "./movieform.css";

//import redux toolkit
import { useDispatch } from "react-redux";
import { addMovie } from "../../../store/reducers/movieSlice";

const MovieForm = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();

  const addMovieToArray = (e) => {
    e.preventDefault();
    dispatch(
      addMovie({ id: Math.round(Math.random() * 9999999), title: movieTitle })
    );
    setMovieTitle("");
  };

  return (
    <div>
      <form className="movie-form">
        <input
          placeholder="Add movie..."
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button onClick={(e) => addMovieToArray(e)}>Add</button>
      </form>
    </div>
  );
};

export default MovieForm;
