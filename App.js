import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import ProductList from "./screens/ProductList";
import ShoppingList from "./screens/ShoppingList";
import { COLOR_PALETTE } from "./style/Colors";

import { store } from "./redux/configureStore";
import { Provider } from "react-redux";
// TODO : Add i18 translations

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLOR_PALETTE.BLUE,
            },
            headerTintColor: "white",
            title: "Shopping List",
            contentStyle: {
              backgroundColor: COLOR_PALETTE.CREAM,
            },
          }}
        >
          <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>
          <Stack.Screen
            name="ProductList"
            component={ProductList}
          ></Stack.Screen>
          <Stack.Screen
            name="ShoppingList"
            component={ShoppingList}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
