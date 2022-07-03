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
  FlatList,
} from "react-native";

import { useFetchSearchMoviesQuery } from "../../redux/movieApi";
import { MovieCard } from "./MovieCard";

export default function SearchScreen() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { name } = useSelector((state) => state.name);
  const { data, isLoading } = useFetchSearchMoviesQuery(searchValue);

  let movies;

  if (data) {
    movies = data.results;
  }

  const handleEndOfScroll = () => {
    console.log("end");
  };

  const keyBoardHide = () => {
    setSearchValue(inputValue);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        style={{ marginTop: 50 }}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <View>
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
              {!movies && <Text style={styles.motto}> Let's search</Text>}
              {isLoading && <ActivityIndicator size="large" />}
            </View>
          </KeyboardAvoidingView>

          <StatusBar style="auto" />
          <View style={styles.moviesContainer}>
            {data && (
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContainer}
                showsVerticalScrollIndicator={false}
                onMomentumScrollEnd={(e) => {
                  const scrollPosition = e.nativeEvent.contentOffset.y;
                  const scrollViewHeight =
                    e.nativeEvent.layoutMeasurement.height;
                  const contentHeight = e.nativeEvent.contentSize.height;
                  const isScrolledToBottom = scrollViewHeight + scrollPosition;

                  console.log(isScrolledToBottom);
                }}
              >
                {movies &&
                  movies.map((item) => (
                    <MovieCard movie={item} key={item.id} />
                  ))}
              </ScrollView>
            )}
          </View>
        </View>
      </ScrollView>
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

  inputWrapper: {
    opacity: 1,
    marginHorizontal: 20,
    marginVertical: 5,
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
