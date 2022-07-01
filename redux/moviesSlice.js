import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: { movieName: null },
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieName: (state, action) => {
      state.movieName = action.payload.movieName;
    },
  },
});

export const { setMovieName } = movieSlice.actions;
