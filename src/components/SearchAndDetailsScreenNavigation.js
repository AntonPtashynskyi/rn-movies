import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "../screen/SearchScreen";
import PopularMovies from "../screen/PopularMovies";
import { MovieDetailsScree } from "../screen/MovieDetailsScree";

const Stack = createNativeStackNavigator();

export const SearchAndDetailsScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={MovieDetailsScree}
        options={{ headerShown: false }}
        getId={({ params }) => params.userId}
      />
    </Stack.Navigator>
  );
};

export const PopularAndDetailsScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={PopularMovies}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={MovieDetailsScree}
        options={{ headerShown: false }}
        getId={({ params }) => params.userId}
      />
    </Stack.Navigator>
  );
};
