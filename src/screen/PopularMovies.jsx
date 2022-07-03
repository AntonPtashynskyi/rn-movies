import React, { useState } from "react";

import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";

import { useFetchPopularMoviesQuery } from "../../redux/movieApi";
import { MovieCard } from "./MovieCard";

export default function PopularMovies() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetchPopularMoviesQuery(page);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

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
      {/* <FlatList
        data={movies}
        style={styles.container}
        numColumns={3}
        contentContainerStyle={styles.scrollViewContainer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <MovieCard currMove={item} style={styles.item} />}
        onEndReached={loadMore}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  item: { aspectRatio: 1, width: "100%", flex: 1 },
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
