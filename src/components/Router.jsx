import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import SearchScreen from "../screen/SearchScreen";
import PopularMovies from "../../src/screen/PopularMovies";
import LoginScreen from "../../src/screen/LoginScreen";

export const useRoute = () => {
  const { name } = useSelector((state) => state.name);

  if (!name) {
    return (
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Search movies"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Popular movies"
        component={PopularMovies}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <FontAwesome name="film" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
