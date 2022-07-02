import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { setAuthName } from "../../redux/authSlice";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(setAuthName(name));
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.formTitle}>Enter your name</Text>
        <View style={styles.loginFormWrapper}>
          <TextInput
            style={styles.input}
            textAlign="center"
            autoCapitalize={"characters"}
            onChangeText={(value) => setName(value)}
            value={name}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={handleLogIn}
          >
            <Text style={styles.buttonText}>LET'S GO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
