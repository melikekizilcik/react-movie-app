//import redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesArray: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    deleteAll: (state) => {
      state.moviesArray = [];
    },
    addMovie: (state, action) => {
      state.moviesArray = [...state.moviesArray, action.payload];
    },
    deleteMovie: (state, action) => {
      const movieId = action.payload;
      state.moviesArray = state.moviesArray.filter(
        (item) => item.id !== movieId
      );
    },
  },
});

export const { deleteAll, addMovie, deleteMovie } = movieSlice.actions;

export default movieSlice.reducer;
