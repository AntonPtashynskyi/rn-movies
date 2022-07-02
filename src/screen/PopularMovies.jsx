import { Inter_100Thin } from "@expo-google-fonts/inter";
import React, { useEffect } from "react";

import { View, StyleSheet, ScrollView } from "react-native";

import { useFetchPopularMoviesQuery } from "../../redux/movieApi";
import { MovieCard } from "./MovieCard";

export default function PopularMovies() {
  const data = useFetchPopularMoviesQuery();

  let movies;

  if (data.currentData) {
    movies = data.currentData.results;
  }

  return (
    <View style={styles.moviesContainer}>
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
});

// Object {
//   "adult": false,
//   "backdrop_path": "/jVGHRpSgtE2MQLJhC5q4lXmPNQW.jpg",
//   "genre_ids": Array [
//     27,
//     53,
//     28,
//   ],
//   "id": 960258,
//   "original_language": "en",
//   "original_title": "Shark Bait",
//   "overview": "A group of friends enjoying a weekend steal a couple of jetskis raci...(truncated to the first 10000 characters)
