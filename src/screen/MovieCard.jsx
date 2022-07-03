import { Inter_500Medium } from "@expo-google-fonts/inter";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";

export const MovieCard = ({ movie }) => {
  const imagePath = "https://image.tmdb.org/t/p/original/";
  const navigation = useNavigation();

  const handleCardClick = (id) => {
    navigation.navigate("Details", { itemId: id });
  };

  return (
    <TouchableOpacity
      style={styles.imageWrapper}
      activeOpacity={0.5}
      onPress={() => handleCardClick(movie.id)}
    >
      {!movie.poster_path && (
        <Text style={styles.movieWithOutPoster}>{movie.title}</Text>
      )}

      <Image
        source={
          movie.poster_path
            ? {
                uri: `${imagePath}${movie.poster_path}`,
              }
            : require("../images/default-movie.png")
        }
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
  movieWithOutPoster: {
    top: 10,
    left: 5,
    position: "absolute",
    zIndex: 100,
  },
});
