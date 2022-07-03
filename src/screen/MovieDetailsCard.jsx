import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export const MovieDetailsCard = ({ data }) => {
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const movie = data.currentData;

  return (
    <ScrollView>
      <Image
        source={
          movie.backdrop_path
            ? { uri: `${imagePath}${movie.backdrop_path}` }
            : require("../images/1280px-Tmdb.new.logo.svg.png")
        }
        style={styles.cover}
      />
      <View style={styles.container}>
        <Image
          source={
            movie.poster_path
              ? { uri: `${imagePath}${movie.poster_path}` }
              : require("../images/default-movie.png")
          }
          style={styles.image}
        />
        <View style={styles.statsContainer}>
          <Text>
            <Text style={styles.textTitle}>Popularity:</Text> {movie.popularity}
          </Text>
          <Text>
            <Text style={styles.textTitle}>Vote:</Text> {movie.vote_average}
          </Text>
          <Text>
            <Text style={styles.textTitle}>Vote count:</Text> {movie.vote_count}
          </Text>
          <View>
            <Text style={styles.textTitle}>Genres:</Text>
            <ScrollView>
              {movie.genres.map((item) => (
                <View
                  style={{ flexDirection: "row", flexWrap: "wrap" }}
                  key={item.id}
                >
                  <Text style={styles.genresItem}>{item.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text>Description: {movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statsContainer: {
    marginLeft: 10,
  },

  container: {
    padding: 10,
    flexGrow: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cover: {
    width: "100%",
    height: 250,
  },
  image: {
    width: 150,
    height: 250,
    borderRadius: 10,
  },
  genresItem: {
    backgroundColor: "#8fb9eb8d",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 25,
    marginBottom: 5,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
});

// kraj produkcji.
