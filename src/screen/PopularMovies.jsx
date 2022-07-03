import React, { useEffect } from "react";

import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

import { useFetchPopularMoviesQuery } from "../../redux/movieApi";
import { MovieCard } from "./MovieCard";

export default function PopularMovies() {
  const { data, isLoading } = useFetchPopularMoviesQuery();

  let movies;

  if (data) {
    movies = data.results;
  }

  return (
    <View style={styles.moviesContainer}>
      {isLoading && <ActivityIndicator size="large" style={styles.loader} />}
      {data && (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollViewContainer}
          showsVerticalScrollIndicator={false}
        >
          {movies &&
            movies.map((item) => <MovieCard movie={item} key={item.id} />)}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  moviesContainer: {
    flex: 1,
    alignItems: "center",
  },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    marginTop: 50,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 5,
    resizeMode: "cover",
  },
  moviesContainer: {
    flex: 1,
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
