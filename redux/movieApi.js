import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "2a16c6401fc5b60e749d1dab2b58b588";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),

  tagTypes: ["movies"],
  endpoints: (builder) => ({
    fetchPopularMovies: builder.query({
      query: (page = 1) =>
        `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
      providesTags: ["movies"],
    }),

    fetchSearchMovies: builder.query({
      query: (searchQuery = "", page = 1) =>
        `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`,
      providesTags: ["movies"],
    }),

    fetchMovieDetails: builder.query({
      query: (movieId) => `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      providesTags: ["movies"],
    }),
  }),
});

export const {
  useFetchPopularMoviesQuery,
  useFetchSearchMoviesQuery,
  useLazyFetchMovieDetailsQuery,
} = movieApi;
