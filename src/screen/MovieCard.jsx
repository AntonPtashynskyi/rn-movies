import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

export const MovieCard = ({ movie }) => {
  const imagePath = "https://image.tmdb.org/t/p/original/";

  return (
    <TouchableOpacity style={styles.imageWrapper} activeOpacity={0.5}>
      <Image
        source={{
          uri: `${imagePath}${movie.poster_path}`,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
  imageWrapper: {
    width: 120,
  },
});
