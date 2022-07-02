import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { movieApi } from "./movieApi";

export const store = configureStore({
  reducer: {
    name: authSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
