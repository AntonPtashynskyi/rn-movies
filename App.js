import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const keyBoardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>Movies DB</Text>
            <View style={styles.inputButtonWrapper}>
              <TextInput style={styles.input} />
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
          </View>
        </KeyboardAvoidingView>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  inputWrapper: {
    opacity: 1,
    marginHorizontal: 20,
    marginVertical: 60,
    justifyContent: "flex-start",
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
    borderColor: "#6495ed",
    backgroundColor: "#6495ed",
    height: 40,
    width: 100,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
});
