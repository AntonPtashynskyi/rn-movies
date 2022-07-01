import { Inter_100Thin } from "@expo-google-fonts/inter";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Enter your name</Text>
      <View style={styles.loginFormWrapper}>
        <TextInput style={styles.input} textAlign="center" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LET'S GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 18,
    marginBottom: 10,
  },
  loginFormWrapper: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6495ed",
    height: 40,
    width: 100,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
