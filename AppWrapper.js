import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import App from "./App";
import { store } from "./redux/store";

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};
