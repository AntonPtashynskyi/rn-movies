import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "./src/screen/SearchScreen";
import PopularMovies from "./src/screen/PopularMovies";
import { LoginScreen } from "./src/screen/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName="search">
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
      <Tab.Screen name="Search movies" component={SearchScreen} />
      <Tab.Screen name="Popular movies" component={PopularMovies} />
    </Tab.Navigator>
  );
};

export default function App() {
  const routing = useRoute(null);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
