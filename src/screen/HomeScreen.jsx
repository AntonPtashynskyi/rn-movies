import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import { logOut } from "../../redux/authSlice";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut(""));
  };

  return (
    <View style={styles.container}>
      <Text>If you want to say good bye click button below</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text> Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6495ed",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
});
