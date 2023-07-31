import { configureStore } from "@reduxjs/toolkit";

//import reducer
import movieSlice from "./reducers/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});
