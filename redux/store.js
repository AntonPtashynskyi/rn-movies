import { configureStore } from "@reduxjs/toolkit";
import { setMovieName } from "./moviesSlice";
import { movieApi } from "./movieApi";

export const store = configureStore({
  reducer: {
    movie: setMovieName,
    [movieApi.reducerPath]: movieApi.reducer,
  },
});
