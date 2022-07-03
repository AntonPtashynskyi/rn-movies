import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { useFetchSearchMoviesQuery } from "../../redux/movieApi";
import { MovieCard } from "./MovieCard";

export default function SearchScreen() {
  const [inputValue, setInputValue] = useState("");
  const { name } = useSelector((state) => state.name);
  const { data, isLoading } = useFetchSearchMoviesQuery(inputValue);

  let movies;

  if (data) {
    movies = data.results;
  }

  const keyBoardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <View style={styles.searchContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.inputWrapper}>
              <Text style={styles.inputTitle}>Hi, {name}</Text>
              <View style={styles.inputButtonWrapper}>
                <TextInput
                  style={styles.input}
                  value={inputValue}
                  onChangeText={(value) => {
                    setInputValue(value);
                  }}
                />
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.7}
                  onPress={keyBoardHide}
                >
                  <Text
                    style={{
                      fontFamily: "sans-serif",
                      color: "#fff",
                    }}
                  >
                    SEARCH
                  </Text>
                </TouchableOpacity>
              </View>
              {isLoading && <Text style={styles.motto}> Let's search</Text>}
            </View>
          </KeyboardAvoidingView>

          <StatusBar style="auto" />
          <View style={styles.moviesContainer}>
            {data && (
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContainer}
                showsVerticalScrollIndicator={false}
              >
                {movies &&
                  movies.map((item) => (
                    <MovieCard movie={item} key={item.id} />
                  ))}
              </ScrollView>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  moviesContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginLeft: 10,
  },
  searchContainer: {},
  inputWrapper: {
    opacity: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  inputButtonWrapper: {
    flexDirection: "row",
  },

  input: {
    backgroundColor: "black",
    height: 40,
    width: 250,
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,

    paddingHorizontal: 10,
    paddingVertical: 3,
    opacity: 0.2,
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  inputTitle: {
    marginBottom: 5,
  },

  button: {
    borderWidth: 1,
    backgroundColor: "#6495ed",
    borderColor: "#6495ed",
    height: 40,
    width: 100,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  motto: {
    marginTop: 200,
    fontSize: 16,
  },
});
