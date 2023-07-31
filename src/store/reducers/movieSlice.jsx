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
  },
});

export const { deleteAll, addMovie } = movieSlice.actions;

export default movieSlice.reducer;
